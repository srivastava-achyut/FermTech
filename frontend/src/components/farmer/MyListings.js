// export default function MyListings() {
//   return (
//     <section className="grid two">
//       <div>
//         <h1>My listings</h1>
//         <p className="section-lead">Create crop listings and attach AI verification summaries.</p>
//       </div>
//       <form className="card form">
//         <div className="field"><label>Crop name</label><input name="cropName" /></div>
//         <div className="field"><label>Quantity kg</label><input name="quantityKg" type="number" /></div>
//         <div className="field"><label>Price per kg</label><input name="pricePerKg" type="number" /></div>
//         <div className="field"><label>Photo</label><input name="image" type="file" accept="image/*" /></div>
//         <button className="btn" type="button">Save listing</button>
//       </form>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

export default function MyListings() {
  const [form, setForm] = useState({
    cropName: "",
    quantityKg: "",
    pricePerKg: ""
  });

  const [image, setImage] = useState(null);
  const [listings, setListings] = useState([]);
  const [message, setMessage] = useState("");

  async function loadListings() {
    try {
      const data = await api("/listings/mine");
      setListings(data.listings || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadListings();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("cropName", form.cropName);
      formData.append("quantityKg", form.quantityKg);
      formData.append("pricePerKg", form.pricePerKg);

      if (image) {
        formData.append("image", image);
      }

      await api("/listings", {
        method: "POST",
        body: formData
      });

      setMessage("Listing created successfully");

      setForm({
        cropName: "",
        quantityKg: "",
        pricePerKg: ""
      });

      setImage(null);

      loadListings();
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <section className="grid two">
      <div>
        <h1>My Listings</h1>
        <p className="section-lead">
          Create crop listings and manage your produce.
        </p>

        {message && (
          <div className="card">
            {message}
          </div>
        )}
      </div>

      <form className="card form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Crop name</label>
          <input
            value={form.cropName}
            onChange={(e) =>
              setForm({
                ...form,
                cropName: e.target.value
              })
            }
          />
        </div>

        <div className="field">
          <label>Quantity (kg)</label>
          <input
            type="number"
            value={form.quantityKg}
            onChange={(e) =>
              setForm({
                ...form,
                quantityKg: e.target.value
              })
            }
          />
        </div>

        <div className="field">
          <label>Price per kg</label>
          <input
            type="number"
            value={form.pricePerKg}
            onChange={(e) =>
              setForm({
                ...form,
                pricePerKg: e.target.value
              })
            }
          />
        </div>

        <div className="field">
          <label>Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files?.[0] || null)
            }
          />
        </div>

        <button className="btn" type="submit">
          Save Listing
        </button>
      </form>

      <div style={{ gridColumn: "1 / -1" }}>
        <h2>My Listings</h2>

        {listings.length === 0 ? (
          <p>No listings found.</p>
        ) : (
          listings.map((listing) => (
            <div
              key={listing._id}
              className="card"
              style={{ marginBottom: "1rem" }}
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
                Quantity: {listing.quantityKg} kg
              </p>

              <p>
                Price: ₹{listing.pricePerKg}/kg
              </p>

              <p>
                Status: {listing.status}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}