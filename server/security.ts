import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import type { Express, Request, Response } from "express";

/**
 * Apply comprehensive security middleware to the Express app
 * Implements security headers, rate limiting, and compression
 */
export function applySecurity(app: Express) {
  // 1. Compression - Reduce bandwidth usage
  app.use(
    compression({
      filter: (req: Request, res: Response) => {
        if (req.headers["x-no-compression"]) {
          return false;
        }
        return compression.filter(req, res);
      },
      level: 6, // Balance between speed and compression ratio
    })
  );

  // 2. Security Headers - Helmet.js with strict CSP
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: [
            "'self'",
            "'unsafe-inline'", // Required for Vite in development
            "https://cdn.jsdelivr.net", // For external libraries
          ],
          styleSrc: [
            "'self'",
            "'unsafe-inline'", // Required for styled-components and CSS-in-JS
            "https://fonts.googleapis.com",
          ],
          fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
          imgSrc: ["'self'", "data:", "https:", "blob:"],
          connectSrc: ["'self'", "https://api.noderr.xyz"],
          frameSrc: ["'none'"],
          objectSrc: ["'none'"],
          mediaSrc: ["'self'"],
          workerSrc: ["'self'", "blob:"],
          childSrc: ["'self'", "blob:"],
          formAction: ["'self'"],
          frameAncestors: ["'none'"],
          baseUri: ["'self'"],
          manifestSrc: ["'self'"],
        },
      },
      crossOriginEmbedderPolicy: false, // Allow embedding images from CDNs
      crossOriginResourcePolicy: { policy: "cross-origin" },
      xFrameOptions: { action: "deny" }, // Prevent clickjacking
      hsts: {
        maxAge: 31536000, // 1 year
        includeSubDomains: true,
        preload: true,
      },
      noSniff: true, // Prevent MIME-sniffing
      referrerPolicy: { policy: "no-referrer" },
      xssFilter: true,
    })
  );

  // 3. Rate Limiting - Prevent DoS attacks
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later.",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (req: Request, res: Response) => {
      res.status(429).json({
        error: "Too many requests, please try again later.",
      });
    },
  });

  app.use(limiter);

  console.log("✅ Security middleware applied");
}
