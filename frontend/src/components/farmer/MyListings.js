export default function MyListings() {
  return (
    <section className="grid two">
      <div>
        <h1>My listings</h1>
        <p className="section-lead">Create crop listings and attach AI verification summaries.</p>
      </div>
      <form className="card form">
        <div className="field"><label>Crop name</label><input name="cropName" /></div>
        <div className="field"><label>Quantity kg</label><input name="quantityKg" type="number" /></div>
        <div className="field"><label>Price per kg</label><input name="pricePerKg" type="number" /></div>
        <div className="field"><label>Photo</label><input name="image" type="file" accept="image/*" /></div>
        <button className="btn" type="button">Save listing</button>
      </form>
    </section>
  );
}
