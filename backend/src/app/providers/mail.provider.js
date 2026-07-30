const nodemailer = require('nodemailer');
const dns = require('dns');
const net = require('net');
const config = require('../config/env.config');

// Force IPv4 globally for this process — fixes ENETUNREACH on Render free tier
dns.setDefaultResultOrder('ipv4first');

const isSecure = Number(config.smtpPort) === 465;

// Custom DNS lookup that only returns IPv4 addresses
const ipv4Lookup = (hostname, options, callback) => {
  dns.resolve4(hostname, (err, addresses) => {
    if (err) {
      return callback(err);
    }
    // Return the first IPv4 address
    callback(null, addresses[0], 4);
  });
};

const createTransporter = () => {
  return nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: isSecure,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
      servername: config.smtpHost,
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
    family: 4,
    dnsLookup: ipv4Lookup,
  });
};

const sendEmailViaAPI = async ({ from, to, replyTo, subject, html }) => {
  // Create a fresh transporter for each send to avoid stale connections
  const transporter = createTransporter();

  try {
    const mailOptions = {
      from: from || `"Bhavana International" <${config.smtpUser}>`,
      to: to,
      replyTo: replyTo,
      subject: subject,
      html: html,
    };

    console.log(`Attempting to send email to: ${to}, host: ${config.smtpHost}, port: ${config.smtpPort}`);
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("Error in sendEmailViaAPI:", error.message, error.code);
    throw error;
  }
};

module.exports = { sendEmailViaAPI };

