"use client";

import Image from 'next/image'
import React from 'react'

function LogoSlide() {
    const names = [
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-1.svg", title: "Best financial advice" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-2.svg", title: "Innovative Approach" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-3.svg", title: "Client Centric Focused" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-4.svg", title: "Comprehensive Services" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-5.svg", title: "Sustainability" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-6.svg", title: "24/7 Maintenance" },
    ]

    return (
        <div className="relative   bg-[url('https://html.awaikenthemes.com/corprate/images/testimonial-bg-image.png')] bg-secondary bg-repeat-x bg-cover  ">
            <div className="overflow-hidden whitespace-nowrap w-full bg-gradient-to-b from-[#b3e0f5] to-[#e6f5fc] py-20">
                <div className="flex gap-10 animate-slow-marquee">
                    {names.concat(names).map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 min-w-[200px]">
                            <Image
                                priority
                                height={40}
                                width={40}
                                src={item.img}
                                alt={item.title}
                                className="w-14"
                            />
                            <h2 className="font-bold text-lg text-blue-900">{item.title}</h2>
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
                    animation: slow-marquee 10s linear infinite; /* Slower animation: 30 seconds */
                }
            `}</style>
            </div>
        </div>
    )
}

export default LogoSlide