import app from './app/app.js';
import { config } from './app/config/env.config.js';
import { initializeDatabase } from './app/database/init.sql.js';

const PORT = config.PORT;

const startServer = async () => {
  try {
    if (config.DB_HOST) {
      await initializeDatabase();
    }
    
    app.listen(PORT, () => {
      console.log(` Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};


startServer();
