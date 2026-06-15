import { Link, NavLink } from "react-router-dom";
import { Leaf, LogOut, WifiOff } from "lucide-react";
import useAuth from "../../hooks/useAuth.js";
import useOfflineMode from "../../hooks/useOfflineMode.js";

export default function Navbar() {
  const { user, logout } = useAuth();
  const isOffline = useOfflineMode();
  const base = user?.role ? `/${user.role}` : "/";

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" to="/">
          <Leaf size={20} /> FermTech
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {isOffline && (
            <NavLink to="/offline" className="status-pill">
              <WifiOff size={16} /> Offline
            </NavLink>
          )}
          {user ? (
            <>
              <NavLink to={base}>Dashboard</NavLink>
             {user.role === "farmer" && (
  <>
    <NavLink to="/farmer/diagnose">Diagnose</NavLink>
    <NavLink to="/farmer/history">History</NavLink>
    <NavLink to="/farmer/listings">Listings</NavLink>
  </>
)}

{user.role === "buyer" && (
  <>
    <NavLink to="/buyer/browse">Browse</NavLink>
    <NavLink to="/buyer/orders">Orders</NavLink>
  </>
)}

{user.role === "admin" && (
  <>
    <NavLink to="/admin/listings">Approvals</NavLink>
    <NavLink to="/admin/users">Users</NavLink>
  </>
)}
              <button className="btn ghost" onClick={logout} title="Sign out">
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <Link className="btn" to="/register">Create account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
