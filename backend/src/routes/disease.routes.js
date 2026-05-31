import { Router } from "express";
import { createDiagnosis, diagnosisHistory } from "../controllers/disease.controller.js";
import { upload } from "../config/multer.js";
import { protect, requireRole } from "../middleware/auth.middleware.js";

export const diseaseRoutes = Router();

diseaseRoutes.get("/history", protect, requireRole("farmer"), diagnosisHistory);
diseaseRoutes.post("/diagnose", protect, requireRole("farmer"), upload.single("image"), createDiagnosis);
