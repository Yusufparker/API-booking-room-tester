import React from 'react'

const RoomSkeleton = () => {
    return (
        <div className="overflow-hidden shadow border rounded-xl p-4 bg-white">
            <div className="h-40 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="mt-4 bg-gray-300 animate-pulse h-6 w-3/4 rounded-md"></div>
            <div className="mt-2 bg-gray-300 animate-pulse h-4 w-5/6 rounded-md"></div>
            <div className="mt-4 bg-gray-300 animate-pulse h-4 w-1/4 rounded-md"></div>
        </div>
    )
}

export default RoomSkeleton
