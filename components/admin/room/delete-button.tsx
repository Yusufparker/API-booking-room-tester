import { Button, buttonVariants } from '@/components/ui/button';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog";
import axios from 'axios';
import { useApiStore } from '@/hooks/useApiStore';


const DeleteButton = ({id} : {id : number}) => {
    const {apiUrl} = useApiStore()
    const handleDelete = async () =>{
        try {
            const response = axios.delete(`${apiUrl}/rooms/${id}`)
            console.log(response);
            window.location.reload()
        } catch (error) {
            console.log(error);
            alert("Error, perbaiki rest api");

        }
    }

    return (
        <Dialog>
            <DialogTrigger
                className={buttonVariants({
                    size : 'sm',
                    variant : 'destructive'
                })}
            >
                Delete
            </DialogTrigger>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your data.
                </DialogDescription>
                <br />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteButton
