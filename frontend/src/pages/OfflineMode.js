export default function OfflineMode() {
  return (
    <section className="panel">
      <h1>Offline Mode</h1>
      <p className="section-lead">
        FermTech caches the app shell and recent GET requests. New diagnosis uploads and marketplace actions will work again when the network returns.
      </p>
      <div className="empty">Keep photos ready and submit them once the device reconnects.</div>
    </section>
  );
}
