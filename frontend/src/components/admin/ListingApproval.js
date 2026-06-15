// export default function ListingApproval() {
//   return <section className="panel"><h1>Listing approval</h1><div className="empty">Pending farmer listings will appear here.</div></section>;
// }


import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

export default function ListingApproval() {
  const [listings, setListings] = useState([]);
  const [message, setMessage] = useState("");

  async function loadListings() {
    try {
      const data = await api("/admin/listings/pending");
      setListings(data.listings || []);
    } catch (error) {
      setMessage(error.message);
    }
  }

  useEffect(() => {
    loadListings();
  }, []);

  async function updateStatus(id, status) {
    try {
      await api(`/listings/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status })
      });

      loadListings();
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <section className="panel">
      <h1>Listing Approval</h1>

      {message && <p>{message}</p>}

      {listings.length === 0 ? (
        <div className="empty">
          No pending listings.
        </div>
      ) : (
        listings.map((listing) => (
          <div
            key={listing._id}
            className="card"
            style={{
              marginBottom: "1rem",
              padding: "1rem"
            }}
          >
            {listing.images?.[0]?.url && (
              <img
                src={listing.images[0].url}
                alt={listing.cropName}
                style={{
                  width: "200px",
                  borderRadius: "8px"
                }}
              />
            )}

            <h3>{listing.cropName}</h3>

            <p>
              Farmer: {listing.farmer?.name}
            </p>

            <p>
              Quantity: {listing.quantityKg} kg
            </p>

            <p>
              Price: ₹{listing.pricePerKg}/kg
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem"
              }}
            >
              <button
                className="btn"
                onClick={() =>
                  updateStatus(
                    listing._id,
                    "approved"
                  )
                }
              >
                Approve
              </button>

              <button
                className="btn"
                onClick={() =>
                  updateStatus(
                    listing._id,
                    "rejected"
                  )
                }
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}