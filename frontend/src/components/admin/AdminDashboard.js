import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <section className="panel">
      <div className="toolbar"><h1>Admin dashboard</h1><Link className="btn" to="/admin/listings">Review listings</Link></div>
      <div className="grid">
        <div className="card stat"><span>Users</span><strong>0</strong></div>
        <div className="card stat"><span>Pending listings</span><strong>0</strong></div>
        <div className="card stat"><span>Orders</span><strong>0</strong></div>
      </div>
    </section>
  );
}
