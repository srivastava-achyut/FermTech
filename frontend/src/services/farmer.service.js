import { api } from "./api.js";

export function getFarmerDashboard() {
  return api("/farmer/dashboard");
}

export function createListing(formData) {
  return api("/listings", { method: "POST", body: formData });
}

export function getMyListings() {
  return api("/listings/mine");
}
