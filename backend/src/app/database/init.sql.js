import { query } from './db.config.js';

export const initializeDatabase = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact_inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        company VARCHAR(255),
        country VARCHAR(100),
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await query(createTableQuery);
    console.log('[Database] contact_inquiries table is ready.');
  } catch (error) {
    console.error('[Database] Failed to initialize database:', error.message);
    // Don't throw here to allow the server to start even if DB init fails initially (e.g. wrong credentials)
  }
};
