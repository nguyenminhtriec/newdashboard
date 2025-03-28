'use client'

import { MarsPhoto } from "@/app/lib/actions";
import React, { createContext, useContext, useState } from "react";


interface PhotoContextProps {
    selectedPhoto?: MarsPhoto,
    setSelectedPhoto: (photo: MarsPhoto) => void,
}

export const PhotoContext = createContext<PhotoContextProps>({
    selectedPhoto: {id: 1, img_src: "abc"},
    setSelectedPhoto: (_: MarsPhoto) => {},
});
    
export const usePhoto = () => useContext(PhotoContext);

interface PhotoProviderProps {
    children: React.ReactNode,
}

export const PhotoProvider: React.FC<PhotoProviderProps> = ({children}) => {
    const [selectedPhoto, setSelectedPhoto] = useState<MarsPhoto>();
    return (
        <PhotoContext.Provider value={{selectedPhoto, setSelectedPhoto}}>
            {children}
        </PhotoContext.Provider>
    )
}


