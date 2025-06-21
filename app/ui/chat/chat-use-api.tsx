
'use client';

import { Send, X } from 'lucide-react'; 
import { useState, } from "react";
import { Message } from "@/app/lib/chat-action";
import { ChatHistory } from './chat-history';
import { sendMessage } from '@/app/lib/chat-action';


export function ChatFace() {
    const [textMessage, setTextMessage] = useState('');
    const [history, setHistory] = useState<Message[]>([]);

    // console.log(history.slice(-1)[0]);   

    async function handleMessage() {
        setHistory(prev => [...prev, {role: "user", text: textMessage}]);
        setTextMessage("");
                    
        const response = await sendMessage(history, textMessage);
        const data = await response?.json();      
        setHistory(prev => [...prev, {role:"model", text: data.modelText}]);            
    }

return (
    <div className='space-y-8'>
        <ChatHistory history={history} />
        <div className='flex w-full justify-start bg-gray-600 text-gray-100 text-sm'>                           
            <input className='bg-gray-700 text-gray-100 w-full'
                type="text"
                placeholder="Ask me anything..."
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
            />
            <div className='flex w-[10%] justify-center space-x-4'>
                <button 
                    disabled={!textMessage}
                    onClick={() => setTextMessage('') }
                >
                    <X strokeWidth={1} color={'aqua'} />
                </button>
                <button 
                    onClick={handleMessage}
                    disabled={!textMessage} 
                >
                    <Send strokeWidth={1} color='aqua'  className='disabled:color-gray-600'/>
                </button>
            </div>                        
        </div>
    </div>   
)}