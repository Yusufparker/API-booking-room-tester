import {z} from 'zod';


export const RoomFormSchema = z.object({
    name: z.string().min(4, "Name must be at least 4 characters"),
    description: z.string().min(4, "Description must be at least 4 characters"),
    capacity: z
            .union([z.string(), z.number()])
            .transform((val) => Number(val)) 
            .refine((val) => !isNaN(val) && val > 0, "Capacity is required and must be greater than 0"),
    image: z.string().min(1, "image url is required"),
});

export const BookingFormSchema = z.object({
    name : z.string().min(4, 'Name must be at least 4 characters'),
    contact : z.string().min(11, 'Invalid phone number'),
    room_id : z.number(),
    date : z.string().min(1, 'Date is required')
});