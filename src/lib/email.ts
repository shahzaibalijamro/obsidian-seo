import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: (Number(process.env.SMTP_PORT) || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message?: string;
}

export async function sendContactNotification(data: ContactEmailData) {
  const { name, email, company, service, message } = data;

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; border-radius: 12px; overflow: hidden; border: 1px solid #1a1a2e;">
      <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px 32px;">
        <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">New Contact Form Submission</h1>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1a1a2e; color: #9ca3af; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1a1a2e; color: #ffffff; font-size: 15px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1a1a2e; color: #9ca3af; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1a1a2e; font-size: 15px;">
              <a href="mailto:${email}" style="color: #818cf8; text-decoration: none;">${email}</a>
            </td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1a1a2e; color: #9ca3af; font-size: 13px; vertical-align: top;">Company</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1a1a2e; color: #ffffff; font-size: 15px;">${company}</td>
          </tr>` : ''}
          ${service ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1a1a2e; color: #9ca3af; font-size: 13px; vertical-align: top;">Service</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1a1a2e; color: #ffffff; font-size: 15px;">${service}</td>
          </tr>` : ''}
          ${message ? `
          <tr>
            <td style="padding: 12px 0; color: #9ca3af; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
          </tr>` : ''}
        </table>
      </div>
      <div style="padding: 16px 32px; background: #0d0d14; text-align: center;">
        <p style="margin: 0; color: #6b7280; font-size: 12px;">Sent from the Nawa Digital website contact form</p>
      </div>
    </div>
  `;

  const textBody = [
    `New Contact Form Submission`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    service ? `Service: ${service}` : null,
    message ? `\nMessage:\n${message}` : null,
  ].filter(Boolean).join('\n');

  await transporter.sendMail({
    from: `"Nawa Digital Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || 'contact@nawadigital.me',
    replyTo: email,
    subject: `New Contact: ${name}${company ? ` from ${company}` : ''}`,
    text: textBody,
    html: htmlBody,
  });
}
