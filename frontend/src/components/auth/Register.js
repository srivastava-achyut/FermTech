import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { languages } from "../../utils/languageMap.js";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", role: "farmer", language: "hi" });
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    try {
      const data = await register(form);
      navigate(`/${data.user.role}`);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="grid two">
      <div>
        <h1>Create account</h1>
        <p className="section-lead">Pick the role you want to test. In production, admin accounts should be created manually from the backend.</p>
      </div>
      <form className="card form" onSubmit={handleSubmit}>
        <div className="field"><label>Name</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
        <div className="field"><label>Phone</label><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
        <div className="field"><label>Email</label><input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
        <div className="field"><label>Password</label><input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></div>
        <div className="field"><label>Role</label><select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}><option value="farmer">Farmer</option><option value="buyer">Buyer</option><option value="admin">Admin</option></select></div>
        <div className="field"><label>Language</label><select value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })}>{languages.map((language) => <option key={language.code} value={language.code}>{language.label}</option>)}</select></div>
        {error && <p className="status-pill">{error}</p>}
        <button className="btn">Create account</button>
      </form>
    </section>
  );
}
