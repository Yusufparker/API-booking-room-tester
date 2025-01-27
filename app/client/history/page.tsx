"use client";

import axios from "axios";
import { useApiStore } from "@/hooks/useApiStore";
import { useEffect, useState } from "react";
import { BookingType } from "@/lib/types";
import Link from "next/link";

const BookingHistory = () => {
    const { apiUrl } = useApiStore();
    const [bookings, setBookings] = useState<BookingType[]>([]);

    useEffect(() => {
        fetchBookingHistory();
    }, [apiUrl]);

    const fetchBookingHistory = async () => {
        try {
        const response = await axios.get(`${apiUrl}/bookings`);
        setBookings(response.data.data);
        } catch (error) {
        console.error(error);
        alert("Error, perbaiki REST API");
        }
    };

    return (
        <div className="p-8">
            <Link
                href='/client'
                className="text-sm underline inline-block mb-5"
            >
                Back
            </Link>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Booking History
            </h2>
            {bookings.length > 0 ? (
                <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                            #
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                                Room ID
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                                Name
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                                Contact
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {bookings.map((booking, index) => (
                        <tr
                            key={booking.id}
                            className="even:bg-gray-50 hover:bg-gray-100"
                        >
                            <td className="px-4 py-2 text-sm text-gray-600 border-b">
                                {index + 1}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b">
                                {booking.room_id}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b">
                                {booking.name}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b">
                                {booking.contact}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b">
                                {booking.date}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            ) : (
                <p className="text-gray-600">Tidak ada riwayat booking.</p>
            )}
        </div>
    );
};

export default BookingHistory;
