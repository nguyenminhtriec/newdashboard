'use client'

import { MarsPhoto } from "@/app/lib/actions";
import React, { createContext, useContext, useState } from "react";


interface PhotoContextProps {
    selectedPhoto?: MarsPhoto,
    setSelectedPhoto: (photo: MarsPhoto) => void,
}

export const PhotoContext = createContext<PhotoContextProps>({
    selectedPhoto: undefined, //{id: 1, img_src: "abc"},
    setSelectedPhoto: (_: MarsPhoto) => null,
});
    
export const usePhoto = () => useContext(PhotoContext);

// interface PhotoProviderProps {
//     children: React.ReactNode,
// }

// export const PhotoProvider: React.FC<PhotoProviderProps> = ({children}) => {
//     const [selectedPhoto, setSelectedPhoto] = useState<MarsPhoto>();
//     return (
//         <PhotoContext value={{selectedPhoto, setSelectedPhoto}}>
//             {children}
//         </PhotoContext>
//     )
// }

export function PhotoProvider({children}: {children: React.ReactNode}) {
    const [selectedPhoto, setSelectedPhoto] = useState<MarsPhoto>();
    return (
        <PhotoContext value={{selectedPhoto, setSelectedPhoto}}>
            {children}
        </PhotoContext>
    )
}


