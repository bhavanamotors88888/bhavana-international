import pkg from 'pg';
const { Pool } = pkg;
import { config } from '../config/env.config.js';

let pool;

if (config.DB_HOST) {
  const poolConfig = {
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DB_NAME,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    max: config.DB_POOL_MAX,
    idleTimeoutMillis: config.DB_POOL_IDLE,
    connectionTimeoutMillis: config.DB_POOL_ACQUIRE,
  };

  if (config.DB_SSL) {
    poolConfig.ssl = {
      rejectUnauthorized: false, // Required for many managed DBs like Render
    };
  }

  console.log(`[Database] Initializing connection pool to ${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME} as user ${config.DB_USER}`);
  pool = new Pool(poolConfig);

  pool.on('error', (err) => {
    console.error('\n[Database] ❌ Unexpected error on idle client:');
    console.error(err.stack || err);
    console.log('--------------------------------------------------\n');
  });
  
  pool.on('connect', () => {
    console.log('[Database] 🔌 New client connected to the pool');
  });
} else {
  console.log('[Database] ⚠️ DB_HOST is not set. Database features are disabled.');
}

export const query = async (text, params) => {
  if (!pool) {
    throw new Error('Database pool is not initialized because DB_HOST is not set.');
  }
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('[Database] Executed query', { text, duration, rows: res.rowCount });
  return res;
};

export const getClient = async () => {
  if (!pool) {
    throw new Error('Database pool is not initialized.');
  }
  return await pool.connect();
};

export { pool };
