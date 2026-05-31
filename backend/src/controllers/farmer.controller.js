import { DiagnosisRecord } from "../models/DiagnosisRecord.js";
import { Listing } from "../models/Listing.js";
import { Order } from "../models/Order.js";

export async function farmerDashboard(req, res) {
  const [listings, diagnoses, orders] = await Promise.all([
    Listing.countDocuments({ farmer: req.user._id }),
    DiagnosisRecord.countDocuments({ farmer: req.user._id }),
    Order.countDocuments({ farmer: req.user._id })
  ]);

  res.json({ stats: { listings, diagnoses, orders } });
}
