require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  contactEmail: process.env.CONTACT_EMAIL || 'bhavanamotors.88888@gmail.com',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  googleUserEmail: process.env.GOOGLE_USER_EMAIL || process.env.CONTACT_EMAIL || 'bhavanamotors.88888@gmail.com'
};

// Validate environment variables on startup
if (!config.googleClientId || !config.googleClientSecret || !config.googleRefreshToken) {
  console.warn("WARNING: Google OAuth credentials are not fully set in environment variables. Email sending may fail.");
}

module.exports = config;
