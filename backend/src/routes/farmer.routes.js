import { Router } from "express";
import { farmerDashboard } from "../controllers/farmer.controller.js";
import { protect, requireRole } from "../middleware/auth.middleware.js";

export const farmerRoutes = Router();

farmerRoutes.get("/dashboard", protect, requireRole("farmer"), farmerDashboard);
