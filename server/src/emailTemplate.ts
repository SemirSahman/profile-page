interface EmailData {
  name: string;
  email: string;
  message: string;
  createdAt: string;
  ip: string;
  userAgent: string;
}

export function generateEmailText(data: EmailData): string {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Message: ${data.message}`,
    "",
    `Created at: ${data.createdAt}`,
    `IP: ${data.ip}`,
    `User-Agent: ${data.userAgent}`,
  ].join("\n");
}

export function generateEmailHtml(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'IBM Plex Sans', 'Segoe UI', sans-serif; line-height: 1.6; background: linear-gradient(135deg, #ffffff 0%, #f6f2ec 100%); margin: 0; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(15, 118, 110, 0.08); box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);">
        <div style="background: linear-gradient(135deg, #0f766e 0%, #115e59 100%); color: #ffffff; padding: 48px 32px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">📧 New Contact Message</h1>
        </div>
        <div style="padding: 40px 32px; color: #1f2937;">
          <div style="margin-bottom: 32px;">
            <div style="font-size: 12px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 16px;">Sender Information</div>
            <div style="margin-bottom: 18px;">
              <div style="font-weight: 600; color: #1f2937; font-size: 13px;">Name</div>
              <div style="color: #4b5563; font-size: 14px; word-break: break-word; margin-top: 6px;">${data.name}</div>
            </div>
            <div style="margin-bottom: 18px;">
              <div style="font-weight: 600; color: #1f2937; font-size: 13px;">Email</div>
              <div style="color: #4b5563; font-size: 14px; word-break: break-word; margin-top: 6px;"><a href="mailto:${data.email}" style="color: #0f766e; text-decoration: none; font-weight: 500;">${data.email}</a></div>
            </div>
          </div>

          <div style="margin-bottom: 32px;">
            <div style="font-size: 12px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 16px;">Message</div>
            <div style="background-color: #f6f2ec; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; margin-top: 8px; color: #1f2937;">${data.message.replace(/\n/g, "<br />")}</div>
          </div>

          <div style="margin-bottom: 32px;">
            <div style="font-size: 12px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 16px;">Request Details</div>
            <div style="background-color: #f9f7f3; border: 1px solid rgba(15, 118, 110, 0.08); border-radius: 8px; padding: 16px;">
              <div style="margin-bottom: 10px; font-size: 12px; color: #4b5563;"><strong style="color: #1f2937;">Submitted:</strong> ${data.createdAt}</div>
              <div style="margin-bottom: 10px; font-size: 12px; color: #4b5563;"><strong style="color: #1f2937;">IP Address:</strong> ${data.ip}</div>
              <div style="font-size: 12px; color: #4b5563;"><strong style="color: #1f2937;">User Agent:</strong> ${data.userAgent}</div>
            </div>
          </div>
        </div>
        <div style="background-color: #f6f2ec; border-top: 1px solid rgba(15, 118, 110, 0.08); padding: 24px 32px; text-align: center; font-size: 12px; color: #4b5563;">
          <p style="margin: 0;">This message was sent via your portfolio contact form</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
