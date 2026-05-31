import { createContext, useContext } from "react";
import useOfflineMode from "../hooks/useOfflineMode.js";

const OfflineContext = createContext({ isOffline: false });

export function OfflineProvider({ children }) {
  const isOffline = useOfflineMode();
  return <OfflineContext.Provider value={{ isOffline }}>{children}</OfflineContext.Provider>;
}

export function useOfflineContext() {
  return useContext(OfflineContext);
}
