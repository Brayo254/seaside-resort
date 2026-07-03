"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "accommodation", label: "Accommodation Booking" },
  { value: "weddings", label: "Wedding Services" },
  { value: "meetings", label: "Meetings & Events" },
  { value: "dining", label: "Dining Reservations" },
  { value: "spa", label: "Spa & Wellness" },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#1e1208]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1208]/90 to-[#1e1208]/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <p className="font-quattro text-[#c9b99a] text-sm tracking-widest uppercase mb-2">
              Get in Touch
            </p>
            <h1 className="font-oswald text-4xl md:text-6xl font-bold text-[#c9b99a] mb-4">
              CONTACT US
            </h1>
            <p className="font-quattro text-[#c9b99a]/80 text-lg max-w-2xl mx-auto">
              We&apos;d love to hear from you. Reach out to plan your perfect getaway.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="font-oswald text-3xl font-bold text-[#150e08] mb-6">
                GET IN TOUCH
              </h2>
              <p className="font-quattro text-[#7a5c3a] mb-8">
                Our team is ready to assist you with any questions or to help plan
                your perfect stay at Seaside Resort.
              </p>

              <div className="grid grid-cols-2 md:flex md:flex-col gap-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7b1c3e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#7b1c3e]" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg text-[#150e08]">Location</h3>
                    <p className="font-quattro text-[#7a5c3a]">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7b1c3e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-[#7b1c3e]" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg text-[#150e08]">Email</h3>
                    <p className="font-quattro text-[#7a5c3a]">hello@seaside.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7b1c3e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-[#7b1c3e]" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg text-[#150e08]">Phone</h3>
                    <p className="font-quattro text-[#7a5c3a]">+254 719 316 562</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7b1c3e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-[#7b1c3e]" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg text-[#150e08]">Hours</h3>
                    <p className="font-quattro text-[#7a5c3a]">24/7 Guest Services</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <FaCheckCircle className="text-[#2e7d52] text-5xl mx-auto mb-4" />
                    <h3 className="font-oswald text-2xl text-[#150e08] mb-2">
                      Message Sent!
                    </h3>
                    <p className="font-quattro text-[#7a5c3a] mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="cursor-pointer"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h3 className="font-oswald text-2xl text-[#150e08] mb-6">
                      Send us a Message
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-quattro text-sm text-[#150e08] mb-2">
                          First Name
                        </label>
                        <input
                          {...register("firstName")}
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro"
                          placeholder="Enter first name"
                        />
                        {errors.firstName && (
                          <p className="text-[#b22222] text-sm mt-1 font-quattro">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block font-quattro text-sm text-[#150e08] mb-2">
                          Last Name
                        </label>
                        <input
                          {...register("lastName")}
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro"
                          placeholder="Enter last name"
                        />
                        {errors.lastName && (
                          <p className="text-[#b22222] text-sm mt-1 font-quattro">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-quattro text-sm text-[#150e08] mb-2">
                          Email
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-[#b22222] text-sm mt-1 font-quattro">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block font-quattro text-sm text-[#150e08] mb-2">
                          Phone
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro"
                          placeholder="+254 000 000 000"
                        />
                        {errors.phone && (
                          <p className="text-[#b22222] text-sm mt-1 font-quattro">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block font-quattro text-sm text-[#150e08] mb-2">
                        Service
                      </label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-3 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro bg-white"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-[#b22222] text-sm mt-1 font-quattro">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-quattro text-sm text-[#150e08] mb-2">
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                      {errors.message && (
                        <p className="text-[#b22222] text-sm mt-1 font-quattro">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}