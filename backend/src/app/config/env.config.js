require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  resendApiKey: process.env.RESEND_API_KEY || 're_ScVujnZ8_8AZDe2nwHSBPkyrsEyapmPh4',
  resendFromEmail: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
  contactEmail: process.env.CONTACT_EMAIL || process.env.GMAIL_USER || 'bhavanamotors.88888@gmail.com',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000'
};

// Validate environment variables on startup
if (!config.resendApiKey) {
  console.error("FATAL ERROR: RESEND_API_KEY is not set in environment variables.");
  process.exit(1);
}

module.exports = config;
