import { Listing } from "../models/Listing.js";
import { Order } from "../models/Order.js";

export async function buyerDashboard(req, res) {
  const [availableListings, orders] = await Promise.all([
    Listing.countDocuments({ status: "approved" }),
    Order.countDocuments({ buyer: req.user._id })
  ]);

  res.json({ stats: { availableListings, orders } });
}
