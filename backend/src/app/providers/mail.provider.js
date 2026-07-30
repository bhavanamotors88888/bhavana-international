const nodemailer = require('nodemailer');
const config = require('../config/env.config');

const transporter = nodemailer.createTransport({
  host: config.smtpHost,
  port: Number(config.smtpPort),
  secure: Number(config.smtpPort) === 465, // true for port 465, false for 587
  auth: {
    user: config.smtpUser,
    pass: config.smtpPass,
  },
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
