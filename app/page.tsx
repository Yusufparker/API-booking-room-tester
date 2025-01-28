"use client";

import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-lg font-bold">Simulasi REST API Booking Room</h1>
      <p className="text-gray-600">Pilih portal untuk simulasi</p>
      <div className="flex  gap-4 mt-10">
        {/* Portal Admin */}
        <Link
          href="/admin"
          className="px-6 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Portal Admin
        </Link>
        {/* Portal Client */}
        <Link
          href="/client"
          className="px-6 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Portal Karyawan
        </Link>
      </div>
    </div>
  );
};

export default Home;
