import { GoogleGenerativeAI } from "@google/generative-ai";

const translationCache = {}; // Simple in-memory cache

export async function getTranslation(text, targetLang) {
  const cacheKey = `${text}_${targetLang}`;
                                                                                                                      
  // Check if the translation is already cached
  if (translationCache[cacheKey]) {
    console.log("Returning cached translation for:", cacheKey);
    return translationCache[cacheKey];
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Replace with your Google API key
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const prompt = `Translate the name "${text}" to ${targetLang}.`;
    const response = await model.generateContent(prompt);

    console.log("API Response:", response); // Log the entire response for inspection

    if (response && response.response.candidates && response.response.candidates.length > 0) {
      const translatedText = response.response.candidates[0].content.parts[0].text;

       // Cache the translation
       translationCache[cacheKey] = translatedText;
      
      return translatedText;
    } else {
      console.error("Unexpected API response structure:", response);
      throw new Error("Unexpected API response structure");
    }
    
  } catch (error) {
    console.error("Error during translation:", error);
    return ` ${text}`;
  }
}

