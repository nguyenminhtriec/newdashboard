'use client';

import { MarsPhoto } from "@/app/lib/actions";

export function PhotoCard({photo, handleClick}: {photo: MarsPhoto, handleClick: () => void}) {
    return(
        <div>
            <label>{photo.id}</label>
            <button onClick={() => handleClick()} >
                <img src={photo.img_src} alt='Mars photo.' className='cursor-pointer' />
            </button>
        </div>        
    )
}