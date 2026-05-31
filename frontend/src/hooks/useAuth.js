import { useAuthContext } from "../context/AuthContext.js";

export default function useAuth() {
  return useAuthContext();
}
