import mongoose from "mongoose";
import { env } from "./environment.js";
import { logger } from "../utils/logger.js";

export async function connectDatabase() {
  if (!env.mongoUri) {
    logger.warn("MONGODB_URI is missing. API will start, but database routes will fail.");
    return;
  }

  await mongoose.connect(env.mongoUri);
  logger.info("Connected to MongoDB Atlas");
}
