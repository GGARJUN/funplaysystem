"use client";
import { motion } from "framer-motion";
import { Users, Lightbulb, UserCheck, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import WhyWorkSlider from "./WhyWorkSlider";

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -10 },
    visible: { opacity: 0.7, scale: 2, rotate: 0, transition: { duration: 0.9, ease: "easeOut" } },
    hover: { opacity: 1 }
};

const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 120, damping: 15, mass: 0.8 } },
    hover: { y: -10, scale: 1.03, rotateX: 5, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3 } }
};

const glowVariants = {
    animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }
};

const features = [
    { link: "/", icon: <Users className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/17378/17378291.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Schools & Daycares", description: "Safe, durable, and age-appropriate.", image: "https://img.freepik.com/free-photo/full-shot-kids-sitting-together-table_23-2149355252.jpg?uid=R110556143&ga=GA1.1.1013345226.1744017707&semt=ais_hybrid&w=740" },
    { link: "/", icon: <Lightbulb className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/1087/1087815.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Residential Societies", description: "Boost community engagement.", image: "https://img.freepik.com/free-photo/set-designer-work-indoors_23-2149836942.jpg?uid=R110556143&ga=GA1.1.1013345226.1744017707&semt=ais_hybrid&w=740" },
    { link: "/", icon: <UserCheck className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/4658/4658169.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Public Parks & Urban Spaces", description: "Inclusive and compliant.", image: "https://img.freepik.com/free-photo/young-father-pointing-something-his-partner_1157-1053.jpg?uid=R110556143&ga=GA1.1.1013345226.1744017707&semt=ais_hybrid&w=740" },
    { link: "/", icon: <Shield className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/18716/18716482.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Builders & Architects", description: "Custom-built to specification", image: "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?uid=R110556143&ga=GA1.1.1013345226.1744017707&semt=ais_hybrid&w=740" }
];

const New = () => (
    <section style={{ backgroundImage: "url('https://img.freepik.com/free-photo/two-little-girls-happy-jump-nature-park_1150-4160.jpg?uid=R110556143&ga=GA1.1.1013345226.1744017707&semt=ais_hybrid&w=740')" }} className="py-16  bg-cover overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black/20"></div>
        <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent" variants={glowVariants} animate="animate" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8 tracking-tight font-sans"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-white to-gray-100">
                    Playgrounds That Fit Every Vision
                </span>
            </motion.h2>
            <motion.div
                className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-100/80 to-indigo-300/0 mx-auto mt-8 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="rounded-lg mb-6 md:mb-0 col-span-12 xl:col-span-4">
                    <WhyWorkSlider />
                </div>
                <div className="col-span-12 xl:col-span-8">
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature) => (
                            <motion.div key={feature.title} variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
                                <motion.div variants={imageVariants} className="absolute inset-0 z-0 opacity-50 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                                    <img loading="lazy" src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
                                </motion.div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-5">
                                        <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                            <img loading="lazy" src={feature.img} alt={feature.title} className="w-12" />
                                        </motion.div>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300 line-clamp-1">{feature.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">{feature.description}</p>
                                    <div className="flex items-center gap-3 transition-colors duration-300 mt-6">
                                        <Link href={feature.link}>
                                            <motion.div variants={{ hover: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }, initial: { x: -20, opacity: 0 } }}>
                                                <motion.button className="text-sm font-medium text-white">Learn More</motion.button>
                                            </motion.div>
                                        </Link>
                                        <motion.div className="h-5 w-5 text-black">
                                            <ArrowRight className="h-5 w-5 group-hover:text-white -translate-x-20 -z-50 group-hover:translate-x-0 transition-all duration-300" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white p-6 mt-5 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
                        <motion.div variants={imageVariants} className="absolute inset-0 z-0 opacity-50 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                            <img loading="lazy" src="https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694017.jpg?uid=R110556143&ga=GA1.1.1013345226.1744017707&semt=ais_hybrid&w=740" alt="img" className="w-full h-full object-cover rounded-xl" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
                        </motion.div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-5">
                                <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                    <img loading="lazy" src="https://cdn-icons-png.freepik.com/256/18716/18716482.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="img" className="w-12" />
                                </motion.div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300 line-clamp-1">Private Homes</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">Tailored play for your backyard</p>
                            <div className="flex items-center gap-3 transition-colors duration-300 mt-6">
                                <Link href={"/"} >
                                    <motion.div variants={{ hover: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }, initial: { x: -20, opacity: 0 } }}>
                                        <motion.button className="text-sm font-medium text-white">Learn More</motion.button>
                                    </motion.div>
                                </Link>
                                <motion.div className="h-5 w-5 text-black">
                                    <ArrowRight className="h-5 w-5 group-hover:text-white -translate-x-20 -z-50 group-hover:translate-x-0 transition-all duration-300" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    </section>
);
export default New;