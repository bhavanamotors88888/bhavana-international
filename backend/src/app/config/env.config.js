require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  gmailUser: process.env.GMAIL_USER || '',
  gmailAppPassword: process.env.GMAIL_APP_PASSWORD || '',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000'
};

// Validate environment variables on startup
if (!config.gmailUser || !config.gmailAppPassword) {
  console.error("FATAL ERROR: GMAIL_USER or GMAIL_APP_PASSWORD is not set in environment variables.");
  process.exit(1);
}

module.exports = config;
