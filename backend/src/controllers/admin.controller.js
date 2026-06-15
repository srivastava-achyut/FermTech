import { User } from "../models/User.js";
import { Listing } from "../models/Listing.js";
import { Order } from "../models/Order.js";

export async function adminDashboard(_req, res) {
  const [users, pendingListings, orders] = await Promise.all([
    User.countDocuments(),
    Listing.countDocuments({ status: "pending" }),
    Order.countDocuments()
  ]);

  res.json({ stats: { users, pendingListings, orders } });
}

export async function users(_req, res) {
  const records = await User.find().select("-passwordHash").sort("-createdAt");
  res.json({ users: records });
}
export async function pendingListings(_req, res) {
  const listings = await Listing.find({
    status: "pending"
  })
    .populate("farmer", "name email")
    .sort("-createdAt");

  res.json({ listings });
}
