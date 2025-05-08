"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function WhoWeServeLight() {
    const audiences = [
        {
            text: "Schools & Daycares – Safe, durable, and age-appropriate",
            image: "https://img.freepik.com/free-vector/school-building-icon_24911-79134.jpg",
            bgColor: "bg-[#3498db]"
        },
        {
            text: "Residential Societies – Boost community engagement",
            image: "https://img.freepik.com/free-vector/residential-area-illustration_1284-18102.jpg",
            bgColor: "bg-[#2ecc71]"
        },
        {
            text: "Public Parks & Urban Spaces – Inclusive and compliant",
            image: "https://img.freepik.com/free-vector/park-icon_24911-79135.jpg",
            bgColor: "bg-[#e74c3c]"
        },
        {
            text: "Builders & Architects – Custom-built to specification",
            image: "https://img.freepik.com/free-vector/architectural-plan-building_1308-93525.jpg",
            bgColor: "bg-[#f39c12]"
        },
        {
            text: "Private Homes – Tailored play for your backyard",
            image: "https://img.freepik.com/free-vector/house-icon_24911-79136.jpg",
            bgColor: "bg-[#9b59b6]"
        },
    ];

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(2px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
        hover: {
            y: -10,
            scale: 1.03,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            transition: {
                duration: 0.3,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 15,
            filter: "blur(1px)"
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                delay: i * 0.1 + 0.3,
                ease: [0.33, 1, 0.68, 1]
            }
        }),
        hover: {
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.3,
                ease: [0.33, 1, 0.68, 1]
            }
        },
        tap: {
            scale: 0.98,
            transition: { duration: 0.2 }
        }
    };

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section ref={ref} className="min-h-screen py-20 px-4 bg-gradient-to-b from-[#e6f5fc] to-[#b3e0f5] relative overflow-hidden">
            <motion.div
                className="absolute top-1/4 left-1/5 w-16 h-16 rounded-full border border-gray-200/50"
                animate={isVisible ? {
                    y: [0, -20, 0],
                    opacity: [0.1, 0.2, 0.1],
                } : {}}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/5 right-1/4 w-12 h-12 rounded-full border border-gray-200/50"
                animate={isVisible ? {
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                } : {}}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8 tracking-tight font-sans"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-black to-gray-900">
                        Playgrounds That Fit Every Vision
                    </span>
                </motion.h2>
                <motion.div
                    className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-8 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                <div className="mt-20 px-8">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="!pb-12"
                    >
                        {audiences.map((audience, index) => (
                            <SwiperSlide key={index} className="!h-auto py-10">
                                <motion.div
                                    custom={index}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate={isVisible ? "visible" : "hidden"}
                                    whileHover="hover"
                                    className="h-full"
                                >
                                    <div className={`relative ${audience.bgColor} rounded-2xl overflow-hidden group h-full`}>
                                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20"></div>
                                        <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center">
                                            <div className="relative w-32 h-32 mb-6 rounded-full bg-white/20 backdrop-blur-sm p-4">
                                                <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>
                                                <Image
                                                    src={audience.image}
                                                    alt={audience.text}
                                                    fill
                                                    className="object-contain p-4"
                                                />
                                            </div>
                                            <p className="text-lg font-medium text-white text-center leading-relaxed">
                                                {audience.text}
                                            </p>
                                        </div>
                                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-full translate-x-1/2 translate-y-1/2"></div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}