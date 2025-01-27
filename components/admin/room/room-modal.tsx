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
const RoomModal = () => {
    return (
        <Dialog>
            <DialogTrigger
                className={buttonVariants({
                    size:'sm',
                })}
            >
                + Add New
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>
                        Add New Room
                    </DialogTitle>
                    <DialogDescription>
                        Fill out the details to create a new
                        room.
                    </DialogDescription>
                    
                </DialogHeader>
                <div className="mt-1">
                    <RoomForm/>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default RoomModal
