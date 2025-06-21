

'use client';

import { aiGenerateAndHandleMessage } from "@/app/lib/chat-action";
import { ChatHistory } from '@/app/ui/chat/chat-history';
import { useActionState } from 'react';
import { Send, X } from 'lucide-react'; 


export function ChatInterface() {

    const [history, formAction, isPending] = useActionState(aiGenerateAndHandleMessage, []);
    // console.log(history.slice(-1)[0]);   

    return (
        <div className='h-full space-y-8'>  
            <ChatHistory history={history} />        
            <form action={formAction} className='space-y-8'>                                
                <div className='flex w-full justify-start bg-cyan-600 text-gray-100 text-sm'>                           
                    <input className='bg-cyan-700 dark:bg-cyan-900 text-gray-100 w-full'
                        type="text"
                        name="userTextMessage" id="userTextMessage"
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

