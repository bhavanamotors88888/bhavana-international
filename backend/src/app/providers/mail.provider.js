const nodemailer = require('nodemailer');
const config = require('../config/env.config');

const isSecure = Number(config.smtpPort) === 465;

const transporter = nodemailer.createTransport({
  host: config.smtpHost,
  port: Number(config.smtpPort),
  secure: isSecure, // false for port 587, true for 465
  auth: {
    user: config.smtpUser,
    pass: config.smtpPass,
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  family: 4, // Force IPv4 — Render free tier does not support IPv6 outbound
});

const sendEmailViaAPI = async ({ from, to, replyTo, subject, html }) => {
  try {
    const mailOptions = {
      from: from || `"Bhavana International" <${config.smtpUser}>`,
      to: to,
      replyTo: replyTo,
      subject: subject,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("Error in sendEmailViaAPI:", error);
    throw error;
  }
};

module.exports = { sendEmailViaAPI };
