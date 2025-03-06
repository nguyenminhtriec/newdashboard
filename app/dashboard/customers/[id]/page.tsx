
import { fetchPhotos } from "@/app/lib/actions";


const photos: {id: number, img_src: string}[] = await fetchPhotos();

export default async function Page({params}: {params: Promise<{id: string}>}) {

    const {id} = await params;
    
    const found = photos?.find(p => p.id.toString() === id);

    return (
        <div>
            <label>{id}</label>
            <img src={found?.img_src} alt='Photo not found.' />
        </div>
    )
}