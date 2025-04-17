
'use client';


import { Send, X } from 'lucide-react'; 
import { useState, } from "react";
import ReactMarkdown from 'react-markdown';
import { Message } from "@/app/lib/chat-action";
import { aiHandleMessage } from "@/app/lib/chat-action";


export default function Page() {
    const [textMessage, setTextMessage] = useState('');
    const [history, setHistory] = useState<Message[]>([]);

    // console.log("textMessage now: " + textMessage);
    // console.log(history.length);
    // console.log(history.slice(-1)[0]);

    function addMessage(role: "user" | "model", newTextMessage: string ) {      
        const newMessage: Message = { role: role, text: newTextMessage };      
        setHistory(prev => [...prev, newMessage]);           
    }

    async function handleMessage() {

        addMessage("user", textMessage);
        const promise = aiHandleMessage(history, textMessage);           
        promise.then(response => {
            if (response.text) addMessage("model", response.text);         
            setTextMessage('');              
        }).catch((error: Error) => {
            console.log('Error now: ' + error.message);
        });               
    }
    return (
        <div className='h-full space-y-8'>
            <div className='space-y-4'>
                {history.map((item, index) => 
                <ChatRound 
                    key={index} 
                    role={item.role} 
                    message={item.text} /> )}
            </div>
            <div 
                className='flex w-full justify-start bg-gray-600 text-gray-100 text-sm'
            >                           
                <input className='bg-gray-700 text-gray-100 w-full'
                    type="text"
                    placeholder="Ask me anything..."
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                />
                <div className='flex w-[10%] justify-center space-x-4'>
                    <button 
                        disabled={!textMessage}
                        onClick={() => setTextMessage("") }
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
        </div>
        
    )

}

export function ChatRound({role, message}: {role: string, message: string}) {
    return (        
        <div 
            style={{ textAlign: role==='user' ? 'right' : 'left'}}
            className='rounded-2xl bg-gray-600 text-gray-100 px-4 py-2 text-sm '>
            <ReactMarkdown>
                {message}
            </ReactMarkdown>
        </div>        
    )
}