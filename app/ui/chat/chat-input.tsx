'use client';

import { Send, X } from 'lucide-react'; 
import { useState, } from "react";

import { Message } from "@/app/lib/chat-action";
import { aiGenerateMessage } from "@/app/lib/chat-action";


export function ChatInput() {
    const [textMessage, setTextMessage] = useState('');
    const [history, setHistory] = useState<Message[]>([]);

    console.log(history.slice(-1)[0]);   

    function addMessage(role: "user" | "model", newTextMessage: string ) {      
        const newMessage: Message = { role: role, text: newTextMessage };      
        setHistory(prev => [...prev, newMessage]); 
          
    }

    async function handleMessage() {

        addMessage("user", textMessage);
        const promise = aiGenerateMessage(history, textMessage); 
                  
        promise.then(response => {
            if (response.text) 
                addMessage("model", response.text);         
            setTextMessage('');              
        }).catch((error: Error) => {
            console.log('Error now: ' + error.message);
        });               
    }

return (
    <div className='flex w-full justify-start bg-gray-600 text-gray-100 text-sm'>                           
        <input className='bg-gray-700 text-gray-100 w-full'
            type="text"
            placeholder="Ask me anything..."
            value={textMessage}
            onChange={(e) => (e.target.value)}
        />
        <div className='flex w-[10%] justify-center space-x-4'>
            <button 
                disabled={!textMessage}
                onClick={() => {} }
            >
                <X strokeWidth={1} color={'aqua'} />
            </button>
            <button 
                onClick={() => {                           
                    handleMessage();                          
                }} 
                disabled={!textMessage} 
            >
                <Send strokeWidth={1} color='aqua'  className='disabled:color-gray-600'/>
            </button>
        </div>
                    
    </div>
)}