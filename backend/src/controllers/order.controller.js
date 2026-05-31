import { Listing } from "../models/Listing.js";
import { Order } from "../models/Order.js";

export async function createOrder(req, res) {
  const listing = await Listing.findById(req.body.listingId);

  if (!listing) {
    return res.status(404).json({ message: "Listing not found" });
  }

  const quantityKg = Number(req.body.quantityKg);
  const order = await Order.create({
    listing: listing._id,
    buyer: req.user._id,
    farmer: listing.farmer,
    quantityKg,
    amount: quantityKg * listing.pricePerKg
  });

  res.status(201).json({ order });
}

export async function orderHistory(req, res) {
  const orders = await Order.find({ buyer: req.user._id }).populate("listing").sort("-createdAt");
  res.json({ orders });
}
