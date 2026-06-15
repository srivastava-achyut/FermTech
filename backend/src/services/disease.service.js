// import { env } from "../config/environment.js";

// export async function diagnoseCrop({ cropName, soilCondition, voiceTranscript, language, imageUrl }) {
//   if (env.ai.apiUrl) {
//     const response = await fetch(env.ai.apiUrl, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${env.ai.apiKey}`
//       },
//       body: JSON.stringify({ cropName, soilCondition, voiceTranscript, language, imageUrl })
//     });

//     if (!response.ok) {
//       throw new Error("AI diagnosis provider failed");
//     }

//     return response.json();
//   }

//   return {
//     diagnosis: "Demo diagnosis only. Connect AI_API_URL for real leaf disease prediction.",
//     confidence: 0,
//     severity: "low",
//     isMock: true,
//     treatment: [
//       cropName ? `Saved ${cropName} image and field details successfully.` : "Saved crop image and field details successfully.",
//       "A real model/API is required before showing disease confidence.",
//       "Use a clear leaf photo in daylight when you connect the AI provider."
//     ]
//   };
// }


import { env } from "../config/environment.js";

export async function diagnoseCrop({
  cropName,
  soilCondition,
  voiceTranscript,
  language,
  imageUrl
}) {
  if (env.ai.apiUrl) {
    const response = await fetch(env.ai.apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        imageUrl
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `AI diagnosis provider failed: ${errorText}`
      );
    }

    return await response.json();
  }

  return {
    diagnosis:
      "Demo diagnosis only. Connect AI_API_URL for real leaf disease prediction.",
    confidence: 0,
    severity: "low",
    isMock: true,
    treatment: [
      cropName
        ? `Saved ${cropName} image and field details successfully.`
        : "Saved crop image and field details successfully.",
      "A real model/API is required before showing disease confidence.",
      "Use a clear leaf photo in daylight when you connect the AI provider."
    ]
  };
}