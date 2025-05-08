"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FinalCTA() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const buttonVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(2px)" },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                delay: i * 0.2,
                ease: [0.16, 1, 0.3, 1],
            },
        }),
        hover: {
            scale: 1.05,
            boxShadow: "0 0 20px rgba(123, 200, 237, 0.5)",
            transition: {
                duration: 0.3,
                ease: [0.33, 1, 0.68, 1],
            },
        },
        tap: { scale: 0.98 },
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const dividerVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
            },
        },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            ref={ref}
            className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-[#E6F5FC] to-[#B3E0F5] overflow-hidden text-center"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmFpbiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDAgMTAgTCAxMCAwIE0gLTEgMSBMIDEgLTEgTSAxMSA5IEwgOSAxMSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZ3JhaW4pIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-10"></div>

            {/* Animated Floating Elements */}
            <motion.div
                className="absolute top-1/5 left-1/4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-br from-[#7CC1ED]/20 to-transparent blur-xl"
                animate={inView ? {
                    y: [0, -30, 0],
                    opacity: [0.3, 0.5, 0.3],
                } : {}}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/5 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-[#B3E0F5]/20 to-transparent blur-xl"
                animate={inView ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                } : {}}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative max-w-3xl mx-auto">
                {/* Animated Headline */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 sm:mb-8 tracking-tight font-sans"
                    variants={headingVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                        Ready to Build Your Dream Play Space?
                    </span>
                </motion.h2>
                <motion.div
                    className="w-32 sm:w-40 h-1 bg-gradient-to-r from-gray-900/0 via-gray-900/80 to-gray-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                    variants={dividerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                />
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-800 font-medium mt-10"
                    variants={paragraphVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    Let’s bring fun, creativity, and joy to your space—start with a free design consultation.
                </motion.p>

                {/* Buttons with Ultra Design */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <motion.div
                        custom={0}
                        variants={buttonVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Button className="relative bg-gradient-to-r from-white to-[#E6F5FC] text-gray-900 hover:from-white hover:to-[#B3E0F5] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg backdrop-blur-sm border border-[#7CC1ED]/30 overflow-hidden group">
                            <span className="relative z-10">Book a Free Site Visit</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7CC1ED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Button>
                    </motion.div>
                    <motion.div
                        custom={1}
                        variants={buttonVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Button className="relative bg-gradient-to-r from-[#7CC1ED]/90 to-[#B3E0F5]/90 hover:from-[#7CC1ED] hover:to-[#E6F5FC] text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg backdrop-blur-sm border border-[#7CC1ED]/30 overflow-hidden group">
                            <span className="relative z-10">Download Product Catalogue</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Button>
                    </motion.div>
                    <motion.div
                        custom={2}
                        variants={buttonVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Button className="relative bg-gradient-to-r from-white to-[#E6F5FC] text-gray-900 hover:from-white hover:to-[#B3E0F5] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg backdrop-blur-sm border border-[#7CC1ED]/30 overflow-hidden group">
                            <span className="relative z-10">Talk to an Expert</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7CC1ED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}