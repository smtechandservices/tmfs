// First-party analytics for tmfs-admin. Events go to this site's own
// /api/track (so ad blockers that target third-party hosts leave them alone),
// which adds geo + user agent and forwards them to the admin.
//
// No cookies: an anonymous visitor id lives in localStorage, and a session
// ends after 30 minutes of inactivity or when the visitor arrives from a new
// campaign. Staff can exclude their own browser with ?tm_ignore=1.

const VISITOR_KEY = 'tm_vid';
const SESSION_KEY = 'tm_sess';
const IGNORE_KEY = 'tm_ignore';
const SESSION_TIMEOUT = 30 * 60 * 1000;
const UTM_KEYS = ['source', 'medium', 'campaign', 'term', 'content'];

function storage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function uuid() {
  return crypto.randomUUID?.() ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function readJSON(key) {
  try {
    return JSON.parse(storage()?.getItem(key) || 'null');
  } catch {
    return null;
  }
}

/** UTM tags from the current URL, with ad click ids standing in when no tags are set. */
function campaignFromUrl() {
  const q = new URLSearchParams(window.location.search);
  const utm = {};
  for (const k of UTM_KEYS) if (q.get(`utm_${k}`)) utm[k] = q.get(`utm_${k}`).slice(0, 200);
  if (!utm.source) {
    if (q.get('gclid') || q.get('gbraid') || q.get('wbraid')) Object.assign(utm, { source: 'google', medium: 'cpc' });
    else if (q.get('msclkid')) Object.assign(utm, { source: 'bing', medium: 'cpc' });
    else if (q.get('fbclid')) Object.assign(utm, { source: 'facebook', medium: 'social' });
  }
  return utm;
}

function externalReferrer() {
  try {
    const ref = document.referrer && new URL(document.referrer);
    return ref && ref.host !== window.location.host ? ref.href.slice(0, 500) : null;
  } catch {
    return null;
  }
}

function isIgnored() {
  const s = storage();
  const flag = new URLSearchParams(window.location.search).get('tm_ignore');
  if (flag === '1') s?.setItem(IGNORE_KEY, '1');
  if (flag === '0') s?.removeItem(IGNORE_KEY);
  return s?.getItem(IGNORE_KEY) === '1';
}

/** The current session (created or extended), with the attribution it started with. */
function session() {
  const s = storage();
  let vid = s?.getItem(VISITOR_KEY);
  if (!vid) {
    vid = uuid();
    s?.setItem(VISITOR_KEY, vid);
  }
  const now = Date.now();
  const utm = campaignFromUrl();
  let sess = readJSON(SESSION_KEY);
  const newCampaign = utm.source && (utm.source !== sess?.utm?.source || utm.campaign !== sess?.utm?.campaign);
  if (!sess || now - sess.last > SESSION_TIMEOUT || newCampaign) {
    sess = { id: uuid(), referrer: externalReferrer(), utm, landing: window.location.pathname };
  }
  sess.last = now;
  s?.setItem(SESSION_KEY, JSON.stringify(sess));
  return { vid, ...sess };
}

/** IANA timezone, e.g. Asia/Dubai. The admin falls back to it for the country when there are no geo headers. */
function timeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone?.slice(0, 64) || null;
  } catch {
    return null;
  }
}

/** Visitor + session ids and attribution, sent along with an enquiry. */
export function attribution() {
  try {
    const s = session();
    return { visitor_id: s.vid, session_id: s.id, attribution: { landing: s.landing, referrer: s.referrer, utm: s.utm, tz: timeZone() } };
  } catch {
    return {};
  }
}

export function track(type, data = {}) {
  try {
    if (isIgnored()) return;
    const s = session();
    const body = JSON.stringify({
      type,
      path: window.location.pathname,
      title: document.title.slice(0, 300),
      referrer: s.referrer,
      utm: s.utm,
      vid: s.vid,
      sid: s.id,
      screen: `${window.screen.width}x${window.screen.height}`,
      lang: navigator.language,
      tz: timeZone(),
      ts: Date.now(),
      ...data,
    });
    if (!navigator.sendBeacon?.('/api/track', body)) {
      fetch('/api/track', { method: 'POST', body, keepalive: true }).catch(() => {});
    }
  } catch {
    // Analytics must never break the page.
  }
}
