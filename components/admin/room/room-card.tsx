import { Button } from "@/components/ui/button"
import { RoomType } from "@/lib/types"
import DeleteButton from "./delete-button"
import EditButton from "./edit-button"


const RoomCard = ({room} : {room : RoomType}) => {
    return (
        <div
            className="overflow-hidden shadow border-2 rounded-xl hover:shadow transition"
        >
            <div className=" h-52 md:h-40 overflow-hidden relative">
                <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition"
                />
                <span className="absolute bottom-3 right-3 text-blue-500 bg-white py-1 px-2 rounded-full font-bold text-[10px]">
                    {room.capacity} orang
                </span>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold">{room.name}</h2>
                <p className="text-sm text-gray-600 mt-2">{room.description}</p>
                <div className="flex gap-2 mt-4 justify-end">
                    <EditButton room={room} />
                    <DeleteButton id={room.id} />
                </div>
            </div>
        </div>
    )
}

export default RoomCard
