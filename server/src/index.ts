import express from "express";
import cors from "cors";
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
import { generateEmailText, generateEmailHtml } from "./emailTemplate";

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/api/health", (_, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields." });
  }

  const mailtrapToken = process.env.MAILTRAP_TOKEN;
  const mailtrapFrom = process.env.MAILTRAP_FROM || "hello@demomailtrap.co";
  const mailtrapTo = process.env.MAILTRAP_TO || "semirsahman94@gmail.com";

  if (!mailtrapToken) {
    return res
      .status(500)
      .json({ success: false, error: "Mailer is not configured." });
  }

  const createdAt = new Date().toISOString();
  const ip =
    (req.headers["x-forwarded-for"] as string) ||
    req.socket.remoteAddress ||
    "unknown";
  const userAgent = req.get("user-agent") || "unknown";

  const client = new MailtrapClient({
    token: mailtrapToken,
  });

  const subject = `New contact from ${name}`;

  const emailData = {
    name,
    email,
    message,
    createdAt,
    ip,
    userAgent,
  };

  const text = generateEmailText(emailData);
  const html = generateEmailHtml(emailData);

  try {
    const info = await client.send({
      from: { email: mailtrapFrom, name: "Contact Form" },
      to: [{ email: mailtrapTo }],
      subject,
      text,
      html,
      category: "Contact Form",
    });

    console.log({ messageId: info, name, email, createdAt });
    return res.json({ success: true });
  } catch (error) {
    console.error("Mailer error", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send message." });
  }
});

const port = Number(process.env.PORT) || 4000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});
