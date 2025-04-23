
import type { Message } from "@/app/lib/chat-action";

import { GoogleGenAI } from "@google/genai";


export async function POST(request: Request) {

    const apiKey = process.env.G_KEY;
    const ai = new GoogleGenAI({apiKey: apiKey});

    const {history, textMessage} = await request.json();
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: [...history, {role: "user", text: textMessage}],
            config: {
                systemInstruction: "Always give answers as short as possible."
            }
        });
        
        if (response.text)   
            return Response.json({modelText: response.text});
            // return new Response(
            //     JSON.stringify(response.text), {        
            //     status: 200,
            //     headers: { "Content-Type": "application/json" }
            // });
    } catch (error) {
        console.error("API Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}