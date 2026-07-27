const nodemailer = require('nodemailer');
const config = require('../config/env.config');
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    config.googleClientId,
    config.googleClientSecret,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: config.googleRefreshToken
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        console.error('[MailProvider] Failed to get OAuth2 Access Token:', err.message);
        reject(new Error('Failed to generate access token for email service.'));
      } else {
        resolve(token);
      }
    });
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: config.googleUserEmail,
      accessToken,
      clientId: config.googleClientId,
      clientSecret: config.googleClientSecret,
      refreshToken: config.googleRefreshToken
    }
  });

  return transporter;
};

module.exports = { createTransporter };
