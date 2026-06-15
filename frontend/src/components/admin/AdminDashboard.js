// import { Link } from "react-router-dom";

// export default function AdminDashboard() {
//   return (
//     <section className="panel">
//       <div className="toolbar"><h1>Admin dashboard</h1><Link className="btn" to="/admin/listings">Review listings</Link></div>
//       <div className="grid">
//         <div className="card stat"><span>Users</span><strong>0</strong></div>
//         <div className="card stat"><span>Pending listings</span><strong>0</strong></div>
//         <div className="card stat"><span>Orders</span><strong>0</strong></div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api.js";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    pendingListings: 0,
    orders: 0
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await api("/admin/dashboard");
        setStats(data.stats);
      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, []);

  return (
    <section className="panel">
      <div className="toolbar">
        <h1>Admin Dashboard</h1>

        <Link
          className="btn"
          to="/admin/listings"
        >
          Review Listings
        </Link>
      </div>

      <div className="grid">
        <div className="card stat">
          <span>Users</span>
          <strong>{stats.users}</strong>
        </div>

        <div className="card stat">
          <span>Pending Listings</span>
          <strong>{stats.pendingListings}</strong>
        </div>

        <div className="card stat">
          <span>Orders</span>
          <strong>{stats.orders}</strong>
        </div>
      </div>
    </section>
  );
}