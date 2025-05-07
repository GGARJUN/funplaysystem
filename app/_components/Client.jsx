import React from 'react';

function Client() {
    return (
        <div className="w-full bg-gradient-to-b from-[#e6f5fc] to-[#e6f5fc] py-6 md:py-10">
            <div className="px-4 sm:px-10 md:px-20 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl sm:text-5xl md:text-7xl text-gray-900">21+</h2>
                    <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl text-center">Years Of Experience</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl sm:text-5xl md:text-7xl text-gray-900">150+</h2>
                    <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl text-center">Employees</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl sm:text-5xl md:text-7xl text-gray-900">15,000+</h2>
                    <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl text-center">Installations Nationwide</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl sm:text-5xl md:text-7xl text-gray-900">45,000</h2>
                    <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl text-center">Sq. ft. Manufacturing Facility</p>
                </div>
            </div>
        </div>
    );
}

export default Client;