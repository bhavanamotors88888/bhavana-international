require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import configurations and middlewares
const config = require('./app/config/env.config');
const { globalErrorHandler } = require('./app/middleware/errorHandler');

// Import routes
const quoteRoutes = require('./app/modules/quote/quote.routes');

const app = express();

// Middlewares
app.use(cors({
  origin: '*', // For production, replace '*' with config.frontendUrl
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Bhavana International API" });
});

app.use('/api/v1/quote', quoteRoutes);

// Handle 404
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.statusCode = 404;
  next(error);
});

// Global Error Handler
app.use(globalErrorHandler);

// Start Server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
