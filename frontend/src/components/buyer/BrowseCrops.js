export default function BrowseCrops() {
  return (
    <section className="panel">
      <h1>Browse crops</h1>
      <div className="grid">
        {["Tomato", "Rice", "Onion"].map((crop) => (
          <article className="card" key={crop}>
            <div className="listing-image" />
            <h2>{crop}</h2>
            <p className="section-lead">AI-verified sample listing</p>
            <button className="btn secondary">Request order</button>
          </article>
        ))}
      </div>
    </section>
  );
}
