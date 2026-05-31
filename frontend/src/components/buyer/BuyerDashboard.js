import { Link } from "react-router-dom";

export default function BuyerDashboard() {
  return (
    <section className="panel">
      <div className="toolbar"><h1>Buyer dashboard</h1><Link className="btn" to="/buyer/browse">Browse crops</Link></div>
      <div className="grid two">
        <div className="card stat"><span>Available lots</span><strong>0</strong></div>
        <div className="card stat"><span>Orders</span><strong>0</strong></div>
      </div>
    </section>
  );
}
