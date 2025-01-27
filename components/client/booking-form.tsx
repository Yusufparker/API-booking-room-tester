import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingFormSchema } from "@/lib/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useApiStore } from "@/hooks/useApiStore";

const BookingForm = ({room_id} : {room_id : number}) => {
    const { apiUrl } = useApiStore();
    const { register, handleSubmit, formState } = useForm<
        z.infer<typeof BookingFormSchema>
    >({
        resolver: zodResolver(BookingFormSchema),

        defaultValues :{
            room_id
        }
    });

    const onSubmit = handleSubmit(async (values) => {  
        console.log(values);
              
        try {
            const response = await axios.post(`${apiUrl}/bookings`, values);
            console.log(response);
            window.location.reload();
        } catch (error) {
            console.error("Error creating booking:", error);
            alert("Error, perbaiki REST API");
        }
    });

    return (
        <form onSubmit={onSubmit} className="space-y-6">
        <Input id="room_id" type="hidden" {...register('room_id')} />
        <div className="text-start">
            <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
            >
                Name
            </Label>
            <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name")}
            />
            {formState.errors.name && (
            <p className="text-xs text-red-500 mt-2">
                {formState.errors.name.message}
            </p>
            )}
        </div>

        <div className="text-start">
            <Label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
            >
            Contact
            </Label>
            <Input
                type="text"
                id="contact"
                placeholder="Enter your phone number"
                {...register("contact")}
            />
            {formState.errors.contact && (
            <p className="text-xs text-red-500 mt-2">
                {formState.errors.contact.message}
            </p>
            )}
        </div>

        <div className="text-start">
            <Label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
            >
                Date
            </Label>
            <Input type="date" id="date" {...register("date")} />
            {formState.errors.date && (
            <p className="text-xs text-red-500 mt-2">
                {formState.errors.date.message}
            </p>
            )}
        </div>

        <div className="text-end">
            <Button type="submit">Submit</Button>
        </div>
        </form>
    );
};

export default BookingForm;
