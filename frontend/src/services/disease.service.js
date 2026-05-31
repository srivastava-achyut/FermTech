import { api } from "./api.js";

export function diagnose(formData) {
  return api("/disease/diagnose", { method: "POST", body: formData });
}

export function getDiagnosisHistory() {
  return api("/disease/history");
}
