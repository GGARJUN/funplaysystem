"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FinalCTA() {
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
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            transition: {
                duration: 0.3,
                ease: [0.33, 1, 0.68, 1],
            },
        },
        tap: { scale: 0.98 },
    };

    return (
        <section className="relative py-24 px-6 bg-gradient-to-br from-[#d9f0ff] via-[#a3d8f4] to-[#7cc1ed] overflow-hidden text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmFpbiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDAgMTAgTCAxMCAwIE0gLTEgMSBMIDEgLTEgTSAxMSA5IEwgOSAxMSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZ3JhaW4pIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-10"></div>
            
            {/* Animated Floating Elements */}
            <motion.div
                className="absolute top-1/5 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-300/30 to-transparent blur-xl"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/5 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/30 to-transparent blur-xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative max-w-3xl mx-auto">
                {/* Animated Headline */}
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-700"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    Ready to Build Your Dream Play Space?
                </motion.h2>
                <motion.p
                    className="text-lg md:text-xl mb-10 text-gray-800 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Let’s bring fun, creativity, and joy to your space—start with a free design consultation.
                </motion.p>

                {/* Buttons with Ultra Design */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <motion.div
                        custom={0}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Button className="relative bg-gradient-to-r from-yellow-300/80 to-yellow-500/80 text-gray-900 hover:from-yellow-400/90 hover:to-yellow-600/90 px-8 py-4 rounded-full text-lg font-semibold shadow-lg backdrop-blur-sm border border-white/20 overflow-hidden group">
                            <span className="relative z-10">Book a Free Site Visit</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Button>
                    </motion.div>
                    <motion.div
                        custom={1}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Button className="relative bg-gradient-to-r from-blue-600/80 to-blue-800/80 hover:from-blue-700/90 hover:to-blue-900/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg backdrop-blur-sm border border-white/20 overflow-hidden group">
                            <span className="relative z-10">Download Product Catalogue</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Button>
                    </motion.div>
                    <motion.div
                        custom={2}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Button className="relative bg-gradient-to-r from-green-500/80 to-green-700/80 hover:from-green-600/90 hover:to-green-800/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg backdrop-blur-sm border border-white/20 overflow-hidden group">
                            <span className="relative z-10">Talk to an Expert</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}