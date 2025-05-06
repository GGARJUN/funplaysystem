"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "Schedule a Site Visit or Share Your Layout",
      desc: "Our experts evaluate your space, needs & budget to create the perfect play solution.",
      icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
      color: "from-indigo-500/10 to-indigo-600/5",
      accent: "bg-indigo-600"
    },
    {
      step: "Get a Custom Plan & Quote",
      desc: "Receive a tailored 3D design visualization and transparent cost breakdown.",
      icon: <CheckCircle className="w-8 h-8 text-pink-500" />,
      color: "from-pink-500/10 to-pink-600/5",
      accent: "bg-pink-500"
    },
    {
      step: "Installation & Ongoing Support",
      desc: "Professional installation with post-completion maintenance and warranty.",
      icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
      color: "from-emerald-500/10 to-emerald-600/5",
      accent: "bg-emerald-500"
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardItem = {
    hidden: {
      y: 60,
      opacity: 0,
      rotateX: 15,
      filter: "blur(4px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        rotateX: { duration: 0.6 }
      }
    },
    hover: {
      y: -15,
      rotateX: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  const stepBadge = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -45
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const buttonAnim = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };

  const titleAnim = {
    hidden: {
      opacity: 0,
      y: -40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-indigo-50 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmFpbiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIHNjYWxlKDAuMikiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmFpbikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-10"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-24 h-24 rounded-full border border-indigo-200/30 backdrop-blur-sm"
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/5 right-1/4 w-20 h-20 rounded-full border border-pink-200/30 backdrop-blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Ultra Headline */}
        <motion.div
          className="mb-24 text-center"
          initial="hidden"
          animate="visible"
          variants={titleAnim}
        >
          <motion.h2
            className="text-4xl md:text-5xl text-center font-bold mb-8 tracking-tight font-sans"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-black to-gray-900">
              From Concept to Joy – The FunPlay Way
            </span>
          </motion.h2>
          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Steps Cards - Ultra Design */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              whileHover="hover"
              className="perspective-1000"
            >
              <Card className={`relative bg-gradient-to-br ${item.color} backdrop-blur-lg border border-white/30 overflow-hidden group h-full shadow-xl`}>
                {/* Hover Effect Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Accent Bar */}
                <motion.div
                  className={`absolute top-0 left-0 w-1 h-full ${item.accent}`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                />

                {/* Step Number Badge */}
                <motion.div
                  variants={stepBadge}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl font-bold text-gray-900"
                >
                  {index + 1}
                </motion.div>

                <CardHeader className="pt-12 pb-4 px-8">
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {item.step}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pb-8 px-8">
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >

          <Button className="relative bg-gradient-to-r from-blue-500/20 to-blue-300/20 hover:from-blue-600/30 hover:to-blue-400/30 text-gray-900 hover:text-white rounded-full px-12 py-6 text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">Begin Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

        </motion.div>
      </div>


    </section>
  );
}