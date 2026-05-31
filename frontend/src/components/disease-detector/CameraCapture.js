export default function CameraCapture() {
  return (
    <>
      <div className="field"><label>Crop name</label><input name="cropName" placeholder="Tomato, cotton, rice" /></div>
      <div className="field"><label>Leaf photo</label><input name="image" type="file" accept="image/*" capture="environment" required /></div>
    </>
  );
}
