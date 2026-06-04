import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Lead intake from the /tools calculators.
 *
 * Emails the lead via Resend when configured; otherwise returns 503 so the
 * client falls back to a pre-filled mailto (the lead still reaches us).
 *
 * Env (set on the dashboard's Vercel project to activate auto-email):
 *   RESEND_API_KEY = re_...
 *   LEAD_TO        = hello@sidestream.be   (default)
 *   LEAD_FROM      = "Sidestream <leads@sidestream.be>"  (must be a verified domain)
 */
export async function POST(req: NextRequest) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let body: { name?: string; email?: string; message?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const { name = "", email = "", message = "", source = "website" } = body;
  if (!message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const to = process.env.LEAD_TO || "hello@sidestream.be";
  const from = process.env.LEAD_FROM || "Sidestream Leads <leads@sidestream.be>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `New lead (${source}) — ${name || email}`,
      text: `${message}\n\nFrom: ${name || "—"} <${email}>\nSource: ${source}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
