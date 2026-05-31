import { DiagnosisRecord } from "../models/DiagnosisRecord.js";
import { Listing } from "../models/Listing.js";

export async function analytics(_req, res) {
  const [diagnosesBySeverity, listingStatus] = await Promise.all([
    DiagnosisRecord.aggregate([{ $group: { _id: "$severity", count: { $sum: 1 } } }]),
    Listing.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }])
  ]);

  res.json({ diagnosesBySeverity, listingStatus });
}
