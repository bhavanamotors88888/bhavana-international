require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  frontendUrl: process.env.FRONTEND_URL,
  smtpUser: process.env.SMTP_USER,
  contactEmail: process.env.SMTP_USER,
  resendApiKey: process.env.RESEND_API_KEY,
};

// Validate environment variables on startup
if (!config.resendApiKey) {
  console.warn('WARNING: RESEND_API_KEY is not set. Email sending will fail.');
}
if (!config.smtpUser) {
  console.warn('WARNING: SMTP_USER (sender email) is not set.');
}

module.exports = config;
