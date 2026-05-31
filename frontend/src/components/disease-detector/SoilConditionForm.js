export default function SoilConditionForm() {
  return (
    <div className="field">
      <label>Soil and field condition</label>
      <textarea name="soilCondition" placeholder="Dry soil, sticky soil, bad smell, recent rain, fertilizer used..." />
    </div>
  );
}
