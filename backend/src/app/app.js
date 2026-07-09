import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { xssClean } from './middleware/xss.middleware.js';
import contactRoutes from './modules/contact/contact.routes.js';
import { globalErrorHandler, notFoundHandler } from './middleware/error.middleware.js';
import { config } from './config/env.config.js';

const app = express();

app.set('trust proxy', 1);

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// CORS MUST be the very first middleware!
app.use(cors(corsOptions));

if (config.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') return next();
    
    // Skip HTTPS redirect for localhost
    if (req.hostname === 'localhost' || req.hostname === '127.0.0.1') return next();
    
    if (req.headers['x-forwarded-proto'] !== 'https' && !req.secure) {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

app.get('/hello',(req,res)=>{
  res.send('Hello World!')
}) 

app.use(helmet({
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { success: false, message: 'Too many requests from this IP, please try again later.' }
});
app.use('/api/', limiter);

// Body Parsing Middlewares
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(xssClean);

// Routes
app.use('/api/v1/contacts', contactRoutes);

// Handle undefined routes
app.use(notFoundHandler);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
