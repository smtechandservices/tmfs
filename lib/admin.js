// Connection to tmfs-admin (the CRM + analytics app). Configure:
//   ADMIN_URL         e.g. https://admin.timemachine.ae
//   ADMIN_INGEST_KEY  the INGEST_KEY set on the admin project
// Without them, tracking is a no-op and enquiries are only emailed.

export const adminConfigured = () => Boolean(process.env.ADMIN_URL && process.env.ADMIN_INGEST_KEY);

/** Visitor location from Vercel's edge headers (absent in local dev). */
export function geoFrom(headers) {
  const city = headers.get('x-vercel-ip-city');
  return {
    country: headers.get('x-vercel-ip-country') || null,
    region: headers.get('x-vercel-ip-country-region') || null,
    city: city ? decodeURIComponent(city) : null,
  };
}

export async function sendToAdmin(path, payload) {
  const res = await fetch(`${process.env.ADMIN_URL.replace(/\/$/, '')}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.ADMIN_INGEST_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`admin ${path} responded ${res.status}`);
  return res.json();
}
