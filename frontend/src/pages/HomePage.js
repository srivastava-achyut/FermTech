import { Link } from "react-router-dom";
import { Camera, Store, Languages } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="status-pill">AI marketplace for Indian farmers</span>
          <h1>FermTech</h1>
          <p>
            Capture a leaf photo, add soil and voice context, receive local-language crop guidance, and list healthy produce for trusted buyers.
          </p>
          <div className="actions">
            <Link className="btn" to="/register">Start now</Link>
            <Link className="btn ghost" to="/login">Login</Link>
          </div>
        </div>
        <div className="hero-visual">
          <p>Built as a PWA for low-connectivity areas, with cloud database, cloud storage, and API-based AI to keep your laptop light.</p>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <Camera size={24} />
          <h2>Multimodal diagnosis</h2>
          <p className="section-lead">Image, soil notes, and speech transcript combine into one diagnosis workflow.</p>
        </article>
        <article className="card">
          <Languages size={24} />
          <h2>Local language</h2>
          <p className="section-lead">Hindi, Marathi, Tamil, Telugu, and English are ready in the UI layer.</p>
        </article>
        <article className="card">
          <Store size={24} />
          <h2>Verified marketplace</h2>
          <p className="section-lead">Farmers can publish AI-verified crop listings after admin approval.</p>
        </article>
      </section>
    </>
  );
}
