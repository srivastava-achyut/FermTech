// export default function DiagnosisHistory() {
//   return (
//     <section className="panel">
//       <h1>Diagnosis history</h1>
//       <div className="empty">Your saved diagnosis records will appear after your first scan.</div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

export default function DiagnosisHistory() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadHistory() {
      try {
        const data = await api("/disease/history");
        setRecords(data.records || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadHistory();
  }, []);

  if (loading) {
    return (
      <section className="panel">
        <h1>Diagnosis History</h1>
        <p>Loading diagnosis records...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <h1>Diagnosis History</h1>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <h1>Diagnosis History</h1>

      {records.length === 0 ? (
        <div className="empty">
          Your saved diagnosis records will appear after your first scan.
        </div>
      ) : (
        <div className="history-list">
          {records.map((record) => (
            <div
              key={record._id}
              className="card"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "10px"
              }}
            >
              {record.image?.url && (
                <img
                  src={record.image.url}
                  alt={record.diagnosis}
                  style={{
                    width: "200px",
                    maxWidth: "100%",
                    borderRadius: "8px",
                    marginBottom: "1rem"
                  }}
                />
              )}

              <h3>{record.diagnosis}</h3>

              <p>
                <strong>Confidence:</strong>{" "}
                {record.confidence
                  ? `${(record.confidence * 100).toFixed(2)}%`
                  : "N/A"}
              </p>

              <p>
                <strong>Crop:</strong> {record.cropName || "Unknown"}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {new Date(record.createdAt).toLocaleString()}
              </p>

              {record.treatment?.length > 0 && (
                <>
                  <h4>Treatment</h4>
                  <ul>
                    {record.treatment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}