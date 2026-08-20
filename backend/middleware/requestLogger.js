/**
 * requestLogger Middleware
 * Custom Express middleware to log details of incoming HTTP requests.
 * Format: [METHOD] [PATH] [TIMESTAMP]
 */
const requestLogger = (req, res, next) => {
  const method = req.method;
  const path = req.path || req.originalUrl;
  const timestamp = new Date().toISOString();

  // Log formatted request details to the console
  console.log(`[${method}] ${path} [${timestamp}]`);

  // Pass control to the next middleware or route handler in the chain
  next();
};

module.exports = requestLogger;
