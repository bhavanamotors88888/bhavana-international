const config = require('../config/env.config');
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

const sendEmailViaAPI = async ({ from, to, replyTo, subject, html }) => {
  const oauth2Client = new OAuth2(
    config.googleClientId,
    config.googleClientSecret,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: config.googleRefreshToken
  });

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  // Construct RFC 2822 message
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const messageParts = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${utf8Subject}`,
    `Reply-To: ${replyTo}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    '',
    html,
  ];

  const message = messageParts.join('\n');
  
  // The Gmail API requires base64url encoding
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
    },
  });

  return res.data;
};

module.exports = { sendEmailViaAPI };
