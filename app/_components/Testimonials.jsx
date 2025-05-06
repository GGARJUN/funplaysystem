"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';

export default function Testimonials() {
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
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
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
    <section className="py-24 bg-gradient-to-b from-[#b3e0f5] to-[#e6f5fc] relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-16 h-16 rounded-full border border-blue-200/30 backdrop-blur-sm"
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
        className="absolute bottom-1/5 right-1/4 w-12 h-12 rounded-full border border-blue-200/30 backdrop-blur-sm"
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

      <div className="relative ">
        <motion.h2
          className="text-4xl md:text-5xl text-center font-bold mb-8 tracking-tight font-sans"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-black to-gray-900">
          What Our Clients Say 
          </span>
        </motion.h2>
        <motion.div
          className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Ultra Swiper */}
        <div className="relative px-8 w-full pt-20">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-blue-300',
              bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-600',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
            className="!pb-16 w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto py-4">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="h-full w-[500px]"
                >
                  <Card className="relative bg-white/95 backdrop-blur-md border border-blue-100/50 overflow-hidden group h-full shadow-lg">
                    {/* Hover Effect Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-blue-200/50 group-hover:text-blue-300/70 transition-colors duration-300">
                      <Quote className="w-12 h-12" />
                    </div>

                    <CardHeader className="pt-10 pb-4 px-8">
                      <div className="flex mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={starVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="text-yellow-400"
                          >
                            ★
                          </motion.div>
                        ))}
                      </div>
                      <CardTitle className="text-lg font-medium text-gray-700 italic leading-relaxed">
                        “{item.quote}”
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-8 px-8">
                      <p className="text-blue-800 font-semibold">{item.author}</p>
                    </CardContent>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="swiper-button-prev !text-blue-600 !left-0 after:!text-xl"></div>
          <div className="swiper-button-next !text-blue-600 !right-0 after:!text-xl"></div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#e6f5fc] to-transparent pointer-events-none"></div>
    </section>
  );
}