"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductHighlights() {
    const products = [
        {
            name: "TOUCAN",
            desc: "Compact. Minimalist. Preschool-perfect.",
            stats: [
                { label: "3+ YEARS", icon: "👶" },
                { label: "385m²", icon: "📏" },
                { label: "21 USERS", icon: "👥" },
            ],
            image: "https://funplaysystems.com/images/Toucan-2.jpg",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            borderColor: "border-blue-200",
            accentColor: "from-blue-400 to-blue-600"
        },
        {
            name: "BELLATRIX",
            desc: "Towering architectural play for urban.",
            stats: [
                { label: "5+ YEARS", icon: "🧒" },
                { label: "420m²", icon: "📏" },
                { label: "30 USERS", icon: "👥" },
            ],
            image: "https://funplaysystems.com/images/Bellatrix-1.jpg",
            bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
            borderColor: "border-purple-200",
            accentColor: "from-purple-400 to-purple-600"
        },
        {
            name: "PAPERBOAT",
            desc: "Low-height playset with organic forms.",
            stats: [
                { label: "2+ YEARS", icon: "👶" },
                { label: "250m²", icon: "📏" },
                { label: "15 USERS", icon: "👥" },
            ],
            image: "https://funplaysystems.com/images/paper-boat-200.jpg",
            bgColor: "bg-gradient-to-br from-green-50 to-green-100",
            borderColor: "border-green-200",
            accentColor: "from-green-400 to-green-600"
        },
        {
            name: "ULTA GHAR",
            desc: "Soft play system with geometric purity.",
            stats: [
                { label: "8+ YEARS", icon: "🧑" },
                { label: "500m²", icon: "📏" },
                { label: "25 USERS", icon: "👥" },
            ],
            image: "https://funplaysystems.com/images/Ulta-Ghar3.jpg",
            bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
            borderColor: "border-orange-200",
            accentColor: "from-orange-400 to-orange-600"
        },
        {
            name: "PHULA",
            desc: "Sculptural outdoor structure for modern.",
            stats: [
                { label: "8+ YEARS", icon: "🧑" },
                { label: "500m²", icon: "📏" },
                { label: "25 USERS", icon: "👥" },
            ],
            image: "https://funplaysystems.com/images/Phula6.jpg",
            bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
            borderColor: "border-pink-200",
            accentColor: "from-pink-400 to-pink-600"
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            } 
        },
        hover: { 
            scale: 1.03, 
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", 
            transition: { 
                duration: 0.4,
                ease: "easeOut"
            } 
        }
    };

    // SVG Background Component
    const BackgroundPattern = () => (
        <svg 
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path 
                fill="#3b82f6" 
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
    );

    return (
        <div className="relative bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] py-16 sm:py-24 px-4 overflow-hidden">
            {/* SVG Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <BackgroundPattern />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-100/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/5 left-1/6 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-200/30 backdrop-blur-sm"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/6 right-1/5 w-14 sm:w-18 h-14 sm:h-18 rounded-full bg-pink-200/30 backdrop-blur-sm"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative max-w-7xl mx-auto z-10">
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 tracking-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
                        Explore Our Signature Play Units
                    </span>
                </motion.h2>
                
                <motion.div
                    className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-6 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Grid Layout for Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-20">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-2xl overflow-hidden group flex flex-col ${product.bgColor} border ${product.borderColor} shadow-lg backdrop-blur-sm bg-opacity-70`}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={`${product.name} playground`}
                                    fill
                                    className="object-cover transition-all duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
                                
                                {/* Name Badge */}
                                <div className={`absolute top-4 right-4 bg-gradient-to-r ${product.accentColor} text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md`}>
                                    {product.name}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="px-5 sm:px-6 py-5 sm:py-6 flex-grow flex flex-col">
                                <p className="text-gray-700 text-sm sm:text-base text-center mb-4 leading-relaxed font-medium">
                                    {product.desc}
                                </p>
                                
                                {/* Stats Section */}
                                <div className="mt-auto grid grid-cols-3 gap-3 sm:gap-4 text-center">
                                    {product.stats.map((stat, i) => (
                                        <motion.div 
                                            key={i} 
                                            className="flex flex-col items-center justify-center bg-white/90 rounded-lg py-3 px-2 border border-gray-200/80 backdrop-blur-sm"
                                            whileHover={{ 
                                                scale: 1.05,
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                                            }}
                                        >
                                            <span className="text-xl sm:text-2xl mb-1">{stat.icon}</span>
                                            <span className="text-xs sm:text-sm font-semibold text-gray-700">
                                                {stat.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${product.accentColor}/10`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}