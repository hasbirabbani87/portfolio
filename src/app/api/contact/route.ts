import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validasi dengan Zod
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validasi gagal. Periksa kembali isian form.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website } = parsed.data;

    // Jika honeypot terisi, pura-pura sukses agar bot tidak mencoba ulang
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // TODO: Integrasikan dengan Resend / Nodemailer saat production
    // Contoh:
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: 'email-lo@domain.com',
    //   subject: `[Portfolio] ${subject} — ${name}`,
    //   replyTo: email,
    //   text: message,
    // });

    // Simulasi log server saat development
    console.log("New Portfolio Inquiry:", { name, email, subject, message });

    return NextResponse.json(
      {
        success: true,
        message: "Pesan terkirim. Saya akan membalas dalam 1x24 jam.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}