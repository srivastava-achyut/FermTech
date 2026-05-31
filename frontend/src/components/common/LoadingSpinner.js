export default function LoadingSpinner({ label = "Loading" }) {
  return <span className="status-pill">{label}...</span>;
}
