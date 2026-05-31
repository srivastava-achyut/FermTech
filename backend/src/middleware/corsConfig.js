import cors from "cors";
import { env } from "../config/environment.js";

const allowedOrigins = new Set([
  env.clientUrl,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174"
]);

function isAllowedDevOrigin(origin) {
  if (env.nodeEnv !== "development") return false;

  return /^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}):517\d$/.test(origin);
}

export const corsConfig = cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin) || isAllowedDevOrigin(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked origin: ${origin}`));
  },
  credentials: true
});
