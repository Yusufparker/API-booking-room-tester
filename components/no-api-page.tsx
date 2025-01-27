import React from 'react'

const NoApiPage = () => {
    return (
        <div className="mt-24 flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow border text-center max-w-md w-full">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">No API Configured</h1>
                <p className="text-gray-600 mb-6">It looks like you haven't configured an API yet. </p>        
            </div>
        </div>
    )
}

export default NoApiPage
