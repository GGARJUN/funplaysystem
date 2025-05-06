"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Loader2 } from "lucide-react";
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
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const formSchema = z.object({
  fullname: z.string().min(2, "Full name must be at least 2 characters").max(100),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  email: z.string().email("Invalid email address"),
  location: z.string().min(2, "Location is required"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().optional(),
});

export default function LeadForm() {
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

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[#f8fafc] to-[#e6f0fa]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Get a Free Custom Quote in 30 Seconds
          </h2>
          <p className="text-lg text-gray-600">
            You'll hear from us within 2 hours. Includes design plan and consultation.
          </p>
        </div>

        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-6 bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">Full Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Doe" 
                        className="h-12"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">Phone / WhatsApp *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+91 9876543210" 
                        className="h-12"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">Email Address *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your@email.com" 
                        className="h-12"
                        type="email"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">City / State *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Mumbai, Maharashtra" 
                        className="h-12"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2">
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Project Type *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Residential Playground">Residential Playground</SelectItem>
                            <SelectItem value="Commercial Play Area">Commercial Play Area</SelectItem>
                            <SelectItem value="School Play System">School Play System</SelectItem>
                            <SelectItem value="Community Park">Community Park</SelectItem>
                            <SelectItem value="Custom Design">Custom Design</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="md:col-span-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project requirements..."
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Button
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold mt-4"
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
            </motion.div>

            <p className="text-center text-gray-500 text-sm">
              * We respect your privacy. Your information will not be shared.
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
}