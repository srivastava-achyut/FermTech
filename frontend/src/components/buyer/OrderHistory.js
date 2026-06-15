// export default function OrderHistory() {
//   return <section className="panel"><h1>Order history</h1><div className="empty">Orders will appear here.</div></section>;
// }
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadOrders() {
      try {
        const data = await api("/orders");
        setOrders(data.orders || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  if (loading) {
    return (
      <section className="panel">
        <h1>Order History</h1>
        <p>Loading orders...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <h1>Order History</h1>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <h1>Order History</h1>

      {orders.length === 0 ? (
        <div className="empty">
          No orders found.
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="card"
            style={{
              marginBottom: "1rem",
              padding: "1rem"
            }}
          >
            <h3>
              {order.listing?.cropName}
            </h3>

            <p>
              Quantity: {order.quantityKg} kg
            </p>

            <p>
              Amount: ₹{order.amount}
            </p>

            <p>
              Date:{" "}
              {new Date(
                order.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </section>
  );
}