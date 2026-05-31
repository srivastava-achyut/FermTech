import { useState } from "react";
import { diagnose } from "../services/disease.service.js";

export default function useDiseaseDetector() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(formData) {
    setLoading(true);
    try {
      const data = await diagnose(formData);
      setResult(data.record);
      return data.record;
    } finally {
      setLoading(false);
    }
  }

  return { result, loading, submit };
}
