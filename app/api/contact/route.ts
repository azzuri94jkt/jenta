import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, linkedin, phone, website, project } = await req.json();

  if (!name || !email || !project) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  await resend.emails.send({
    from: "Jenta Website <onboarding@resend.dev>",
    to: "warsam94@gmail.com",
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
        <h2 style="color:#0F2A1E;border-bottom:2px solid #0F2A1E;padding-bottom:8px">New Jenta Enquiry</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;font-weight:bold;width:160px">Name</td><td>${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">LinkedIn</td><td>${linkedin || "—"}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">Business Phone</td><td>${phone || "—"}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">Website / Stealth</td><td>${website || "—"}</td></tr>
        </table>
        <h3 style="margin-top:24px;color:#0F2A1E">About their project</h3>
        <p style="background:#f4f4f4;padding:16px;border-radius:4px;white-space:pre-wrap">${project}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
