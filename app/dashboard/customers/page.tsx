//
import { Metadata } from "next";
import { fetchPhotos } from "@/app/lib/actions";
import SearchPhotos from "@/app/ui/customers/search-photos"; 
import { PhotosPageNav } from "@/app/ui/customers/page-nav";

import { PhotosByPage } from "@/app/ui/customers/photo-page";



export const metadata: Metadata = {
    title: 'Mars Photos',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    pagesize?: string;
  }>;
}) { 
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const photos = await fetchPhotos(query) || [];

    const currentPage = searchParams?.page || "1";
    const pageSize = Number(searchParams?.pagesize) || 8; 
    const totalPage = Math.ceil(photos.length / pageSize);
    
    return (
      <div className="h-full">
        <SearchPhotos placeholder="Date [yyyy-mm-dd]" />
        <PhotosByPage photos={photos} currentPage={Number(currentPage)} pageSize={pageSize}  />  
        { photos.length ? 
          <PhotosPageNav totalPage={totalPage} currentPage={Number(currentPage)} /> 
          : undefined }
      </div>
    )
  }

/** sending [pathname] and [query] in a [url] object. */
// import Link from "next/link";
// import { MarsPhoto } from "@/app/lib/actions"; 
// import { PhotoCard } from "./photo-card";

// export function PhotosByPage({photos, currentPage, pageSize} : {
//     photos: MarsPhoto[], currentPage: number, pageSize: number
//   }) {
    
//     const index = (currentPage) ? (currentPage-1) * pageSize : 0;    
//     const photosByPage = (currentPage) ?  photos.slice(index, index+pageSize) : photos;
  
//     return (
//       <div className="grid grid-cols-4 gap-2">
//           {photosByPage.map(photo => {
//             const url = {
//               pathname: `/dashboard/customers/${photo.id.toString()}`,
//               query: { img_src: photo.img_src },
//             }
//             return (
//               <div key={photo.id}>
//               <label>{photo.id}</label>
//               <Link href={url}>
//                 <img src={photo.img_src}  alt='' />
//               </Link>             
//             </div>
//             )
//           }
//         )}
//       </div> 
//     )
//   }
  


  // import { MarsPhoto } from "@/app/lib/actions"; 
  // import { PhotoCard } from "@/app/ui/customers/photo-card";

  // export function PhotosByPage({photos, currentPage, pageSize} : {
  //   photos: MarsPhoto[], currentPage: number, pageSize: number
  // }) {
    
  //   const index = (currentPage-1) * pageSize;    
  //   const photosByPage = (currentPage > 0) ?  photos.slice(index, index+pageSize) : photos;

  //   return (
  //     <div className="grid grid-cols-4 gap-2">
  //       {photosByPage.map(photo => 
  //         <PhotoCard key={photo.id} photo={photo}></PhotoCard>
  //       )}
  //     </div>
  //   )
    
  // }  
