import { Router } from "express";
import { adminDashboard, users, pendingListings } from "../controllers/admin.controller.js";

import { analytics } from "../controllers/analytics.controller.js";
import { protect, requireRole } from "../middleware/auth.middleware.js";

export const adminRoutes = Router();

adminRoutes.get("/dashboard", protect, requireRole("admin"), adminDashboard);
adminRoutes.get("/users", protect, requireRole("admin"), users);

adminRoutes.get("/analytics", protect, requireRole("admin"), analytics);
adminRoutes.get(
  "/listings/pending",
  protect,
  requireRole("admin"),
  pendingListings
);