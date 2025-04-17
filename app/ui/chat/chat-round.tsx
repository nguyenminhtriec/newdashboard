
import ReactMarkdown from 'react-markdown';


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