import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar.js";
import Footer from "./components/common/Footer.js";
import ProtectedRoute from "./components/common/ProtectedRoute.js";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import ForgotPassword from "./components/auth/ForgotPassword.js";
import OTPVerification from "./components/auth/OTPVerification.js";
import FarmerDashboard from "./components/farmer/Dashboard.js";
import DiseaseDetector from "./components/farmer/DiseaseDetector.js";
import CropMarketplace from "./components/farmer/CropMarketplace.js";
import MyListings from "./components/farmer/MyListings.js";
import FarmerProfile from "./components/farmer/FarmerProfile.js";
import DiagnosisHistory from "./components/farmer/DiagnosisHistory.js";
import BuyerDashboard from "./components/buyer/BuyerDashboard.js";
import BrowseCrops from "./components/buyer/BrowseCrops.js";
import OrderHistory from "./components/buyer/OrderHistory.js";
import SavedListings from "./components/buyer/SavedListings.js";
import AdminDashboard from "./components/admin/AdminDashboard.js";
import UserManagement from "./components/admin/UserManagement.js";
import ListingApproval from "./components/admin/ListingApproval.js";
import Analytics from "./components/admin/Analytics.js";
import Reports from "./components/admin/Reports.js";
import HomePage from "./pages/HomePage.js";
import OfflineMode from "./pages/OfflineMode.js";
import NotFoundPage from "./pages/NotFoundPage.js";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTPVerification />} />
          <Route path="/offline" element={<OfflineMode />} />

          <Route element={<ProtectedRoute roles={["farmer"]} />}>
            <Route path="/farmer" element={<FarmerDashboard />} />
            <Route path="/farmer/diagnose" element={<DiseaseDetector />} />
            <Route path="/farmer/marketplace" element={<CropMarketplace />} />
            <Route path="/farmer/listings" element={<MyListings />} />
            <Route path="/farmer/profile" element={<FarmerProfile />} />
            <Route path="/farmer/history" element={<DiagnosisHistory />} />
          </Route>

          <Route element={<ProtectedRoute roles={["buyer"]} />}>
            <Route path="/buyer" element={<BuyerDashboard />} />
            <Route path="/buyer/browse" element={<BrowseCrops />} />
            <Route path="/buyer/orders" element={<OrderHistory />} />
            <Route path="/buyer/saved" element={<SavedListings />} />
          </Route>

          <Route element={<ProtectedRoute roles={["admin"]} />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/listings" element={<ListingApproval />} />
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Route>

          <Route path="/dashboard" element={<Navigate to="/farmer" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
