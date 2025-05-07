"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

function LogoSlide() {
    const names = [
        { img: "https://funplaysystems.com/images/corporates/Corporates-1.jpg",  },
        { img: "https://funplaysystems.com/images/corporates/Corporates-2.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-3.jpg",  },
        { img: "https://funplaysystems.com/images/corporates/Corporates-4.jpg", },
        { img: "https://funplaysystems.com/images/corporates/Corporates-5.jpg", },
        { img: "https://funplaysystems.com/images/corporates/Corporates-6.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-7.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-8.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-9.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-10.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-11.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-12.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-13.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-14.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-15.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-16.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-17.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-18.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-19.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-20.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-21.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-22.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-23.jpg",},
        { img: "https://funplaysystems.com/images/corporates/Corporates-24.jpg",},
    ]

    return (
        <div className="relative   bg-[url('https://html.awaikenthemes.com/corprate/images/testimonial-bg-image.png')] bg-white   bg-repeat-x bg-cover  ">
            <div className="overflow-hidden whitespace-nowrap w-full max-w-7xl mx-auto ">
            <motion.h2 
                    className="text-4xl md:text-5xl text-center font-bold mb-8 tracking-tight font-sans mt-10"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-black to-gray-900">
                    Clientele
                    </span>
                </motion.h2>
                
                <motion.div
                    className="w-32 sm:w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <div className="flex gap-10 animate-slow-marquee py-20 ">
                    {names.concat(names).map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 min-w-[300px]">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-80"
                            />
                            {/* <h2 className="font-bold text-lg text-blue-900">{item.title}</h2> */}
                        </div>
                    ))}
                </div>
                <style jsx>{`
                @keyframes slow-marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-slow-marquee {
                    display: inline-flex;
                    animation: slow-marquee 20s linear infinite; /* Slower animation: 30 seconds */
                }
            `}</style>
            </div>
        </div>
    )
}

export default LogoSlide