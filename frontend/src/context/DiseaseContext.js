import { createContext, useContext } from "react";

const DiseaseContext = createContext({ recentDiagnosis: null });

export function DiseaseProvider({ children }) {
  return <DiseaseContext.Provider value={{ recentDiagnosis: null }}>{children}</DiseaseContext.Provider>;
}

export function useDiseaseContext() {
  return useContext(DiseaseContext);
}
