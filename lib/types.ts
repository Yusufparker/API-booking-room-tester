export type RoomType = {
    id: number;
    name: string;
    description: string;
    image: string;
    capacity: number;
};

export type BookingType = {
    id : number;
    room_id : number;
    name : string;
    contact : string;
    date : string;
}
