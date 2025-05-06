"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProductHighlightsCarousel() {
  const products = [
    {
      name: "TOUCAN",
      desc: "Compact. Minimalist. Preschool-perfect.",
      stats: [
        { label: "3+ YEARS", icon: "👶" },
        { label: "385m²", icon: "📏" },
        { label: "21 USERS", icon: "👥" },
      ],
      image: "https://funplaysystems.com/images/Card-Crook.jpg",
      bgColor: "from-blue-100/50 to-blue-200/30"
    },
    {
      name: "BELLATRIX",
      desc: "Towering architectural play for urban.",
      stats: [
        { label: "5+ YEARS", icon: "🧒" },
        { label: "420m²", icon: "📏" },
        { label: "30 USERS", icon: "👥" },
      ],
      image: "https://funplaysystems.com/images/Card-Pyramid-2.jpg",
      bgColor: "from-green-100/50 to-green-200/30"
    },
    {
      name: "PAPERBOAT",
      desc: "Low-height playset with organic forms.",
      stats: [
        { label: "2+ YEARS", icon: "👶" },
        { label: "250m²", icon: "📏" },
        { label: "15 USERS", icon: "👥" },
      ],
      image: "https://funplaysystems.com/images/Barrel.jpg",
      bgColor: "from-purple-100/50 to-purple-200/30"
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
      bgColor: "from-orange-100/50 to-orange-200/30"
    },
    {
      name: "PHULA",
      desc: "Sculptural outdoor structure for modern .",
      stats: [
        { label: "8+ YEARS", icon: "🧑" },
        { label: "500m²", icon: "📏" },
        { label: "25 USERS", icon: "👥" },
      ],
      image: "https://funplaysystems.com/images/Phula6.jpg",
      bgColor: "from-orange-100/50 to-orange-200/30"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000); // Slide every 2 seconds
    return () => clearInterval(interval);
  }, [products.length]);

  // Determine the indices of the 3 cards to display
  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % products.length,
    (currentIndex + 2) % products.length,
  ];

  const cardVariants = {
    enter: {
      opacity: 0,
      x: "100%",
      scale: 0.9,
    },
    center: (custom) => ({
      opacity: 1,
      x: `${custom * 115}%`, // Position cards at 0%, 33.33%, 66.66%
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    }),
    exit: {
      opacity: 0,
      x: "-100%",
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen py-40 px-4 bg-gradient-to-b from-[#b3e0f5] to-[#e6f5fc] relative overflow-hidden"

    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-94 h-94 bg-[#1abc9c]/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-20 h-20 rounded-full border border-gray-200 backdrop-blur-sm"
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
        className="absolute bottom-1/5 right-1/4 w-16 h-16 rounded-full border border-gray-200 backdrop-blur-sm"
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
          className="text-4xl md:text-5xl text-center font-bold mb-8 tracking-tight font-sans"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-black to-gray-900">
            Architectural Play Systems
          </span>
        </motion.h2>
        <motion.div
          className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Carousel Container */}
        <div className="relative w-full h-[450px] overflow-hidden mt-20 ">
          <AnimatePresence initial={false}>
            {visibleIndices.map((index, position) => (
              <motion.div
                key={index}
                custom={position}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-1/3 max-w-xs md:max-w-sm flex-shrink-0"
              >
                <div className={`relative rounded-2xl  border border-gray-200/80 overflow-hidden group flex flex-col shadow-md`}>
                  <div className="p-0 relative">
                    {/* Product Image */}
                    <motion.div
                      variants={imageVariants}
                      whileHover="hover"
                      className="relative w-full h-72"
                    >
                      <Image
                        src={products[index].image}
                        alt={`${products[index].name} playground`}
                        fill
                        className="object-cover h-96 w-96"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </motion.div>
                  </div>

                  <div className="px-6 py-5 flex-grow flex flex-col bg-white">
                    <div className="text-xl text-center font-bold text-gray-900 mb-2">
                      {products[index].name}
                    </div>
                    <p className="text-gray-600 text-center mb-2 leading-relaxed flex-grow">{products[index].desc}</p>
                    {/* Stats Section */}
                    <div className="flex justify-around">
                      {products[index].stats.map((stat, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 text-gray-700">
                          <span className="text-lg">{stat.icon}</span>
                          <span className="text-sm font-medium">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}