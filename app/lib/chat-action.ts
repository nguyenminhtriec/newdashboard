
import { GoogleGenAI } from "@google/genai";


export type Message = {role: "user" | "model" , text: string};

export async function aiHandleMessage(history: Message[], textMessage: string) {
    
    const ai = new GoogleGenAI({apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY});

    const promiseResponse = ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [...history, {role: "user", text: textMessage}],
        config: {systemInstruction: 'Always give answers as short as possible.' }
    });
    return promiseResponse; 

}