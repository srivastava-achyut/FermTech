import { Router } from "express";
import { buyerDashboard } from "../controllers/buyer.controller.js";
import { protect, requireRole } from "../middleware/auth.middleware.js";

export const buyerRoutes = Router();

buyerRoutes.get("/dashboard", protect, requireRole("buyer"), buyerDashboard);
