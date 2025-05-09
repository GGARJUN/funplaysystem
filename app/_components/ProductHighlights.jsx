"use client";

import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

// Predefined constants to avoid repeated declarations
const products = [
    {
        name: "TOUCAN",
        desc: "Compact. Colorful. Stronger",
        stats: [
            { label: "3+ YEARS", icon: "👶" },
            { label: "385m²", icon: "📏" },
            { label: "21 USERS", icon: "👥" },
        ],
        image: "https://funplaysystems.com/images/Toucan-2.jpg",
        bgColor: "white",
        accentColor: "from-blue-400 to-blue-600",
        svg1: "https://funplaysystems.com/images/climbing.svg",
        svgDesc1: "Climbing",
        svg2: "https://funplaysystems.com/images/Sliding.svg",
        svgDesc2: "Sliding",
        svg3: "https://funplaysystems.com/images/Jumping.svg",
        svgDesc3: "Jumping",
    },
    {
        name: "BELLATRIX",
        desc: "Towering fun for community parks.",
        stats: [
            { label: "5+ YEARS", icon: "🧒" },
            { label: "420m²", icon: "📏" },
            { label: "30 USERS", icon: "👥" },
        ],
        image: "https://funplaysystems.com/images/Bellatrix-1.jpg",
        bgColor: "white",
        accentColor: "from-purple-400 to-purple-600",
        svg1: "https://funplaysystems.com/images/Rolling.svg",
        svgDesc1: "Rolling",
        svg2: "https://funplaysystems.com/images/Hanging.svg",
        svgDesc2: "Hanging",
        svg3: "https://funplaysystems.com/images/Balancing.svg",
        svgDesc3: "Balancing",
    },
    {
        name: "PAPERBOAT",
        desc: "Low-height playset for toddlers.",
        stats: [
            { label: "2+ YEARS", icon: "👶" },
            { label: "250m²", icon: "📏" },
            { label: "15 USERS", icon: "👥" },
        ],
        image: "https://funplaysystems.com/images/paper-boat-200.jpg",
        bgColor: "white",
        accentColor: "from-green-400 to-green-600",
        svg2: "https://funplaysystems.com/images/climbing.svg",
        svgDesc2: "Climbing",
        svg1: "https://funplaysystems.com/images/Sliding.svg",
        svgDesc1: "Sliding",
        svg3: "https://funplaysystems.com/images/crawling.svg",
        svgDesc3: "Crawling",
    },
    {
        name: "ULTA GHAR",
        desc: "Soft play system for indoors.",
        stats: [
            { label: "8+ YEARS", icon: "🧑" },
            { label: "500m²", icon: "📏" },
            { label: "25 USERS", icon: "👥" },
        ],
        image: "https://funplaysystems.com/images/Ulta-Ghar3.jpg",
        bgColor: "white",
        accentColor: "from-orange-400 to-orange-600",
        svg2: "https://funplaysystems.com/images/climbing.svg",
        svgDesc2: "Climbing",
        svg1: "https://funplaysystems.com/images/Sliding.svg",
        svgDesc1: "Sliding",
    },
    {
        name: "PHULA",
        desc: "Eco-themed outdoor structure.",
        stats: [
            { label: "8+ YEARS", icon: "🧑" },
            { label: "500m²", icon: "📏" },
            { label: "25 USERS", icon: "👥" },
        ],
        image: "https://funplaysystems.com/images/Phula6.jpg",
        bgColor: "white",
        accentColor: "from-pink-400 to-pink-600",
        svg2: "https://funplaysystems.com/images/climbing.svg",
        svgDesc2: "Climbing",
        svg1: "https://funplaysystems.com/images/Sliding.svg",
        svgDesc1: "Sliding",
        svg3: "https://funplaysystems.com/images/crawling.svg",
        svgDesc3: "Crawling",
    },
];

// Animation variants optimized for performance
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" }
    }),
    hover: {
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

// Memoized BackgroundPattern to prevent re-renders
const BackgroundPattern = memo(() => (
    <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
    >
        <path
            fill="#3b82f6"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
    </svg>
));
BackgroundPattern.displayName = 'BackgroundPattern';

// Memoized ProductCard to optimize rendering
const ProductCard = memo(({ product, index }) => (
    <motion.div
        custom={index}
        className={`relative rounded-2xl overflow-hidden group flex flex-col bg-white/40 backdrop-blur-sm shadow-md`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
    >
        <div className="relative w-full h-56 sm:h-64 overflow-hidden">
            <Image
                src={product.image}
                alt={`${product.name} playground`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading={index > 2 ? "lazy" : "eager"} // Lazy load images after first 3
                quality={75} // Reduced quality for faster loading
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            <div className={`absolute top-4 right-4 bg-gradient-to-r ${product.accentColor} text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md`}>
                {product.name}
            </div>
        </div>
        <div className="px-5 sm:px-6 py-5 sm:pt-6 flex flex-col h-[240px]">
            <h2 className="text-center text-gray-900 text-xl pb-2 font-bold">{product.name}</h2>
            <p className="text-gray-700 text-sm sm:text-base text-center mb-4 leading-relaxed font-medium">
                {product.desc}
            </p>
            <motion.div
                className="w-full h-[2px] mt-2 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
            />
            <div className="flex items-center justify-between mt-4">
                {[1, 2, 3].map((i) => product[`svg${i}`] && product[`svgDesc${i}`] && (
                    <div key={i} className="flex items-center gap-2">
                        <img src={product[`svg${i}`]} alt={product[`svgDesc${i}`]} className="w-5 h-5" loading="lazy" />
                        <p className="text-sm">{product[`svgDesc${i}`]}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-8 cursor-pointer">
                <h2 className="text-center text-xl text-blue-500 hidden group-hover:block opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-300">
                    Contact us
                </h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 hidden group-hover:block opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>
        </div>
    </motion.div>
));
ProductCard.displayName = 'ProductCard';

export default function ProductHighlights() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    // Optimized IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );
        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => currentRef && observer.unobserve(currentRef);
    }, []);

    return (
        <div ref={ref} className="relative bg-gradient-to-b from-[#f5fbff] to-[#e8f4fe] py-16 sm:py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <BackgroundPattern />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/10 to-transparent" />
            </div>
            {/* Simplified animations to reduce CPU load */}
            <motion.div
                className="absolute top-1/5 left-1/6 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-100/20 backdrop-blur-sm"
                animate={isVisible ? { y: [-15, 15, -15], opacity: 0.4 } : {}}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/6 right-1/5 w-14 sm:w-18 h-14 sm:h-18 rounded-full bg-pink-100/20 backdrop-blur-sm"
                animate={isVisible ? { scale: [1, 1.1, 1], opacity: 0.4 } : {}}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative max-w-7xl mx-auto z-10">
                <motion.h2
                    className="text-4xl sm:text-5xl text-center font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                >
                    Explore Our Signature Play Units
                </motion.h2>
                <motion.div
                    className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-6 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8 }}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-20">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}