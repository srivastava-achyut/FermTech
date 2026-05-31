import useAuth from "../../hooks/useAuth.js";

export default function FarmerProfile() {
  const { user } = useAuth();
  return (
    <section className="panel">
      <h1>Farmer profile</h1>
      <div className="card">
        <h2>{user?.name}</h2>
        <p className="section-lead">{user?.phone}</p>
      </div>
    </section>
  );
}
