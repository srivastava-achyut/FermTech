// import { Link } from "react-router-dom";

// export default function BuyerDashboard() {
//   return (
//     <section className="panel">
//       <div className="toolbar"><h1>Buyer dashboard</h1><Link className="btn" to="/buyer/browse">Browse crops</Link></div>
//       <div className="grid two">
//         <div className="card stat"><span>Available lots</span><strong>0</strong></div>
//         <div className="card stat"><span>Orders</span><strong>0</strong></div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api.js";

export default function BuyerDashboard() {
  const [stats, setStats] = useState({
    availableListings: 0,
    orders: 0
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await api("/buyer/dashboard");
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
  <h1>Buyer Dashboard</h1>

  <div style={{ display: "flex", gap: "1rem" }}>
    <Link className="btn" to="/buyer/browse">
      Browse Crops
    </Link>

    <Link className="btn secondary" to="/buyer/orders">
      Order History
    </Link>
  </div>
</div>

      <div className="grid two">
        <div className="card stat">
          <span>Available Lots</span>
          <strong>{stats.availableListings}</strong>
        </div>

        <div className="card stat">
          <span>Orders</span>
          <strong>{stats.orders}</strong>
        </div>
      </div>
    </section>
  );
}