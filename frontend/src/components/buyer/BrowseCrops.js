// export default function BrowseCrops() {
//   return (
//     <section className="panel">
//       <h1>Browse crops</h1>
//       <div className="grid">
//         {["Tomato", "Rice", "Onion"].map((crop) => (
//           <article className="card" key={crop}>
//             <div className="listing-image" />
//             <h2>{crop}</h2>
//             <p className="section-lead">AI-verified sample listing</p>
//             <button className="btn secondary">Request order</button>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api.js";

export default function BrowseCrops() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadListings() {
      try {
        const data = await api("/listings");
        setListings(data.listings || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadListings();
  }, []);

  if (loading) {
    return (
      <section className="panel">
        <h1>Browse Crops</h1>
        <p>Loading listings...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <h1>Browse Crops</h1>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <h1>Browse Crops</h1>
<Link
  className="btn"
  to="/buyer/orders"
  style={{ marginBottom: "1rem" }}
>
  View Orders
</Link>
      <div className="grid">
        {listings.length === 0 ? (
          <div className="empty">
            No approved listings available.
          </div>
        ) : (
          listings.map((listing) => (
            <article
              className="card"
              key={listing._id}
            >
              {listing.images?.[0]?.url ? (
                <img
                  src={listing.images[0].url}
                  alt={listing.cropName}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }}
                />
              ) : (
                <div className="listing-image" />
              )}

              <h2>{listing.cropName}</h2>

              <p>
                <strong>Quantity:</strong>{" "}
                {listing.quantityKg} kg
              </p>

              <p>
                <strong>Price:</strong> ₹
                {listing.pricePerKg}/kg
              </p>

              <p>
                <strong>Farmer:</strong>{" "}
                {listing.farmer?.name}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {listing.location || "Not specified"}
              </p>

              <button
  className="btn secondary"
  type="button"
  onClick={async () => {
    try {
      await api("/orders", {
        method: "POST",
        body: JSON.stringify({
          listingId: listing._id,
          quantityKg: 1
        })
      });

      alert("Order placed successfully");
    } catch (error) {
      alert(error.message);
    }
  }}
>
  Request Order
</button>
            </article>
          ))
        )}
      </div>
    </section>
  );
}