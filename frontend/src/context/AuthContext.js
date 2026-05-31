import { createContext, useContext, useMemo, useState } from "react";
import * as authService from "../services/auth.service.js";
import { getItem } from "../services/storage.service.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getItem("fermtech.user"));

  const value = useMemo(
    () => ({
      user,
      async login(payload) {
        const data = await authService.login(payload);
        setUser(data.user);
        return data;
      },
      async register(payload) {
        const data = await authService.register(payload);
        setUser(data.user);
        return data;
      },
      logout() {
        authService.logout();
        setUser(null);
      }
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
