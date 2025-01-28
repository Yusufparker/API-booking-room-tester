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
import toast from 'react-hot-toast';
import { useState } from 'react';


const DeleteButton = ({id} : {id : number}) => {
    const {apiUrl} = useApiStore()
    const [loading, setLoading] = useState<boolean>(false)
    const handleDelete = async () =>{
        try {
            setLoading(true)
            const response = await axios.delete(`${apiUrl}/rooms/${id}`)
            console.log(response);
            toast.success(response.data.message);
            setTimeout(() => {
                window.location.reload();
                setLoading(false)
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error("Error, perbaiki rest api");
            setLoading(false)
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
                        disabled={loading}
                    >
                        {loading ? 'Deleting..' : 'Delete'}
                    </Button>
                </DialogFooter>
            </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteButton
