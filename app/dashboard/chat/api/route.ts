
import { GoogleGenAI } from "@google/genai";
import { Message } from "@/app/lib/chat-action";



export async function POST(props: Promise<{history: Message[], textMessage: string}>) {

    const {history, textMessage} = await props;
    const apiKey = process.env.GOOGLE_API_KEY;

    const ai = new GoogleGenAI({apiKey: apiKey});

    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [...history, {role: "user", text: textMessage}],
        config: {systemInstruction: 'Always give answers as short as possible.' }
    });
    
    return response; 
}