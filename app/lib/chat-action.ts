
import { GoogleGenAI } from "@google/genai";


export type Message = {role: string , text: string};

// Option 1: to use with form-inputs and API (POST request)
export async function aiGenerateAndHandleMessage(history: Message[], formData: FormData) {
      
    const textMessage = formData.get('userTextMessage')?.toString() || '' ;
    const nextHistory = textMessage ? [...history, {role: "user", text: textMessage}] : history;

    try {
        const response = await fetch('/dashboard/chat/api', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({history, textMessage})
        });
        if (!response.ok) {
            // throw new Error("API not responding.");
            return nextHistory;
        }
        const data = await response.json();
        const modelText = data.modelText;
    
        if (modelText)
            return [...nextHistory, {role: "model", text: modelText}];
        
        return nextHistory; 

    } catch (error) {
        console.error("Current error: ", error);
        return nextHistory;
    }    
}

// Option 2: to use with non-form inputs, non-API
export async function aiCreateMessage(history: Message[], textMessage: string) {
    const apiKey = process.env.NEXT_PUBLIC_G_KEY;
    const ai = new GoogleGenAI({apiKey: apiKey});
    console.log("Key now: ", apiKey);

    const promise = ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [...history, {role: 'user', text: textMessage}],
        config: {systemInstruction: 'Always give answers as short as possible.' }
    });
    return promise;
}

// Option 3: to use with non-form inputs and API (POST request)
// extract [sendMessage] funtion with single functionality: make the POST request to API
export async function sendMessage(history: Message[], textMessage: string) {
    try {
        const response = await fetch('/dashboard/chat/api', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({history, textMessage}),
        });
        if (!response.ok) {
            throw Error(response.statusText);
        }    
        return response;
    } catch (error) {
        console.log(error);
    }
}