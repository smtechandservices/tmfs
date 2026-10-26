import { after, NextResponse } from 'next/server';
import { adminConfigured, geoFrom, sendToAdmin } from '@/lib/admin';

// Receives analytics beacons from components/analytics and forwards them to
// tmfs-admin with the visitor's user agent and location. Replies at once;
// the forward runs after the response is sent.

export async function POST(request) {
  if (!adminConfigured()) return new NextResponse(null, { status: 204 });
  const raw = await request.text();
  if (raw.length > 8000) return new NextResponse(null, { status: 413 });
  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return new NextResponse(null, { status: 400 });
  }
  const payload = { ua: request.headers.get('user-agent') || '', geo: geoFrom(request.headers), events: [event] };
  after(() => sendToAdmin('/api/ingest/event', payload).catch((err) => console.error('[track]', err.message)));
  return new NextResponse(null, { status: 204 });
}
