import { Listing } from "../models/Listing.js";
import { uploadBuffer } from "../services/storage.service.js";

export async function createListing(req, res) {
  const images = [];

  if (req.file?.buffer) {
    images.push(await uploadBuffer(req.file.buffer, "fermtech/listings"));
  }

  const listing = await Listing.create({
    farmer: req.user._id,
    cropName: req.body.cropName,
    variety: req.body.variety,
    quantityKg: Number(req.body.quantityKg),
    pricePerKg: Number(req.body.pricePerKg),
    location: req.body.location,
    images,
    aiVerified: req.body.aiVerified === "true",
    verificationSummary: req.body.verificationSummary
  });

  res.status(201).json({ listing });
}

export async function listApprovedListings(_req, res) {
  const listings = await Listing.find({ status: "approved" }).populate("farmer", "name location").sort("-createdAt");
  res.json({ listings });
}

export async function myListings(req, res) {
  const listings = await Listing.find({ farmer: req.user._id }).sort("-createdAt");
  res.json({ listings });
}

export async function updateListingStatus(req, res) {
  const listing = await Listing.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json({ listing });
}
