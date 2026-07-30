require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  smtpHost: process.env.SMTP_HOST || 'smtp.hostinger.com',
  smtpPort: process.env.SMTP_PORT || 465,
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  contactEmail: process.env.SMTP_USER
};

// Validate environment variables on startup
if (!config.smtpUser || !config.smtpPass) {
  console.warn("WARNING: SMTP credentials are not fully set in environment variables. Email sending may fail.");
}

module.exports = config;
