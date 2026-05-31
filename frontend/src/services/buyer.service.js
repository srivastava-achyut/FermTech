import { api } from "./api.js";

export function getBuyerDashboard() {
  return api("/buyer/dashboard");
}

export function getListings() {
  return api("/listings");
}

export function getOrders() {
  return api("/orders");
}
