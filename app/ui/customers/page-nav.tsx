'use client';

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {ChevronRight, ChevronLeft, ChevronFirst, ChevronLast} from 'lucide-react';
import React from "react";


export function CustomersNav({
    totalPage,     
}: {
    totalPage: number,     
}) { 


    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page') || 1);
    
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }

    return(
        <div className="py-1 top-full flex items-center justify-center space-x-8 scroll-m-0 bg-blue-100">
            <Arrow enabled={currentPage!==1} href={createPageURL(1)}><ChevronFirst /></Arrow>
            <Arrow enabled={currentPage!==1} href={createPageURL(currentPage-1)}><ChevronLeft /></Arrow>
            <span>Page {currentPage}/{totalPage}</span>
            <Arrow enabled={currentPage!==totalPage} href={createPageURL(currentPage+1)}><ChevronRight /></Arrow>
            <Arrow enabled={currentPage!==totalPage} href={createPageURL(totalPage)}><ChevronLast /></Arrow>

        </div>
    )
}


function Arrow({ enabled, href, children }: {enabled: boolean, href: string, children: React.ReactNode}) {
    return (
        enabled ?
         <Link href={href}>
            {children}
         </Link> 
        : undefined
    );
}

