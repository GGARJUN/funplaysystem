"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.3 }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.3 }
    }),
    hover: { y: -5, transition: { duration: 0.3 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1, delay: 0.5 } }
  };

  const testimonials = [
    { img: "https://funplaysystems.com/images/c1.png" },
    { img: "https://funplaysystems.com/images/c4.png" },
    { img: "https://funplaysystems.com/images/c3.png" },
    { img: "https://funplaysystems.com/images/c2.png" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 sm:mb-8 tracking-tight font-sans"
          variants={headingVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            What Our Clients Say
          </span>
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
            <div className="relative w-16 h-16 sm:w-[160px] sm:h-40 rounded-full overflow-hidden bg-gray-200">
              <motion.img
                key={currentImageIndex}
                src={testimonials[currentImageIndex].img}
                alt="Client"
                className="w-full h-full object-cover"
                variants={imageVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Enjoyed by over <span className="text-purple-600">25,000+</span><br />
                happy customers are using our products.
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
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              200+
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-40">Projects with innovative designs.</p>
          </motion.div>

          <motion.div
            custom={2}
            variants={statsVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center">
              4.9
              <span className="ml-2 text-yellow-400">★★★★★</span>
            </h3>
            <p className="text-lg sm:text-xl max-w-40 text-gray-600">Average rating from thousands of happy clients.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover="hover"
          >
            <Card className="bg-white/90 border border-gray-200/50 shadow-md rounded-lg">
              <CardContent className="p-6">
                <p className="text-gray-700 italic text-sm sm:text-base mb-4">
                  "Fun Play Systems Pvt. Ltd. has been instrumental in helping us tailor our playground structures within budget while adding popular elements. Their expertise and professionalism are impressive."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base">Nayan Shah</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Damji Shamji Shah Group</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover="hover"
          >
            <Card className="bg-white/90 border border-gray-200/50 shadow-md rounded-lg">
              <CardContent className="p-6">
                <p className="text-gray-700 italic text-sm sm:text-base mb-4">
                  "We at Jaideep Construction have been using Fun Play Systems’ equipment for its safety, aesthetics, and durability. From product selection to after-sales service, their support has been exceptional. We highly recommend Fun Play Systems."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base">Customer</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Jaideep Construction</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover="hover"
          >
            <Card className="bg-white/90 border border-gray-200/50 shadow-md rounded-lg">
              <CardContent className="p-6">
                <p className="text-gray-700 italic text-sm sm:text-base mb-4">
                  "The Multi-activity design from Fun Play Systems has been a huge hit. The children enjoy the spacious, well-designed play area, which has positively impacted their outdoor play."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base">Sanjay S. Deshmukh</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Urja Hospitality LLP</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}