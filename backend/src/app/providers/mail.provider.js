const nodemailer = require('nodemailer');
const config = require('../config/env.config');

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend',
    pass: config.resendApiKey,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('[MailProvider] Connection error:', error);
  } else {
    console.log('[MailProvider] Server is ready to take our messages (Resend SMTP)');
  }
});

module.exports = transporter;
