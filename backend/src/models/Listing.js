import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    cropName: { type: String, required: true },
    variety: String,
    quantityKg: { type: Number, required: true },
    pricePerKg: { type: Number, required: true },
    location: String,
    images: [{ url: String, publicId: String }],
    aiVerified: { type: Boolean, default: false },
    verificationSummary: String,
    status: { type: String, enum: ["draft", "pending", "approved", "rejected", "sold"], default: "pending" }
  },
  { timestamps: true }
);

export const Listing = mongoose.model("Listing", listingSchema);
