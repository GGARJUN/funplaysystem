"use client";

import React, { memo } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
    name: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phone: z.string().min(1, "Phone number is required"),
    message: z.string().optional()
});

// Predefined constants
const images = [
    "https://funplaysystems.com/images/contactbanner.jpg",
    "https://funplaysystems.com/images/CoreCraft-Cover-Image.jpg",
    "https://funplaysystems.com/images/og-banner.jpg"
];

// Animation variants (unchanged)
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
};

// Memoized FormComponent to prevent unnecessary re-renders
const FormComponent = memo(({ form }) => (
    <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-2 sm:space-y-2">
            <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="block text-xs sm:text-sm font-medium text-gray-700 ">
                                Full Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full h-12  bg-white/50 border border-gray-300/50 rounded-sm text-gray-800 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="block text-xs sm:text-sm font-medium text-gray-700 ">
                                Email Address
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full h-12 bg-white/50 border border-gray-300/50 rounded-sm text-gray-800 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                            Phone Number
                        </FormLabel>
                        <FormControl>
                            <Input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full h-12 bg-white/50 border border-gray-300/50 rounded-sm text-gray-800 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                            Message
                        </FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="Tell us about your project"
                                className="w-full  bg-white/50 border border-gray-300/50 rounded-sm text-gray-800 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all min-h-24 resize-none"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                )}
            />
            <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
            >
                <Button
                    type="submit"
                    className="w-full mt-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold h-12 rounded-sm hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transition-all text-sm sm:text-base"
                >
                    Submit Inquiry
                </Button>
            </motion.div>
        </form>
    </Form>
));
FormComponent.displayName = 'FormComponent';

export default function HeroSectionWithForm() {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

    // Initialize form with zod schema
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    });

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-black/80">
            <div className="absolute inset-0 overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    speed={1500}
                    className="w-full h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                                style={{ backgroundImage: `url('${image}')` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="relative max-w-7xl mx-auto z-10 px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-52">
                <div className="text-center lg:text-left">
                    <motion.img
                        src="https://funplaysystems.com/images/logo-white@2x.png"
                        alt="logo"
                        loading="lazy"
                        className="mx-auto lg:mx-0 mb-4 w-32 sm:w-40"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
                        variants={textVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <span className="quicksand bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">
                            Transform Your Space Into a World of Play
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-100"></span>
                    </motion.h1>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-100 max-w-xl mx-auto lg:mx-0 font-light tracking-wide"
                        variants={textVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                    >
                        Design-awarded playgrounds crafted for schools, communities, and homes across India.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10"
                        variants={textVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
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
                <div className="lg:w-[80%] w-full">
                    <motion.div
                        className="bg-gray-200 rounded-sm p-6 sm:p-8 border border-gray-300/50 shadow-2xl max-w-sm sm:max-w-4xl mx-auto lg:mx-0"
                        variants={textVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.6 }}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                            Enquire Now
                        </h2>
                        <FormComponent form={form} />
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="absolute top-1/4 left-1/4 w-10 sm:w-12 h-10 sm:h-12 border border-gray-400/20 rounded-full"
                animate={inView ? {
                    y: [0, -20, 0],
                    opacity: [0.5, 0.8, 0.5]
                } : {}}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-12 sm:w-16 h-12 sm:h-16 border-2 border-gray-400/10 rounded-full"
                animate={inView ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3]
                } : {}}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-gray-200/50 to-transparent"></div>
        </section>
    );
}