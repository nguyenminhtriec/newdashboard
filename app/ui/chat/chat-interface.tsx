

'use client';

import { aiGenerateMessage } from "@/app/lib/chat-action";
import { ChatHistory } from '@/app/ui/chat/chat-history';
import { useActionState } from 'react';
import { Send, X } from 'lucide-react'; 


export function ChatInterFace() {

    const [history, formAction, isPending] = useActionState(aiGenerateMessage, []);
    console.log(history.slice(-1)[0]);   

    return (
        <div className='h-full space-y-8'>
           
            <form action={formAction} className='space-y-8'>
                <ChatHistory history={history} />
                
                <div className='flex w-full justify-start bg-gray-600 text-gray-100 text-sm'>                           
                    <input className='bg-gray-700 text-gray-100 w-full'
                        type="text"
                        name="userTextMessage" id = "userTextMessage"
                        placeholder="Ask me anything..."
                        onChange={(e) => (e.target.value)}
                    />
                    <div className='flex w-[10%] justify-center space-x-4'>
                        <button type="reset">
                            <X strokeWidth={1} color={'aqua'} />
                        </button>
                        <button type="submit">
                            <Send strokeWidth={1} color='aqua' />
                        </button>
                    </div>                    
                </div>   
            </form>                    
        </div>        
    )
}

