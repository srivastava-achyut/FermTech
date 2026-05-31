import CameraCapture from "../disease-detector/CameraCapture.js";
import DiagnosisResult from "../disease-detector/DiagnosisResult.js";
import LocalLanguageSelector from "../disease-detector/LocalLanguageSelector.js";
import SoilConditionForm from "../disease-detector/SoilConditionForm.js";
import VoiceInput from "../disease-detector/VoiceInput.js";
import useDiseaseDetector from "../../hooks/useDiseaseDetector.js";

export default function DiseaseDetector() {
  const { result, loading, submit } = useDiseaseDetector();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await submit(formData);
  }

  return (
    <section className="grid two">
      <div>
        <h1>Crop disease detector</h1>
        <p className="section-lead">Upload a clear leaf photo, add soil details, and include voice context for stronger AI diagnosis.</p>
        <DiagnosisResult result={result} />
      </div>
      <form className="card form" onSubmit={handleSubmit}>
        <CameraCapture />
        <SoilConditionForm />
        <VoiceInput />
        <LocalLanguageSelector />
        <button className="btn" disabled={loading}>{loading ? "Diagnosing..." : "Run diagnosis"}</button>
      </form>
    </section>
  );
}
