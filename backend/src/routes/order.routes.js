import { Router } from "express";
import { createOrder, orderHistory } from "../controllers/order.controller.js";
import { protect, requireRole } from "../middleware/auth.middleware.js";

export const orderRoutes = Router();

orderRoutes.get("/", protect, requireRole("buyer"), orderHistory);
orderRoutes.post("/", protect, requireRole("buyer"), createOrder);
