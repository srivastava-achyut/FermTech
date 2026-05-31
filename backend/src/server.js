import express from "express";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { connectDatabase } from "./config/database.js";
import { env } from "./config/environment.js";
import { corsConfig } from "./middleware/corsConfig.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import { routes } from "./routes/index.js";
import { logger } from "./utils/logger.js";

export const app = express();

app.use(helmet());
app.use(corsConfig);
app.use(apiLimiter);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(pinoHttp({ logger }));
app.use("/api", routes);
app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV !== "test") {
  await connectDatabase();
  app.listen(env.port, () => logger.info(`FermTech API listening on ${env.port}`));
}
