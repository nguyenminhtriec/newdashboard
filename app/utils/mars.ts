import { type MarsPhoto } from "../lib/actions";


export function getCurrentPage(photos: MarsPhoto[], offset: number, pageSize: number) {

    return photos.slice(offset, offset + pageSize);

}

export function next(offset: number, pageSize = 10) {
    
}
