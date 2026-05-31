import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    quantityKg: { type: Number, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["placed", "accepted", "shipped", "completed", "cancelled"], default: "placed" },
    paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
