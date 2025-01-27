import React from 'react'
import ApiInput from './api-input';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div
            className='p-5 shadow flex items-center justify-between'
        >
            <Link
                href='/'
            >
                <h1
                    className='font-bold text-slate-700'
                >
                    Booking Room
                </h1>
            </Link>
            <ApiInput/>
            <div>
                
            </div>
            
        </div>
    )
}

export default Navbar
