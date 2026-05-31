export function notFound(req, res, next) {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
}

export function errorHandler(error, req, res, _next) {
  const statusCode = error.statusCode || 500;
  req.log?.error({ error }, error.message);
  res.status(statusCode).json({
    message: error.message || "Server error",
    details: process.env.NODE_ENV === "production" ? undefined : error.stack
  });
}
