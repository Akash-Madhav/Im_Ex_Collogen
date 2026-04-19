import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, country, email, requirement, application, message } = body;

    // Validation (Simple check since client side already validated)
    if (!email || !company) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // SMTP Config (Placeholders - USER should fill in .env.local)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465' ? true : false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Inquiry" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'export@aroonblossom.com',
      subject: `New B2B Inquiry from ${company} (${country})`,
      text: `
        Business Inquiry Details:
        -------------------------
        Name: ${name}
        Company: ${company}
        Country: ${country}
        Email: ${email}
        
        Requirements:
        -------------------------
        Requirement/Quantity: ${requirement}
        Application: ${application}
        
        Message:
        -------------------------
        ${message}
      `,
    };

    // Note: This will fail until real credentials are provided in .env
    // For now, we simulate success if env vars are missing to allow UI testing
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn('SMTP credentials missing. Simulating successful submission.');
    }

    return NextResponse.json({ message: 'Inquiry sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
