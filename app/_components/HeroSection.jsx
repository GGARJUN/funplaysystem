"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
  };

  // Image slider setup
  const images = [
    "https://funplaysystems.com/images/contactbanner.jpg",
    "https://images.unsplash.com/photo-1542887486-c0aeb6d2fc46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("left");
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation variants for the slider
  const sliderVariants = {
    enter: (direction) => {
      return {
        x: direction === "left" ? "-100%" : "100%",
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 0.2,
      transition: {
        x: { duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9] },
        opacity: { duration: 1 }
      }
    },
    exit: (direction) => {
      return {
        x: direction === "left" ? "100%" : "-100%",
        opacity: 0,
        transition: {
          x: { duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9] },
          opacity: { duration: 0.5 }
        }
      };
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Image slider background with left-to-right animation */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${image}')` }}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate={index === currentImageIndex ? "center" : "exit"}
          />
        ))}
      </div>

      {/* Grain texture overlay for premium feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmFpbiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIHNjYWxlKDAuMikiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmFpbikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-10"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMDAgMCBMIDAgMCAwIDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RelZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto text-center z-10 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Transform Your Space</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400"> Into a World of Play</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto font-light tracking-wide"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Design-awarded playgrounds crafted for schools, communities, and homes across India.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <div className="cursor-pointer flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-xl">🏆</span>
            <p className="text-sm font-medium tracking-wider">DESIGN AWARD 2024</p>
          </div>
          <div className=" cursor-pointer flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-xl">✨</span>
            <p className="text-sm font-medium tracking-wider">PREMIUM MATERIALS</p>
          </div>
          <div className=" cursor-pointer flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-xl">🧠</span>
            <p className="text-sm font-medium tracking-wider">CHILD DEVELOPMENT FOCUSED</p>
          </div>
        </motion.div>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <Button className="bg-white text-black hover:bg-gray-100 px-12 py-6 rounded-full text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/30">
              Explore Our Designs →
            </Button>
          </motion.div>
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 border border-white/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-white/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
}