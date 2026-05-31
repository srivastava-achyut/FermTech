import { Router } from "express";
import { createListing, listApprovedListings, myListings, updateListingStatus } from "../controllers/listing.controller.js";
import { protect, requireRole } from "../middleware/auth.middleware.js";
import { upload } from "../config/multer.js";

export const listingRoutes = Router();

listingRoutes.get("/", listApprovedListings);
listingRoutes.get("/mine", protect, requireRole("farmer"), myListings);
listingRoutes.post("/", protect, requireRole("farmer"), upload.single("image"), createListing);
listingRoutes.patch("/:id/status", protect, requireRole("admin"), updateListingStatus);
