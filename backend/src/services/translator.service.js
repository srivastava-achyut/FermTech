const fallbackText = {
  hi: "निदान तैयार है।",
  mr: "निदान तयार आहे.",
  ta: "நோயறிதல் தயார்.",
  te: "నిర్ధారణ సిద్ధంగా ఉంది.",
  en: "Diagnosis is ready."
};

export function translateStatus(language = "en") {
  return fallbackText[language] || fallbackText.en;
}
