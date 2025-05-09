"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, memo } from 'react';

// Predefined constants to avoid repeated declarations
const testimonials = [
    { img: "https://funplaysystems.com/images/c1.png" },
    { img: "https://funplaysystems.com/images/c4.png" },
    { img: "https://funplaysystems.com/images/c3.png" },
    { img: "https://funplaysystems.com/images/c2.png" }
];

const reviews = [
    {
        text: "Fun Play Systems Pvt. Ltd. has been instrumental in helping us tailor our playground structures within budget while adding popular elements. Their expertise and professionalism are impressive.",
        name: "Nayan Shah",
        company: "Damji Shamji Shah Group"
    },
    {
        text: "We at Jaideep Construction have been using Fun Play Systems’ equipment for its safety, aesthetics, and durability. From product selection to after-sales service, their support has been exceptional. We highly recommend Fun Play Systems.",
        name: "Customer",
        company: "Jaideep Construction"
    },
    {
        text: "The Multi-activity design from Fun Play Systems has been a huge hit. The children enjoy the spacious, well-designed play area, which has positively impacted their outdoor play.",
        name: "Sanjay S. Deshmukh",
        company: "Urja Hospitality LLP"
    },
    {
        text: "We prioritize adding top-quality amenities that enhance the value of our projects, and the playground equipment from Funplay Systems Pvt. Ltd. has truly impressed us. The installation was efficient, and the design seamlessly integrated with our community spaces.",
        name: "Customer",
        company: "Ridhi Sidhi Developers"
    },
    {
        text: "As developers, we are always on the lookout for high-quality amenities that add value to our projects, and the playground equipment provided by Funplay Systems Pvt. Ltd. has exceeded our expectations. The installation process was seamless, and the design perfectly complements our community spaces.",
        name: "Customer",
        company: "Gami Group"
    }
];

// Optimized animation variants
const statsVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.2 } })
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.2 } }),
    hover: { y: -3, transition: { duration: 0.2 } }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8 } }
};

// Memoized ReviewCard to prevent unnecessary re-renders
const ReviewCard = memo(({ review, index }) => (
    <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
    >
        <Card className="bg-white/90 border border-gray-200/50 shadow-md rounded-lg">
            <CardContent className="p-6">
                <p className="text-gray-700 text-sm sm:text-lg mb-4">{review.text}</p>
            </CardContent>
        </Card>
        <div className="flex items-center my-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mr-3">
                <img src="https://funplaysystems.com/images/usert.png" alt="User" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
                <p className="text-gray-800 font-semibold text-sm sm:text-base">{review.name}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{review.company}</p>
            </div>
        </div>
    </motion.div>
));
ReviewCard.displayName = 'ReviewCard';

const TestimonialsSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

    // Fixed image carousel: removed unnecessary dependency array
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []); // Empty dependency array since testimonials is static

    return (
        <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 to-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 sm:mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
                    variants={headingVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    What Our Clients Say
                </motion.h2>
                <motion.div
                    className="w-32 sm:w-40 h-1 bg-gradient-to-r from-gray-900/0 via-gray-900/80 to-gray-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                    variants={dividerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                />
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16 mt-10">
                    <motion.div
                        custom={0}
                        variants={statsVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        className="flex items-center space-x-4 mb-6 sm:mb-0"
                    >
                        <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-200">
                            <motion.img
                                key={currentImageIndex}
                                src={testimonials[currentImageIndex].img}
                                alt="Client"
                                className="w-full h-full object-cover"
                                variants={imageVariants}
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h3 className="text-3xl max-w-[360px] font-bold text-gray-800">
                                Enjoyed by over <span className="text-purple-600">25,000+</span> happy customers.
                            </h3>
                        </div>
                    </motion.div>
                    <motion.div
                        custom={1}
                        variants={statsVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        className="mb-6 sm:mb-0"
                    >
                        <h3 className="text-2xl sm:text-6xl font-bold text-gray-800">200+</h3>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-48 font-semibold">Innovative design projects.</p>
                    </motion.div>
                    <motion.div
                        custom={2}
                        variants={statsVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <div className="flex flex-col justify-start items-start mb-2">
                            <h3 className="text-2xl sm:text-6xl font-bold text-gray-800">4.9</h3>
                            <span className="text-yellow-400 text-xl sm:text-2xl">★★★★★</span>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-40 font-semibold">Average client rating.</p>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;