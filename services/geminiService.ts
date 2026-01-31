import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!ai) {
    if (!process.env.API_KEY) {
      console.warn("API_KEY is not set in the environment.");
      throw new Error("API Key missing");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const client = getAIClient();
    
    // Construct the chat history for the model
    // Note: The specific format depends on how we want to manage context. 
    // Ideally, we use the chat feature.
    const chat = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, but I could not retrieve a clear answer from the archives at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The archive connection is currently unstable. Please check your API key or try again later.";
  }
};