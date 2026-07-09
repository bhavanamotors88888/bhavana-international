import app from './app/app.js';
import { config } from './app/config/env.config.js';

const PORT = config.PORT;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(` Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
