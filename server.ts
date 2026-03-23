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
    const { fullName, email, phone, subject, message, profile, formType } = req.body;

    // Validate input
    if (!fullName || !email || !message) {
      return res.status(400).json({ error: "Veuillez remplir tous les champs obligatoires." });
    }

    // Configure transporter (using environment variables)
    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = parseInt((process.env.SMTP_PORT || "587").trim());
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();

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
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"${fullName}" <${smtpUser}>`, // Use smtpUser as sender to avoid spoofing filters
      replyTo: email,
      to: "contact@itotafrica.com",
      cc: "henrique.mukanda@itotafrica.com",
      subject: `[${formType === 'partnership' ? 'PARTENARIAT' : 'SERVICE'}] Nouveau message de ${fullName}: ${subject || "Contact Itot Africa"}`,
      text: `
        Type de demande: ${formType === 'partnership' ? 'Partenariat' : 'Service / Formation'}
        Profil: ${profile || "Non spécifié"}
        Nom: ${fullName}
        Email: ${email}
        Téléphone: ${phone || "Non spécifié"}
        Sujet/Service: ${subject || "Non spécifié"}
        
        Message:
        ${message}
      `,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Type de demande:</strong> ${formType === 'partnership' ? 'Partenariat' : 'Service / Formation'}</p>
        <p><strong>Profil:</strong> ${profile || "Non spécifié"}</p>
        <p><strong>Nom:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || "Non spécifié"}</p>
        <p><strong>Sujet/Service:</strong> ${subject || "Non spécifié"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Votre message a été envoyé avec succès." });
    } catch (error: any) {
      console.error("Error sending email:", error);
      
      // Provide more specific feedback for common SMTP errors
      if (error.code === 'EAUTH' || error.responseCode === 535) {
        return res.status(500).json({ 
          error: "Erreur d'authentification SMTP : Le nom d'utilisateur ou le mot de passe est incorrect. Si vous utilisez Gmail, assurez-vous d'utiliser un 'Mot de passe d'application'." 
        });
      }
      
      res.status(500).json({ error: `Une erreur est survenue lors de l'envoi du message: ${error.message}` });
    }
  });

  // SMTP Verification on startup
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  if (smtpHost && smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt((process.env.SMTP_PORT || "587").trim()),
      secure: process.env.SMTP_PORT?.trim() === "465",
      auth: { user: smtpUser, pass: smtpPass },
      tls: { rejectUnauthorized: false }
    });
    transporter.verify((error) => {
      if (error) {
        console.error("SMTP Configuration Error on startup:", error.message);
      } else {
        console.log("SMTP Server is ready to take our messages");
      }
    });
  } else {
    console.warn("SMTP is NOT configured. Emails will be simulated in console.");
  }

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
