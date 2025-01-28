"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useApiStore } from "@/hooks/useApiStore";
import axios from "axios";
const ClientRoomCard = React.lazy(() => import('@/components/client/room/room-card-client'))
import { RoomType } from "@/lib/types";
import RoomSkeleton from "@/components/admin/room/room-skeleton";
import Link from "next/link";
import toast from "react-hot-toast";
import { MoveRight } from "lucide-react";




const ClientPage = () => {
    const { apiUrl } = useApiStore();
    const [rooms, setRooms] = useState<RoomType[]>([]);

    
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get(`${apiUrl as string}/rooms`);
                setRooms(response.data.data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
                toast.error('Error, perbaiki rest api')
            } 
        };
        fetchRooms();
    }, [apiUrl]);


    

    return (
        <div className="flex h-screen">
            <div className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-semibold">Rooms</h1>
                    <Link
                        href='/client/history'
                        className="text-sm hover:underline flex items-center gap-2"
                    >
                        Bookings History
                        <MoveRight size={12}/>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {rooms.map((room) => (
                        <Suspense
                            key={room.id}
                            fallback={<RoomSkeleton/>}
                        >
                            <ClientRoomCard key={room.id} room={room} />
                        </Suspense>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default ClientPage;
