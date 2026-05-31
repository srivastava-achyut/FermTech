import { Link } from "react-router-dom";
import { Activity, ClipboardList, Store } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="panel">
      <div className="toolbar">
        <h1>Farmer dashboard</h1>
        <Link className="btn" to="/farmer/diagnose">New diagnosis</Link>
      </div>
      <div className="grid">
        <div className="card stat"><Activity /><span>Diagnoses</span><strong>0</strong></div>
        <div className="card stat"><Store /><span>Listings</span><strong>0</strong></div>
        <div className="card stat"><ClipboardList /><span>Orders</span><strong>0</strong></div>
      </div>
    </section>
  );
}
