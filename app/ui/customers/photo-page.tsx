'use client';

import { MarsPhoto } from "@/app/lib/actions";
import { usePhoto } from "./photo-context";
import { useRouter } from "next/navigation";
import { PhotoCard } from "./photo-card";


export function PhotosByPage({photos, currentPage, pageSize}
  : {photos: MarsPhoto[], currentPage: number, pageSize: number}
) {
      const router = useRouter();
      const index = (currentPage-1) * pageSize;    
      const photosByPage = (currentPage > 0) ?  photos.slice(index, index+pageSize) : photos;

      const {setSelectedPhoto} = usePhoto();
              
      return (           
          <div className="grid grid-cols-4 gap-2">       
            { photosByPage.map(photo => 
              <PhotoCard key={photo.id}            
                photo={photo}               
                handleClick={()=> {
                  setSelectedPhoto(photo);                 
                  router.push(`/dashboard/customers/${photo.id.toString()}`);
                }
                }>
              </PhotoCard>
            )}       
          </div> 
             
      )
  }

 