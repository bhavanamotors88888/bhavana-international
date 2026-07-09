const parseEnv = () => {
  return {
    PORT: process.env.PORT || '5000',
    NODE_ENV: process.env.NODE_ENV || 'production',
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
    SMTP_HOST: process.env.SMTP_HOST || '',
    SMTP_PORT: process.env.SMTP_PORT || '587',
    SMTP_USER: process.env.SMTP_USER || '',
    SMTP_PASS: process.env.SMTP_PASS || '',
  };
};

export const config = parseEnv();
