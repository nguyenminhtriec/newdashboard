'use client';


import { SearchIcon, X } from 'lucide-react';
import { useState } from 'react';


export function ChatInput({ placeholder, handleMessage }: { 
    placeholder: string, handleMessage: Function }) {

    const [inputValue, setInputValue] = useState("");

  return (
    <div className="fixed w-full flex flex-1 h-10 items-center justify-items-center space-x-4 bg-teal-800/75">
      <input
        type='text'
        value={inputValue}
        className="peer block w-[20%] rounded-md border border-gray-200 py-2 pl-1 text-sm text-center outline-2 placeholder:text-gray-200 bg-teal-600"
        placeholder={placeholder}
        onChange={ e => setInputValue(e.target.value) } 
      />
      <button onClick={() => setInputValue("")} disabled={!inputValue} >
        <X strokeWidth={1} color={'aqua'} />
      </button>
      <button onClick={() => handleMessage()} >
        <SearchIcon strokeWidth={1} color='aqua'/>
      </button>     
    </div>
  );
}