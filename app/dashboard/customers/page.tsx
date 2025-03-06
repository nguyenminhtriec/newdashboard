
import { Metadata } from "next";
import Link from "next/link";
import { fetchPhotos } from "@/app/lib/actions";


export const metadata: Metadata = {
    title: 'Mars Photos',
};


export default async function Page() {
 
    const photos: {id: number, img_src: string}[] = await fetchPhotos();
    const photosFirst100 = photos.length > 100 ? photos.slice(0, 100) : photos;
   
    return (
      
      // <ul className="grid grid-cols-4 gap-2">
      //   {dataFirst5.map(photo => 
      //     <li key={photo.id} className="">
      //       <label>{photo.id}</label>
      //       <img src={photo.img_src}  alt='' />
      //     </li>        
      //   )}
      // </ul>

      
        <div className="grid grid-cols-4 gap-2">
          {photosFirst100?.map(photo =>
            <div key={photo.id}>
              <label>{photo.id}</label>
              <Link href={`/dashboard/customers/${photo.id.toString()}`}>
                <img src={photo.img_src}  alt='' />
              </Link>
            </div>
          )}
        </div>
      
    )
  }