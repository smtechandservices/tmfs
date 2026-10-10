'use client';

import { useId, useState } from 'react';
import Icon from '../ui/Icon';
import { BUTTON } from '../ui/Button';
import { PRACTICES } from '@/content/catalog';
import { SITE } from '@/content/site';

const FIELD_CLASS =
  'min-h-[44px] w-full rounded-[6px] border border-rule bg-soft px-[15px] py-[13px] text-[14px] text-blue transition-[border-color,background,box-shadow] duration-200 placeholder:text-slate-2 focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(219,20,28,.12)] max-md:min-h-[48px] max-md:px-[14px] max-md:py-[12px] max-md:text-[16px]';

const SERVICE_OPTIONS = [...PRACTICES.map((p) => p.title), 'Golden Visa', 'Something else'];

// Most enquiries come from the GCC, India and the UK; the list stays short on purpose.
const DIAL_CODES = [
  ['🇦🇪', '+971'],
  ['🇸🇦', '+966'],
  ['🇶🇦', '+974'],
  ['🇰🇼', '+965'],
  ['🇴🇲', '+968'],
  ['🇧🇭', '+973'],
  ['🇮🇳', '+91'],
  ['🇵🇰', '+92'],
  ['🇬🇧', '+44'],
  ['🇺🇸', '+1'],
];

function Field({ label, htmlFor, children }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={htmlFor} className="text-[11px] font-bold uppercase tracking-[.12em] text-brand max-md:text-[10.5px]">
        {label}
      </label>
      {children}
    </div>
  );
}

/**
 * Enquiry form that posts to /api/enquiry. `defaultService` preselects the
 * dropdown on service pages. `compact` is the short sidebar version: name,
 * email and phone only, stacked, with a full-width callback button.
 */
export default function ConsultationForm({ defaultService = '', compact = false }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const id = useId();
  const row = compact ? 'grid grid-cols-1 gap-[14px]' : 'grid grid-cols-2 gap-[16px] max-[560px]:grid-cols-1';

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    data.phone = `${data.dial} ${data.phone}`;
    delete data.dial;
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
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-pale text-[24px] font-extrabold text-brand">✓</span>
        <h3 className="text-[24px] font-semibold tracking-[-.02em]">Thanks, we have it</h3>
        <p className="text-[15px] leading-[1.6] text-slate">
          A consultant will call you within one working day. If it is urgent, WhatsApp us on {SITE.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`flex flex-col max-md:gap-[14px] ${compact ? 'gap-[14px]' : 'gap-[16px]'}`}>
      <div className={row}>
        <Field label="Full name" htmlFor={`${id}-name`}>
          <input id={`${id}-name`} name="name" type="text" required autoComplete="name" placeholder="Your name" className={FIELD_CLASS} />
        </Field>
        {!compact && (
          <Field label="Company" htmlFor={`${id}-company`}>
            <input id={`${id}-company`} name="company" type="text" autoComplete="organization" placeholder="Company name" className={FIELD_CLASS} />
          </Field>
        )}
      </div>
      <div className={row}>
        <Field label="Email" htmlFor={`${id}-email`}>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" placeholder="work@email.com" className={FIELD_CLASS} />
        </Field>
        <Field label="Phone" htmlFor={`${id}-phone`}>
          <div className="flex w-full rounded-[10px] border border-rule bg-white transition-all hover:border-slate-2 focus-within:border-brand focus-within:shadow-[0_0_0_3px_rgba(219,20,28,.12)]">
            <select
              name="dial"
              aria-label="Country code"
              defaultValue="+971"
              className="min-h-[46px] flex-none cursor-pointer appearance-none rounded-l-[10px] border-r border-rule bg-transparent pr-[12px] pl-[14px] text-[14px] font-medium text-blue hover:bg-soft"
            >
              {DIAL_CODES.map(([flag, code]) => (
                <option key={code} value={code}>
                  {flag} {code}
                </option>
              ))}
            </select>
            <input id={`${id}-phone`} name="phone" type="tel" required autoComplete="tel-national" inputMode="tel" placeholder="50 000 0000" className="min-w-0 flex-1 bg-transparent px-[16px] py-[13px] text-[14.5px] text-blue placeholder:text-slate-2 max-md:text-[16px]" />
          </div>
        </Field>
      </div>
      {!compact && (
        <>
          <Field label="Service of interest" htmlFor={`${id}-service`}>
            <div className="relative">
              <select id={`${id}-service`} name="service" defaultValue={defaultService} className={`${FIELD_CLASS} cursor-pointer appearance-none pr-[42px]`}>
                <option value="">Select a service (optional)</option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <Icon name="chevron-down" size={16} className="pointer-events-none absolute top-1/2 right-[15px] -translate-y-1/2 text-blue" />
            </div>
          </Field>
          <Field label="How can we help?" htmlFor={`${id}-message`}>
            <textarea id={`${id}-message`} name="message" rows={3} placeholder="Brief outline of your requirement…" className={`${FIELD_CLASS} min-h-[96px] resize-y font-sans max-md:min-h-[88px]`} />
          </Field>
        </>
      )}
      {/* Honeypot: hidden from people, filled in by bots. */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button type="submit" disabled={status === 'sending'} className={`${BUTTON.navy} group/btn mt-[4px] cursor-pointer disabled:cursor-wait disabled:opacity-70 ${compact ? 'w-full' : 'self-start'}`}>
        {status === 'sending' ? 'Sending…' : compact ? 'Request a callback' : 'Send enquiry'}
        <Icon name="arrow-right" size={17} className="transition-transform duration-[250ms] group-hover/btn:translate-x-[4px]" />
      </button>
      {status === 'error' && (
        <p role="alert" className="text-[13.5px] font-medium text-brand">
          Something went wrong sending that. Please call or WhatsApp us on {SITE.phoneDisplay}.
        </p>
      )}
      <p className={`text-[11.5px] tracking-[.01em] text-slate-2 ${compact ? 'text-center' : ''}`}>
        {compact ? 'No obligation · Reply within one working day' : 'Confidential · A consultant replies within one working day'}
      </p>
    </form>
  );
}
