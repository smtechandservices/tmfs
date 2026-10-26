import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { adminConfigured, geoFrom, sendToAdmin } from '@/lib/admin';

// Website enquiries are emailed to the team over SMTP (nodemailer) and recorded
// as leads in tmfs-admin (see lib/admin.js), along with a log of that email.
// Configure:
//   SMTP_HOST, SMTP_PORT  e.g. smtp.office365.com and 587 (465 uses TLS from the start)
//   SMTP_USER, SMTP_PASS  mailbox login, the same one tmfs-admin uses
//   ENQUIRY_TO            recipient(s), comma-separated
//   ENQUIRY_FROM          sender, e.g. "TMFS Website <web@timemachine.ae>" (defaults to SMTP_USER)
// The two are independent: the enquiry succeeds if either the email or the
// admin accepted it, so one being down never loses a lead. With neither
// configured, development logs the enquiry to the console and production
// returns 503 so a missing config fails loudly instead of dropping leads.

const FIELDS = ['name', 'company', 'email', 'phone', 'service', 'message', 'source'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const env = (k) => (process.env[k] || '').trim();
const emailConfigured = () => Boolean(env('SMTP_HOST') && env('ENQUIRY_TO') && (env('ENQUIRY_FROM') || env('SMTP_USER')));

let transport;
function transporter() {
  if (!transport) {
    const port = Number(env('SMTP_PORT')) || 587;
    transport = nodemailer.createTransport({
      host: env('SMTP_HOST'),
      port,
      secure: port === 465,
      auth: env('SMTP_USER') ? { user: env('SMTP_USER'), pass: env('SMTP_PASS') } : undefined,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
    });
  }
  return transport;
}

/** Emails the team; resolves to the log the admin stores, with `email_status` 'sent' or 'failed'. */
async function emailTeam(data) {
  const from = env('ENQUIRY_FROM') || env('SMTP_USER');
  const to = env('ENQUIRY_TO').split(',').map((s) => s.trim()).filter(Boolean);
  const subject = `Website enquiry: ${data.service || 'General'} from ${data.name}`;
  const text = [
    `Name: ${data.name}`,
    `Company: ${data.company || '-'}`,
    `Email: ${data.email}`,
    `Mobile: ${data.phone}`,
    `Service: ${data.service || '-'}`,
    `Page: ${data.source || '-'}`,
    '',
    data.message || '(no message)',
  ].join('\n');

  const log = { email_from: from, email_to: to.join(', '), email_subject: subject, email_text: text };
  try {
    const info = await transporter().sendMail({ from, to, replyTo: data.email, subject, text });
    return { ...log, email_status: 'sent', email_message_id: info.messageId };
  } catch (err) {
    console.error('[enquiry] email failed', err.message);
    return { ...log, email_status: 'failed', email_error: err.message };
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot filled in: pretend success so bots don't retry.
  if (body.website) return NextResponse.json({ ok: true });

  const data = Object.fromEntries(FIELDS.map((k) => [k, String(body[k] ?? '').trim().slice(0, 2000)]));
  if (!data.name || !data.phone || !EMAIL_RE.test(data.email)) {
    return NextResponse.json({ error: 'Name, mobile and a valid email are required' }, { status: 400 });
  }

  const emailing = emailConfigured();
  if (!emailing && !adminConfigured()) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[enquiry] email and admin not configured, received:', data);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: 'Enquiries are not configured' }, { status: 503 });
  }

  const email = emailing ? await emailTeam(data) : null;
  const emailed = email?.email_status === 'sent';

  let recorded = false;
  if (adminConfigured()) {
    try {
      await sendToAdmin('/api/ingest/lead', {
        ...data,
        ...email,
        visitor_id: body.visitor_id,
        session_id: body.session_id,
        attribution: body.attribution,
        geo: geoFrom(request.headers),
        ua: request.headers.get('user-agent') || '',
      });
      recorded = true;
    } catch (err) {
      console.error('[enquiry] admin failed', err.message);
    }
  }

  if (!emailed && !recorded) return NextResponse.json({ error: 'Could not send enquiry' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
