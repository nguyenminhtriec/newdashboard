'use client';

import { SearchIcon, X } from 'lucide-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';


export default function SearchPhotos({ placeholder }: { placeholder: string }  ) {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  const handleSearch = (term: string) => {
    // console.log("Seaching... " + term);
  const params = new URLSearchParams(searchParams); 
  params.set('page', '1');
  if (term) {
    params.set("query", term);
  } else {
    params.delete("query");
  }  
  replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="fixed w-full flex flex-1 h-10 items-center justify-items-center space-x-4 bg-teal-800/75">
      <input
        value={inputValue}
        className="peer block w-[20%] rounded-md border border-gray-200 py-2 pl-1 text-sm text-center outline-2 placeholder:text-gray-200 bg-teal-600"
        placeholder={placeholder}
        // defaultValue={searchParams.get('query')?.toString()} : No use.
        onChange={ handleChange }
      />
      <button onClick={() => setInputValue("")} disabled={!inputValue} >
        <X />
      </button>
      <button onClick={() => inputValue ? handleSearch(inputValue) : null} disabled={!inputValue} >
        <SearchIcon />
      </button>     
    </div>
  );
}
