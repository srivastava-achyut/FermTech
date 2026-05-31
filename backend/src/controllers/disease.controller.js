import { DiagnosisRecord } from "../models/DiagnosisRecord.js";
import { diagnoseCrop } from "../services/disease.service.js";
import { uploadBuffer } from "../services/storage.service.js";

export async function createDiagnosis(req, res) {
  if (!req.file?.buffer) {
    return res.status(400).json({ message: "Leaf image is required for diagnosis" });
  }

  const image = req.file?.buffer ? await uploadBuffer(req.file.buffer, "fermtech/diagnosis") : {};
  const result = await diagnoseCrop({
    cropName: req.body.cropName,
    soilCondition: req.body.soilCondition,
    voiceTranscript: req.body.voiceTranscript,
    language: req.body.language || req.user.language,
    imageUrl: image.url
  });

  const record = await DiagnosisRecord.create({
    farmer: req.user._id,
    cropName: req.body.cropName,
    image,
    soilCondition: req.body.soilCondition,
    voiceTranscript: req.body.voiceTranscript,
    language: req.body.language || req.user.language,
    ...result
  });

  res.status(201).json({ record });
}

export async function diagnosisHistory(req, res) {
  const records = await DiagnosisRecord.find({ farmer: req.user._id }).sort("-createdAt");
  res.json({ records });
}
