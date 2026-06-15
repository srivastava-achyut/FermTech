// import { Link } from "react-router-dom";
// import { Activity, ClipboardList, Store } from "lucide-react";

// export default function Dashboard() {
//   return (
//     <section className="panel">
//       <div className="toolbar">
//         <h1>Farmer dashboard</h1>
//         <Link className="btn" to="/farmer/diagnose">New diagnosis</Link>
//       </div>
//       <div className="grid">
//         <div className="card stat"><Activity /><span>Diagnoses</span><strong>0</strong></div>
//         <div className="card stat"><Store /><span>Listings</span><strong>0</strong></div>
//         <div className="card stat"><ClipboardList /><span>Orders</span><strong>0</strong></div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Activity, ClipboardList, Store } from "lucide-react";
import { api } from "../../services/api.js";

export default function Dashboard() {
  const [stats, setStats] = useState({
    diagnoses: 0,
    listings: 0,
    orders: 0
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await api("/farmer/dashboard");
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
        <h1>Farmer Dashboard</h1>
        <Link className="btn" to="/farmer/diagnose">
          New Diagnosis
        </Link>
      </div>

      <div className="grid">
        <div className="card stat">
          <Activity />
          <span>Diagnoses</span>
          <strong>{stats.diagnoses}</strong>
        </div>

        <div className="card stat">
          <Store />
          <span>Listings</span>
          <strong>{stats.listings}</strong>
        </div>

        <div className="card stat">
          <ClipboardList />
          <span>Orders</span>
          <strong>{stats.orders}</strong>
        </div>
      </div>
    </section>
  );
}