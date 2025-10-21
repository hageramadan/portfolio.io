export interface contactInfoType{
    id: number,
    address: string ,
    phone: string,
    email: string,
    website:string,
   social_media?: { [key: string]: string };
}