"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CircleArrowRight } from 'lucide-react';

function WhyFunPlayTrust() {
    const products = [
        {
            icon: '🏆',
            title: "Red Dot Design Award Winner (2024)",
            bgColor: "bg-gradient-to-br from-[#1abc9c] to-[#16a085]"
        },
        {
            icon: '🏭',
            title: "45,000 sq. ft. Manufacturing Facility",
            bgColor: "bg-gradient-to-br from-[#8e44ad] to-[#7d3c98]"
        },
        {
            icon: '👷',
            title: "150+ Skilled Employees",
            bgColor: "bg-gradient-to-br from-[#e74c3c] to-[#c0392b]"
        },
        {
            icon: '⏰',
            title: "21+ Years of Experience",
            bgColor: "bg-gradient-to-br from-[#0097e6] to-[#0078b4]"
        },
        {
            icon: '🎨',
            title: "Custom Design for Any Space",
            bgColor: "bg-gradient-to-br from-[#b71540] to-[#8e1133]"
        },
        {
            icon: '🚚',
            title: "Pan-India Delivery & Fast Installation",
            bgColor: "bg-gradient-to-br from-[#0c2461] to-[#0a1a4a]"
        },
        {
            icon: '✅',
            title: "ISO Certified & Safety-Compliant",
            bgColor: "bg-gradient-to-br from-[#c44569] to-[#c44569]"
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
            }
        }
    };

    const cardItem = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const cardHover = {
        scale: 1.02,
        rotate: 0,
        transition: { 
            type: "spring",
            stiffness: 200,
            damping: 15
        }
    };

    const iconPulse = {
        scale: [1, 1.1, 1],
        transition: { 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
        }
    };

    return (
        <motion.div 
            className="min-h-screen py-20 px-4 bg-gradient-to-b from-[#e6f5fc] to-[#b3e0f5] relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
          
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e74c3c]/20 rounded-full translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2 
                    className="text-4xl md:text-5xl text-center font-bold mb-8 tracking-tight font-sans"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-black to-gray-900">
                        Why Trust FunPlay?
                    </span>
                </motion.h2>
                
                <motion.div
                    className="w-32 sm:w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                <motion.div 
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="group flex flex-col items-center text-center relative cursor-pointer"
                            variants={cardItem}
                            whileHover={cardHover}
                            style={{
                                marginTop: index % 2 === 0 ? '0px' : '40px' // Staggered positioning
                            }}
                        >
                            <div
                                className={`w-56 h-56 rounded-full ${product.bgColor} flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden  transition-all duration-300`}
                            >
                                <motion.div
                                    className="text-8xl group-hover:opacity-50 transition-opacity duration-300"
                                    animate={iconPulse}
                                >
                                    {product.icon}
                                </motion.div>
                                <div
                                    className="absolute inset-1 z-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <CircleArrowRight className="w-12 h-12 text-white" />
                                </div>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            </div>
                            
                            <motion.h3 
                                className="text-xl font-bold text-gray-800 mb-4 px-4"
                            >
                                {product.title}
                            </motion.h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default WhyFunPlayTrust;