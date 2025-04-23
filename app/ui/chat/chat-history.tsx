
import ReactMarkdown from 'react-markdown';
import type { Message } from '@/app/lib/chat-action';


export function ChatHistory({history}: {history: Message[]}) {
    return (
        <div className='space-y-4'>
            {history.map((item, index) => 
                <ChatRound 
                    key={index} 
                    role={item.role} 
                    text={item.text} /> )}
        </div>
    )
    
}

function ChatRound({role, text}: Message) {
    return (        
        <div 
            style={{ textAlign: role==='user' ? 'right' : 'left'}}
            className='rounded-2xl bg-gray-600 text-gray-100 px-4 py-2 text-sm '>
            <ReactMarkdown>
                {text}
            </ReactMarkdown>
        </div>        
    )
}