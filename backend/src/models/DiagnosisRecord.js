import mongoose from "mongoose";

const diagnosisRecordSchema = new mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    cropName: String,
    image: { url: String, publicId: String },
    soilCondition: String,
    voiceTranscript: String,
    language: { type: String, default: "hi" },
    diagnosis: String,
    confidence: Number,
    treatment: [String],
    severity: { type: String, enum: ["low", "medium", "high"], default: "medium" }
  },
  { timestamps: true }
);

export const DiagnosisRecord = mongoose.model("DiagnosisRecord", diagnosisRecordSchema);
