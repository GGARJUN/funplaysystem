"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function HeroSectionWithForm() {
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

    const images = [
        "https://funplaysystems.com/images/contactbanner.jpg",
        "https://images.unsplash.com/photo-1542887486-c0aeb6d2fc46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-br from-gray-900/90 via-black/50 to-gray-400/30 backdrop-blur-lg  ">
            {/* Image slider background with Swiper.js */}
            <div className="absolute inset-0 overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={1500}
                    className="w-full h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                                style={{ backgroundImage: `url('${image}')` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grain texture overlay for premium feel */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmFpbiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIHNjYWxlKDAuMikiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmFpbikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-10"></div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMDAgMCBMIDAgMCAwIDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>

            {/* Main content */}
            <div className="relative max-w-7xl mx-auto z-10 px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-52">
                {/* Left side content */}
                <div className="text-center lg:text-left">
                    <img src="https://funplaysystems.com/images/logo-white@2x.png" alt="logo" className="mx-auto lg:mx-0 mb-4 w-32 sm:w-40" />
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className="quicksand bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">Transform Your Space Into a World of Play</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-100"></span>
                    </motion.h1>

                    <motion.p
                        className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-100 max-w-xl mx-auto lg:mx-0 font-light tracking-wide"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        Design-awarded playgrounds crafted for schools, communities, and homes across India.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <div className="cursor-pointer flex items-center gap-2 border border-gray-400/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white">
                            <span className="text-base sm:text-lg">🏆</span>
                            <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-700">DESIGN AWARD 2024</p>
                        </div>
                        <div className="cursor-pointer flex items-center gap-2 border border-gray-400/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white">
                            <span className="text-base sm:text-lg">✨</span>
                            <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-700">PREMIUM MATERIALS</p>
                        </div>
                        <div className="cursor-pointer flex items-center gap-2 border border-gray-400/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white">
                            <span className="text-base sm:text-lg">🧠</span>
                            <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-700">CHILD DEVELOPMENT FOCUSED</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right side form */}
                <div className="lg:w-1/2 w-full">
                    <motion.div
                        className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-gray-300/50 shadow-2xl max-w-sm sm:max-w-md mx-auto lg:mx-0"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6 }}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                            Free Consultation
                        </h2>
                        <div className="space-y-2 sm:space-y-2">
                            <div>
                                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 border border-gray-300/50 rounded-lg text-gray-800 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 border border-gray-300/50 rounded-lg text-gray-800 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 border border-gray-300/50 rounded-lg text-gray-800 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 border border-gray-300/50 rounded-lg text-gray-800 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all"
                                    placeholder="Tell us about your project"
                                ></textarea>
                            </div>
                            <motion.div
                                variants={buttonVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Button
                                    className="w-full bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold py-2 sm:py-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transition-all text-sm sm:text-base"
                                    type="submit"
                                >
                                    Submit Inquiry
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Animated floating elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-10 sm:w-12 h-10 sm:h-12 border border-gray-400/20 rounded-full"
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
                className="absolute bottom-1/3 right-1/4 w-12 sm:w-16 h-12 sm:h-16 border-2 border-gray-400/10 rounded-full"
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
            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-gray-200/50 to-transparent"></div>
        </section>
    );
}