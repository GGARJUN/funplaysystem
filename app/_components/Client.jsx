import React from 'react'

function Client() {
    return (
        <div className="w-full bg-gradient-to-b from-[#e6f5fc] to-[#e6f5fc] py-10">
            <div className='px-20 flex  items-center justify-between gap-10'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold text-7xl text-gray-900'>21+</h2>
                    <p className='text-gray-700 font-medium text-xl'>Years Of Experiences</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold text-7xl text-gray-900'>150+</h2>
                    <p className='text-gray-700 font-medium text-xl'>Employees</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold text-7xl text-gray-900'>15,000+</h2>
                    <p className='text-gray-700 font-medium text-xl'>Installations Nationwide</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold text-7xl text-gray-900'>45,000</h2>
                    <p className='text-gray-700 font-medium text-xl'>Sq. ft. Manufacturing Facility</p>
                </div>
            </div>
        </div>
    )
}

export default Client