"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';

export default function TestimonialsWhiteTheme() {
    const testimonials = [
        {
            quote: 'FunPlay helped us create a magical zone for our preschool. The kids love it!',
            author: 'Sneha R., School Principal, Bengaluru',
            rating: 5
        },
        {
            quote: 'The Bellatrix unit was installed in just 4 days! Amazing support and finish.',
            author: 'Ramesh G., Society Secretary, Pune',
            rating: 5
        },
        {
            quote: 'We used Ultaghar for our mall daycare—zero complaints and full marks on design.',
            author: 'Meenal S., Interior Designer, Hyderabad',
            rating: 5
        },
        {
            quote: 'Exceptional quality and service. Our community playground is now the talk of the town!',
            author: 'Arjun M., Resident Welfare President, Delhi',
            rating: 5
        },
        {
            quote: 'Transformed our empty rooftop into a vibrant play area. Highly recommended!',
            author: 'Priya K., Hotel Manager, Goa',
            rating: 5
        }
    ];

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: 15,
            filter: "blur(4px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                rotateX: { duration: 0.6 }
            }
        },
        hover: {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    const starVariants = {
        hidden: { scale: 0 },
        visible: (i) => ({
            scale: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }),
        hover: {
            scale: 1.2,
            transition: { type: "spring", stiffness: 500 }
        }
    };

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-1/4 left-1/5 w-12 sm:w-16 h-12 sm:h-16 rounded-full border border-gray-200/30 backdrop-blur-sm"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/5 right-1/4 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-gray-200/30 backdrop-blur-sm"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 sm:mb-8 tracking-tight font-sans"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                        What Our Clients Say
                    </span>
                </motion.h2>
                <motion.div
                    className="w-32 sm:w-40 h-1 bg-gradient-to-r from-gray-900/0 via-gray-900/80 to-gray-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <div className="h-96 w-40 rounded-t-full absolute top-0 ">
                    <img src="https://img.freepik.com/free-photo/handsome-elegant-man-car-salon_1157-20995.jpg?uid=R110556143&ga=GA1.1.1013345226.1744017707&semt=ais_hybrid&w=740" alt="" className="object-cover rounded-t-full" />
                </div>
                <div className="h-96 w-40 rounded-t-full absolute -bottom-60 right-0">
                    <img src="https://img.freepik.com/free-photo/close-up-women-working-with-laptop_23-2149300684.jpg?uid=R110556143&ga=GA1.1.1013345226.1744017707&semt=ais_hybrid&w=740" alt="" className="object-cover rounded-t-full" />
                </div>

                {/* Ultra Swiper */}
                <div className="relative pt-12 sm:pt-16 md:pt-20">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet bg-gray-300',
                            bulletActiveClass: 'swiper-pagination-bullet-active bg-gray-600',
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 1 },
                            1280: { slidesPerView: 1 },
                        }}
                        className="!pb-12 sm:!pb-16 w-full"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index} className="!h-auto py-4">
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover="hover"
                                    viewport={{ once: true }}
                                    className="h-full w-full max-w-[800px] mx-auto"
                                >
                                    <Card className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 overflow-hidden group h-full shadow-md">
                                        {/* Hover Effect Layer */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 to-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Quote Icon */}
                                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-300/50 group-hover:text-gray-400/70 transition-colors duration-300">
                                            <Quote className="w-8 sm:w-12 h-8 sm:h-12" />
                                        </div>

                                        <CardHeader className="pt-8 sm:pt-10 pb-3 sm:pb-4 px-6 sm:px-8">
                                            <div className="flex mb-3 sm:mb-4">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        custom={i}
                                                        variants={starVariants}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        whileHover="hover"
                                                        viewport={{ once: true }}
                                                        className="text-yellow-400 text-lg sm:text-xl"
                                                    >
                                                        ★
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <CardTitle className="text-base sm:text-lg font-medium text-gray-800 italic leading-relaxed">
                                                “{item.quote}”
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pb-6 sm:pb-8 px-6 sm:px-8">
                                            <p className="text-gray-700 font-semibold text-sm sm:text-base">{item.author}</p>
                                        </CardContent>

                                        {/* Decorative Elements */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
                                    </Card>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="swiper-button-prev !text-gray-600 !left-0 sm:!left-2 after:!text-lg sm:after:!text-xl"></div>
                    <div className="swiper-button-next !text-gray-600 !right-0 sm:!right-2 after:!text-lg sm:after:!text-xl"></div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
        </section>
    );
}