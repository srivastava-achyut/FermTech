import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="panel">
      <h1>Page not found</h1>
      <Link className="btn" to="/">Go home</Link>
    </section>
  );
}
