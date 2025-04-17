'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { usePhoto } from "@/app/ui/customers/photo-context";
import { useState } from "react";
import { MarsPhoto } from "@/app/lib/actions";



export default function Page() {
    // const pathname = usePathname();
    // const searchParams = useSearchParams();
    // const imgSrc = searchParams.get('img_src');
    // const pid = pathname.split("/").pop();

    
    const {selectedPhoto} = usePhoto();
    const router = useRouter();
    const handleClick = () => router.back();

    return (
      
        <div className='flex flex-col flex-grow'>
          <label>{selectedPhoto?.id}</label>
          <img onClick={handleClick} className='max-w-[70%] cursor-pointer' src={selectedPhoto?.img_src} alt='Mars photo.'></img>
        
          <Welcome />
          <ResponsiveNavBar />        
        </div>
    )
}

function Welcome() {
  return (
    <div className="flex items-center justify-center bg-gray-600">
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-100 mb-4">Welcome</h2>
        <p className="text-gray-100">This is a simple card built with Tailwind CSS.</p>
        <button className="mt-4 px-4 py-2 bg-teal-900 text-gray-200 rounded hover:bg-teal-700">
          Get Started
        </button>
      </div>
    </div>

  )
}

function ResponsiveNavBar() {
  return (
    <nav className="bg-gray-800/75 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-lg font-bold">MyApp</a>
        <div className="space-x-4 hidden md:flex">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
    </div>
  </nav>

  )
}