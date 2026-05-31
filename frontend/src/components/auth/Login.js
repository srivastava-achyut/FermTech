import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ phone: "", password: "" });
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    try {
      const data = await login(form);
      navigate(`/${data.user.role}`);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="grid two">
      <div>
        <h1>Welcome back</h1>
        <p className="section-lead">Use your phone number to access farmer, buyer, or admin tools.</p>
      </div>
      <form className="card form" onSubmit={handleSubmit}>
        <div className="field"><label>Phone</label><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
        <div className="field"><label>Password</label><input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></div>
        {error && <p className="status-pill">{error}</p>}
        <button className="btn">Login</button>
        <Link to="/forgot-password">Forgot password?</Link>
      </form>
    </section>
  );
}
