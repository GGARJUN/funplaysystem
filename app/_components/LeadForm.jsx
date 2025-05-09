"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Loader2, User, Phone, Mail, MapPin, Building, MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useState } from "react";

const formSchema = z.object({
    fullname: z.string().min(2, "Full name must be at least 2 characters").max(100),
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
    email: z.string().email("Invalid email address"),
    location: z.string().min(2, "Location is required"),
    projectType: z.string().min(1, "Please select a project type"),
    message: z.string().optional(),
});

export default function LeadForm() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            phone: "",
            email: "",
            location: "",
            projectType: "",
            message: "",
        },
    });

    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(values) {
        setIsLoading(true);
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: values.fullname.split(' ')[0],
                    lastname: values.fullname.split(' ').slice(1).join(' ') || '',
                    email: values.email,
                    service: values.projectType,
                    message: values.message || 'No additional message provided',
                    phone: values.phone,
                    location: values.location
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            toast.success("Your request has been submitted!", {
                description: "We'll get back to you within 2 hours with your custom quote.",
            });

            form.reset();
        } catch (error) {
            console.error('Error:', error);
            toast.error("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    // Animation variants
    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const dividerVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 1,
                delay: 0.5,
                ease: "easeOut"
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50, filter: "blur(2px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
            transition: {
                duration: 0.3
            }
        },
        tap: { scale: 0.98 }
    };

    return (
        <div className="relative bg-[url('https://funplaysystems.com/images/Group77.svg')] bg-blue-200/20 bg-no-repeat bg-cover">
            <section ref={ref} className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">

                {/* Floating Elements */}
                <motion.div
                    className="absolute top-1/4 left-1/5 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-br from-blue-300/10 to-transparent blur-xl"
                    animate={inView ? {
                        y: [0, -30, 0],
                        opacity: [0.2, 0.4, 0.2],
                    } : {}}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/5 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-blue-300/10 to-transparent blur-xl"
                    animate={inView ? {
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.4, 0.2],
                    } : {}}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
                            variants={headingVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
                                Get a Free Custom Quote in 30 Seconds
                            </span>

                        </motion.h2>
                        <motion.div
                            className="w-32 sm:w-40 h-1 bg-gradient-to-r from-gray-300/0 via-gray-600/80 to-gray-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                            variants={dividerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        />
                    </div>

                    <Form {...form}>
                        <motion.form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6 bg-gray-50 backdrop-blur-xl rounded-xl shadow-lg p-6 md:p-10 border border-gray-200/50 relative overflow-hidden"
                            variants={formVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="fullname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                                <User className="w-5 h-5 text-gray-600" />
                                                Full Name *
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="John Doe"
                                                    className="h-16  bg-white text-gray-800 border-gray-300 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                                <Phone className="w-5 h-5 text-gray-600" />
                                                Phone / WhatsApp *
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="+91 9876543210"
                                                    className="h-16  bg-white text-gray-800 border-gray-300 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                                <Mail className="w-5 h-5 text-gray-600" />
                                                Email Address *
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="your@email.com"
                                                    type="email"
                                                    className="h-16  bg-white text-gray-800 border-gray-300 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                                <MapPin className="w-5 h-5 text-gray-600" />
                                                City / State *
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Mumbai, Maharashtra"
                                                    className="h-16  bg-white text-gray-800 border-gray-300 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="projectType"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2">
                                            <FormLabel className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                                <Building className="w-5 h-5 text-gray-600" />
                                                Project Type *
                                            </FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-16 py-8 w-full bg-white text-gray-800 border-gray-300 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm">
                                                        <SelectValue placeholder="Select project type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="bg-white border-gray-300 text-gray-800">
                                                    <SelectGroup>
                                                        <SelectItem value="Residential Playground">Residential Playground</SelectItem>
                                                        <SelectItem value="Commercial Play Area">Commercial Play Area</SelectItem>
                                                        <SelectItem value="School Play System">School Play System</SelectItem>
                                                        <SelectItem value="Community Park">Community Park</SelectItem>
                                                        <SelectItem value="Custom Design">Custom Design</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2">
                                            <FormLabel className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                                <MessageSquare className="w-5 h-5 text-gray-600" />
                                                Message (Optional)
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your project requirements..."
                                                    className="min-h-32 bg-white text-gray-800 border-gray-300 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="relative"
                            >
                                <Button
                                    type="submit"
                                    className="w-full h-16 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <>
                                            Send Me the Quote
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </Button>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>

                            <p className="text-center text-gray-600 text-sm mt-4">
                                * We respect your privacy. Your information will not be shared.
                            </p>
                        </motion.form>
                    </Form>
                </div>
            </section>
        </div>
    );
}