import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

} from "@/components/ui/dialog";
import { buttonVariants } from '../ui/button';
import { RoomType } from '@/lib/types';
import BookingForm from './booking-form';


const BookButton = ({room} : {room : RoomType}) => {
    return (
        <Dialog>
            <DialogTrigger
                className={buttonVariants({
                    size : 'sm',
                    className : 'w-full bg-slate-500'
                })}
            >
                Book
            </DialogTrigger>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>Book Room</DialogTitle>
                <DialogDescription>
                    Fill out the details.
                </DialogDescription>
                <div>
                    <div
                        className='h-28 overflow-hidden mb-5'
                    >
                        <img src={room.image} alt={room.name} className='w-full h-full object-cover hover:scale-110 transition' />
                    </div>
                    <BookingForm  room_id={room.id} />
                </div>

            </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default BookButton
