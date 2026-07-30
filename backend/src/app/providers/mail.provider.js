const nodemailer = require('nodemailer');
const dns = require('dns');
const { promisify } = require('util');
const config = require('../config/env.config');

const resolve4 = promisify(dns.resolve4);

const isSecure = Number(config.smtpPort) === 465;

const sendEmailViaAPI = async ({ from, to, replyTo, subject, html }) => {
  try {
    // Step 1: Manually resolve hostname to IPv4 ONLY
    const addresses = await resolve4(config.smtpHost);
    const ipv4Address = addresses[0];
    console.log(`Resolved ${config.smtpHost} to IPv4: ${ipv4Address}`);

    // Step 2: Create transporter with raw IPv4 IP — bypasses all DNS resolution
    const transporter = nodemailer.createTransport({
      host: ipv4Address,
      port: Number(config.smtpPort),
      secure: isSecure,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
        servername: config.smtpHost, // Original hostname for TLS handshake
      },
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000,
    });

    // Step 3: Send the email
    const mailOptions = {
      from: from || `"Bhavana International" <${config.smtpUser}>`,
      to: to,
      replyTo: replyTo,
      subject: subject,
      html: html,
    };

    console.log(`Sending email to: ${to}, via IPv4: ${ipv4Address}:${config.smtpPort}`);
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("Error in sendEmailViaAPI:", error.message, error.code);
    throw error;
  }
};

module.exports = { sendEmailViaAPI };
