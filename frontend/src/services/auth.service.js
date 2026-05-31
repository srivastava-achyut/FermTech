import { api } from "./api.js";
import { setItem, removeItem } from "./storage.service.js";

export async function login(payload) {
  const data = await api("/auth/login", { method: "POST", body: JSON.stringify(payload) });
  setSession(data);
  return data;
}

export async function register(payload) {
  const data = await api("/auth/register", { method: "POST", body: JSON.stringify(payload) });
  setSession(data);
  return data;
}

export function logout() {
  removeItem("fermtech.token");
  removeItem("fermtech.user");
}

function setSession(data) {
  setItem("fermtech.token", data.token);
  setItem("fermtech.user", data.user);
}
