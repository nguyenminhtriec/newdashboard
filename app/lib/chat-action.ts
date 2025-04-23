
import { GoogleGenAI } from "@google/genai";


export type Message = {role: string , text: string};

//to use with form-inputs
export async function aiGenerateMessage(preState: Message[], formData: FormData) {
    const apiKey = process.env.G_KEY;
    const ai = new GoogleGenAI({apiKey: apiKey});
    
    const userTextMessage = formData.get('userTextMessage')?.toString() || '' ;
    const nextHistory = userTextMessage ? [...preState, {role: "user", text: userTextMessage}] : preState;

    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: nextHistory,
        config: {systemInstruction: 'Always give answers as short as possible.' }
    });
    if (response.text)
        return [...nextHistory, {role: "model", text: response.text}];
    
    return nextHistory; 
}

// to use with non-form inputs
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