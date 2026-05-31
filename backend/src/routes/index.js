import { Router } from "express";
import { adminRoutes } from "./admin.routes.js";
import { authRoutes } from "./auth.routes.js";
import { buyerRoutes } from "./buyer.routes.js";
import { diseaseRoutes } from "./disease.routes.js";
import { farmerRoutes } from "./farmer.routes.js";
import { listingRoutes } from "./listing.routes.js";
import { orderRoutes } from "./order.routes.js";

export const routes = Router();

routes.get("/health", (_req, res) => {
  res.json({ status: "ok", app: "FermTech API" });
});

routes.use("/auth", authRoutes);
routes.use("/farmer", farmerRoutes);
routes.use("/buyer", buyerRoutes);
routes.use("/admin", adminRoutes);
routes.use("/disease", diseaseRoutes);
routes.use("/listings", listingRoutes);
routes.use("/orders", orderRoutes);
