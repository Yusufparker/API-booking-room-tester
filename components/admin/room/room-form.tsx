import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RoomFormSchema } from "@/lib/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useApiStore } from "@/hooks/useApiStore";
import { RoomType } from "@/lib/types";


type FormType = z.infer<typeof RoomFormSchema>

const RoomForm = ({room} : {room? : RoomType}) => {
    const {apiUrl} = useApiStore()
    const { register, handleSubmit, formState } =
        useForm<FormType>({
            resolver: zodResolver(RoomFormSchema),
            defaultValues: room || {},
    });
    const onSubmit = handleSubmit( async  (values) => {
        if(room){
            await handleUpdateRoom(values);
        }else{
            await handleCreateRoom(values);
        }
        
    })

    const handleUpdateRoom = async (values: FormType) =>{
        try {
            const response = await axios.put(`${apiUrl}/rooms/${room?.id}`, values);
            console.log(response);
            
            window.location.reload();
        } catch (error: any) {
            console.error("Error updating room:", error);
            alert("Error, perbaiki rest api");

        }
    }


    const handleCreateRoom = async (values: FormType) => {
        try {
            const response = await axios.post(`${apiUrl}/rooms`, values);
            console.log(response);
            
            window.location.reload()
        } catch (error: any) {
            console.error("Error creating room:", error);
            alert("Error, perbaiki rest api");

        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            {/* Form Fields */}
            <div>
                <Label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Name
                </Label>
                <Input
                    type="text"
                    id="name"
                    placeholder="Enter room name"
                    {...register("name")}
                />
                {formState.errors.name && (
                    <p className="text-xs text-red-500 mt-2">
                        {formState.errors.name.message}
                    </p>
                )}
            </div>
            <div>
                <Label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                >
                    Description
                </Label>
                <Input
                    type="text"
                    id="description"
                    placeholder="Enter room description"
                    {...register("description")}
                />
                {formState.errors.description && (
                    <p className="text-xs text-red-500 mt-2">
                        {formState.errors.description.message}
                    </p>
                )}
            </div>
            <div>
                <Label
                    htmlFor="capacity"
                    className="block text-sm font-medium text-gray-700"
                >
                    Capacity
                </Label>
                <Input
                    type="number"
                    id="capacity"
                    placeholder="Enter capacity"
                    {...register("capacity")}
                />
                {formState.errors.capacity && (
                    <p className="text-xs text-red-500 mt-2">
                        {formState.errors.capacity.message}
                    </p>
                )}
            </div>
            <div>
                <Label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                >
                    Image Url
                </Label>
                <Input
                    type="text"
                    id="image"
                    placeholder="Enter image url"
                    {...register("image")}
                />
                {formState.errors.image && (
                    <p className="text-xs text-red-500 mt-2">
                        {formState.errors.image.message}
                    </p>
                )}
            </div>

            <div className="text-end">
                <Button
                    type="submit"
                >
                    Save
                </Button>
                
            </div>

        </form>
    );
};

export default RoomForm;
