import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import RoomForm from "./room-form";
import { RoomType } from "@/lib/types";
const EditButton = ({room} : {room : RoomType}) => {
    return (
        <Dialog>
            <DialogTrigger
                className={buttonVariants({
                    size:'sm',
                    className : 'bg-orange-500 hover:bg-orange-600'
                })}
            >
                Edit
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>
                        Edit Room
                    </DialogTitle>
                    <DialogDescription>
                        Fill out the details to create a new
                        room.
                    </DialogDescription>
                    
                </DialogHeader>
                <div className="mt-1">
                    <RoomForm room={room} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default EditButton
