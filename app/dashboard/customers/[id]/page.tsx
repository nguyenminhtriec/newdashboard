
import { fetchPhotos, MarsPhoto } from "@/app/lib/actions";


export  default async function Page(props: Promise<{id: string, img_src: string}>) {

    const {id, img_src} = await props;

    return (
        <div>
            <img src={img_src} />
        </div>
    )
}