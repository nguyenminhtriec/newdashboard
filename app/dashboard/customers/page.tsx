

import { Metadata } from "next";
import Link from "next/link";
import { fetchPhotos } from "@/app/lib/actions";
import Pagination from "@/app/ui/invoices/pagination";
import { MarsPhoto } from "@/app/lib/actions";
import Search from "@/app/ui/search";
import { CustomersNav } from "@/app/ui/customers/page-nav";


export const metadata: Metadata = {
    title: 'Mars Photos',
};

const PAGE_SIZE = 8;
let index: number = 0;


export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {  
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = searchParams?.page || 1;

    const photos = await fetchPhotos(query) || [];
    const totalPage = Math.ceil(photos.length / PAGE_SIZE);
 
    index = (Number(currentPage)-1) * (PAGE_SIZE);
    
   
    return (
      
      // <ul className="grid grid-cols-4 gap-2">
      //   {dataFirst5.map(photo => 
      //     <li key={photo.id} className="">
      //       <label>{photo.id}</label>
      //       <img src={photo.img_src}  alt='' />
      //     </li>        
      //   )}
      // </ul>

      <div className="h-screen">
        <Search placeholder="Date [yyyy-mm-dd]" />
        <PhotosByPage photos={photos} index={index} pageSize={PAGE_SIZE}  />  
        {/* <Pagination totalPages={totalPage} /> */}
        {photos.length ? <CustomersNav totalPage={totalPage} /> : undefined }
      </div>
    )
  }

  async function PhotosByPage({photos, index, pageSize} : {
    photos: MarsPhoto[], index: number, pageSize: number
  }) {
    const photosByPage = photos.slice(index, index+pageSize);
    return (
      <div className="grid grid-cols-4 gap-2">
          {photosByPage.map(photo =>
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