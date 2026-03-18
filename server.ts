import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { createServer as createViteServer } from "vite";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    const { fullName, email, phone, subject, message, profile } = req.body;

    // Validate input
    if (!fullName || !email || !message) {
      return res.status(400).json({ error: "Veuillez remplir tous les champs obligatoires." });
    }

    // Configure transporter (using environment variables)
    // For demo purposes, if no SMTP is provided, we'll just log it
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("SMTP not configured. Form data:", req.body);
      return res.status(200).json({ 
        message: "Message reçu (Simulation: SMTP non configuré).",
        data: req.body 
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${smtpUser}>`, // Use smtpUser as sender to avoid spoofing filters
      replyTo: email,
      to: "contact@itotafrica.com",
      cc: "henrique.mukanda@itotafrica.com",
      subject: `Nouveau message de ${fullName}: ${subject || "Contact Itot Africa"}`,
      text: `
        Profil: ${profile || "Non spécifié"}
        Nom: ${fullName}
        Email: ${email}
        Téléphone: ${phone || "Non spécifié"}
        Sujet: ${subject || "Non spécifié"}
        
        Message:
        ${message}
      `,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Profil:</strong> ${profile || "Non spécifié"}</p>
        <p><strong>Nom:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || "Non spécifié"}</p>
        <p><strong>Sujet:</strong> ${subject || "Non spécifié"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Votre message a été envoyé avec succès." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Une erreur est survenue lors de l'envoi du message." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
