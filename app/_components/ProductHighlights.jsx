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
            borderColor: "border-blue-200"
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
            bgColor: "bg-gradient-to-br from-green-50 to-green-100",
            borderColor: "border-green-200"
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
            bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
            borderColor: "border-purple-200"
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
            borderColor: "border-orange-200"
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
            borderColor: "border-pink-200"
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        hover: { 
            scale: 1.03, 
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", 
            transition: { duration: 0.3 } 
        }
    };

    return (
        <div className="relative   bg-[url('https://funplaysystems.com/images/Group11.svg')] bg-secondary bg-repeat-x bg-cover  ">
        <motion.div
            className="min-h-screen py-16 sm:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#e6f5fc] to-[#e6f5fc] "
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-green-100/20 rounded-full translate-x-1/2 translate-y-1/2"></div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/4 left-1/5 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-100/30 backdrop-blur-sm"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/5 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-pink-100/30 backdrop-blur-sm"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative max-w-7xl mx-auto">
            <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8 tracking-tight font-sans"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-black to-gray-900">
                    Explore Our Signature Play Units
                    </span>
                </motion.h2>
                <motion.div
                    className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-8 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Grid Layout for Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-20">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-2xl overflow-hidden group flex flex-col ${product.bgColor} border ${product.borderColor} shadow-md`}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-48 sm:h-60">
                                <Image
                                    src={product.image}
                                    alt={`${product.name} playground`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                            </div>

                            {/* Card Content */}
                            <div className="px-5 sm:px-6 py-5 sm:py-6 flex-grow flex flex-col">
                                <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
                                    {product.name}
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base text-center mb-4 sm:mb-5 leading-relaxed">
                                    {product.desc}
                                </p>
                                
                                {/* Stats Section */}
                                <div className="mt-auto grid grid-cols-3 gap-3 text-center">
                                    {product.stats.map((stat, i) => (
                                        <div 
                                            key={i} 
                                            className="flex flex-col items-center justify-center bg-white/80 rounded-lg py-2 px-1 backdrop-blur-sm border border-gray-100"
                                        >
                                            <span className="text-lg sm:text-xl mb-1">{stat.icon}</span>
                                            <span className="text-xs sm:text-sm font-medium text-gray-700">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
        </div>
    );
}