'use client';

import { useState } from 'react';
import { PRACTICES } from '@/content/catalog';
import { SITE } from '@/content/site';

const FIELD_CLASS =
  'min-h-[50px] w-full rounded-[12px] border border-line bg-cream px-[15px] py-[13px] text-[15px] focus:border-ink focus:bg-white';

const SERVICE_OPTIONS = [...PRACTICES.map((p) => p.title), 'Golden Visa', 'Something else'];

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-[6px]">
      <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">{label}</span>
      {children}
    </label>
  );
}

/** Enquiry form that posts to /api/enquiry. `defaultService` preselects the dropdown on service pages. */
export default function ConsultationForm({ defaultService = SERVICE_OPTIONS[0] }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    data.source = window.location.pathname;
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="flex animate-tm-slide-down-med flex-col items-start gap-[14px] py-[28px]">
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-tint text-[24px] font-extrabold text-brand">✓</span>
        <h3 className="text-[24px] font-semibold tracking-[-.02em]">Thanks, we have it</h3>
        <p className="text-[15px] leading-[1.6] text-muted">
          A consultant will call you within one working day. If it is urgent, WhatsApp us on {SITE.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[14px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[14px]">
        <Field label="Full name">
          <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={FIELD_CLASS} />
        </Field>
        <Field label="Company">
          <input name="company" type="text" autoComplete="organization" placeholder="Optional" className={FIELD_CLASS} />
        </Field>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[14px]">
        <Field label="Email">
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={FIELD_CLASS} />
        </Field>
        <Field label="Mobile">
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+971 50 000 0000" className={FIELD_CLASS} />
        </Field>
      </div>
      <Field label="I need help with">
        <select name="service" defaultValue={defaultService} className={`${FIELD_CLASS} cursor-pointer`}>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label="Anything we should know">
        <textarea name="message" rows={3} placeholder="Activity, nationality, timeline…" className={`${FIELD_CLASS} resize-y font-sans`} />
      </Field>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="relative mt-[4px] min-h-[56px] cursor-pointer overflow-hidden rounded-[14px] border-0 bg-brand px-[24px] py-[17px] text-[15.5px] font-bold text-white hover:bg-blue disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : 'Request my free consultation'}
      </button>
      {status === 'error' && (
        <p role="alert" className="text-[13.5px] font-medium text-brand">
          Something went wrong sending that. Please call or WhatsApp us on {SITE.phoneDisplay}.
        </p>
      )}
      <p className="text-[12.5px] leading-[1.55] text-muted-2">We reply within one working day. Your details are used only to respond to you, never sold to third parties.</p>
    </form>
  );
}
