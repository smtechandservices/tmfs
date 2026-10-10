import { NextResponse } from 'next/server';

// Website enquiries are emailed via Resend (https://resend.com). Configure:
//   RESEND_API_KEY  API key
//   ENQUIRY_TO      recipient(s), comma-separated
//   ENQUIRY_FROM    verified sender, e.g. "TMFS Website <web@timemachine.ae>"
// Without these, development logs the enquiry to the console and production
// returns 503 so a missing config fails loudly instead of dropping leads.

const FIELDS = ['name', 'company', 'email', 'phone', 'service', 'message', 'source'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const { RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM } = process.env;
  if (!RESEND_API_KEY || !ENQUIRY_TO) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[enquiry] email not configured, received:', data);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: 'Enquiries are not configured' }, { status: 503 });
  }

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

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: ENQUIRY_FROM || 'TMFS Website <onboarding@resend.dev>',
      to: ENQUIRY_TO.split(',').map((s) => s.trim()),
      reply_to: data.email,
      subject: `Website enquiry: ${data.service || 'General'} from ${data.name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error('[enquiry] Resend error', res.status, await res.text());
    return NextResponse.json({ error: 'Could not send enquiry' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
