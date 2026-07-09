import 'dotenv/config';

const parseEnv = () => {
  return {
    PORT: process.env.PORT || '5000',
    NODE_ENV: process.env.NODE_ENV || 'production',
    FRONTEND_URL: process.env.FRONTEND_URL,
    SMTP_HOST: process.env.SMTP_HOST || '',
    SMTP_PORT: process.env.SMTP_PORT || '587',
    SMTP_USER: process.env.SMTP_USER || '',
    SMTP_PASS: process.env.SMTP_PASS || '',
    DB_HOST: process.env.DB_HOST || '',
    DB_PORT: process.env.DB_PORT || '5432',
    DB_NAME: process.env.DB_NAME || '',
    DB_USER: process.env.DB_USER || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_SSL: process.env.DB_SSL === 'true',
    DB_POOL_MAX: parseInt(process.env.DB_POOL_MAX || '20', 10),
    DB_POOL_IDLE: parseInt(process.env.DB_POOL_IDLE || '10000', 10),
    DB_POOL_ACQUIRE: parseInt(process.env.DB_POOL_ACQUIRE || '30000', 10),
  };
};

export const config = parseEnv();
