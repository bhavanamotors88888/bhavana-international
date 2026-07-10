const nodemailer = require('nodemailer');
const config = require('../config/env.config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.gmailUser,
    pass: config.gmailAppPassword,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('[MailProvider] Connection error:', error);
  } else {
    console.log('[MailProvider] Server is ready to take our messages');
  }
});

module.exports = transporter;
