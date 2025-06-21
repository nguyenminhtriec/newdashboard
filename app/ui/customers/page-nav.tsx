'use client';

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft, ChevronFirst, ChevronLast } from 'lucide-react';
import React from 'react';


export function PhotosPageNav({
    totalPage, currentPage,
}: {
    totalPage: number, currentPage: number,
}) { 
    const pathname = usePathname();
    const searchParams = useSearchParams();

    
    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        // if (!pageNumber) params.delete('pagesize');
        return `${pathname}?${params.toString()}`;
    };
   
    return(
        <div className="fixed bottom-0 flex w-full text-sm items-center justify-center space-x-8 scroll-m-0 bg-primary/90 dark:bg-dprimary/90 text-dtext">
            <Arrow disabled={currentPage<=1} href={createPageURL(1)}><ChevronFirst /></Arrow>
            <Arrow disabled={currentPage<=1} href={createPageURL(currentPage-1)}><ChevronLeft /></Arrow>
            { !currentPage ? <span>All photos</span> : <span className='text-xs'>Page {currentPage}/{totalPage}</span>}
            <Arrow disabled={currentPage==totalPage} href={createPageURL(currentPage+1)}><ChevronRight /></Arrow>
            <Arrow disabled={currentPage==totalPage} href={createPageURL(totalPage)}><ChevronLast /></Arrow>
            <PageSizeSelection />
            <Arrow disabled={currentPage==0} href={createPageURL(0)}>All pages</Arrow>   
        </div>
    )
}

function Arrow({ disabled, href, children }: 
    {disabled: boolean, href: string, children: React.ReactNode}) {
    return (
        !disabled ?
         <Link href={href} className="text-sky-400 disabled:text-gray-600">
            {children}
         </Link> 
        : <button disabled={disabled}>{children}</button>
    );
}

function PageSizeSelection() {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const sizeList: string[] = ['8', '10', '20', '40'];

    const handlePageSize = ((psize: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('pagesize', psize);
        params.set('page', "1");
        replace(`${pathname}?${params.toString()}`)

    });

    return (
        <select className='w-auto text-xs border-e-sky-200 bg-primary dark:bg-primary dark:text-dtext'
            id='pageSizeSelection'
            // defaultValue="8"
            onChange={(e) => {
                handlePageSize(e.target.value);
            }}
        >               
            <option >Photos per page</option>
            {sizeList.map(size => 
                <option key={sizeList.indexOf(size)} value={size} >
                {size} 
                </option>
            )} 
        </select>
    )
}

