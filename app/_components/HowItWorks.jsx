"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            number: "01",
            title: "Schedule a Site Visit or Share Your Layout",
            subtitle: "Planning",
            desc: "Our experts evaluate your space, needs & budget to create the perfect play solution.",
        },
        {
            number: "02",
            title: "Get a Custom Plan & Quote",
            subtitle: "Design",
            desc: "Receive a tailored 3D design visualization and transparent cost breakdown.",
        },
        {
            number: "03",
            title: "Installation & Ongoing Support",
            subtitle: "Execution",
            desc: "Professional installation with post-completion maintenance and warranty.",
        },
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }
        },
        hover: {
            y: -10,
            transition: {
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    const numberVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        },
        hover: {
            scale: 1.1,
            color: "#FFD700",
            transition: {
                duration: 0.3
            }
        }
    };

    const arrowVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            x: 10,
            scale: 1.1,
            color: "#000000",
            backgroundColor: "#FFD700",
            transition: {
                duration: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const descVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut"
            }
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmFpbiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIHNjYWxlKDAuMikiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmFpbikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-5"></div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/4 left-1/5 w-16 sm:w-20 h-16 sm:h-20 rounded-full border border-gray-200/30 backdrop-blur-sm"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/5 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full border border-gray-200/30 backdrop-blur-sm"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 sm:mb-8 tracking-tight font-sans"
                    variants={headingVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-black to-gray-900">
                        From Concept to Joy – The FunPlay Way
                    </span>
                </motion.h2>
                <motion.div
                    className="w-32 sm:w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mb-10 sm:mb-12 md:mb-16 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Services List */}
                <motion.div
                    className="space-y-6 sm:space-y-8 group"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            {/* Service Content */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg py-6 sm:py-8 px-4 sm:px-6">
                                {/* Number */}
                                <motion.div
                                    className="text-xl sm:text-2xl font-bold text-gray-400 mb-4 sm:mb-0 sm:mr-4 md:mr-6"
                                    variants={numberVariants}
                                >
                                    {service.number}
                                </motion.div>

                                {/* Title and Subtitle */}
                                <div className="flex-1 mb-4 sm:mb-0">
                                    <motion.h4
                                        className="text-xs sm:text-sm text-gray-500 mb-1"
                                        variants={titleVariants}
                                    >
                                        {service.subtitle}
                                    </motion.h4>
                                    <motion.h3
                                        className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900"
                                        variants={titleVariants}
                                    >
                                        {service.title}
                                    </motion.h3>
                                </div>

                                {/* Description */}
                                <motion.p
                                    className="flex-1 text-gray-600 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-md"
                                    variants={descVariants}
                                >
                                    {service.desc}
                                </motion.p>

                                {/* Arrow Icon */}
                                <motion.div
                                    className="ml-0 sm:ml-4 md:ml-6 mt-4 sm:mt-0 p-2 sm:p-3 rounded-lg"
                                    variants={arrowVariants}
                                >
                                    <ArrowUpRight className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" />
                                </motion.div>
                            </div>

                            {/* Bottom Border */}
                            <div className="border-2 border-gray-600 rounded-full mt-2"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}