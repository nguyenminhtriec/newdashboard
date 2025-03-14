import Search from "@/app/ui/search";
import React from "react";

export default function Layout({
  children, 
}:{
    children: React.ReactNode,
  }) {
  return(  
    <div className="h-screen">
        <div>
            <Search placeholder="Date by [yyyy-mm-dd]"/>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}