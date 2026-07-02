"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaSwimmer, FaConciergeBell, FaGlassCheers, FaQuestionCircle, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const coverImages = [
  "/cover1.jpg",
  "/cover2.jpg",
  "/cover3.jpg",
  "/cover4.jpg",
  "/cover5.jpg",
  "/cover6.jpg",
];

const services = [
  {
    icon: FaSwimmer,
    title: "Beach & Pool",
    description: "Private beach access and stunning infinity pools overlooking the ocean.",
  },
  {
    icon: FaConciergeBell,
    title: "Luxury Suites",
    description: "Six uniquely designed suites with world-class amenities and ocean views.",
  },
  {
    icon: FaGlassCheers,
    title: "Events & Weddings",
    description: "Create unforgettable moments in our elegant venues with expert planning.",
  },
];

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 2:00 PM and check-out is until 11:00 AM. Early check-in and late check-out can be arranged upon request.",
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Yes, we provide airport transfer services. Please contact our concierge team to arrange your pickup.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer: "Yes, a complimentary breakfast is included with all room bookings at our seaside restaurant.",
  },
  {
    question: "What activities are available at the resort?",
    answer: "We offer water sports, spa treatments, guided beach walks, yoga sessions, and local excursions. Our activities desk can help you plan your days.",
  },
  {
    question: "Can I host my wedding at Seaside Resort?",
    answer: "Absolutely! Our dedicated events team specializes in creating magical wedding celebrations. Contact us to discuss your vision.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coverImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coverImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coverImages.length) % coverImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Carousel */}
        <div className="absolute inset-0">
          {coverImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`Seaside Resort ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1208]/70 to-[#1e1208]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-quattro text-[#c9b99a] text-lg md:text-xl mb-4 tracking-widest uppercase">
                Welcome to Paradise
              </p>
              <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold text-[#c9b99a] mb-6 leading-tight">
                EXPERIENCE SEASIDE<br />LUXURY
              </h1>
              <p className="font-quattro text-[#c9b99a]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Where azure waters meet pristine sands. Your escape to tranquility
                awaits at Kenya&apos;s most beautiful coastline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/accommodation">
                  <Button size="lg" className="cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90 text-[#c9b99a] px-8">
                    Book Your Stay
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="cursor-pointer border-[#c9b99a] text-[#c9b99a] hover:bg-[#c9b99a]/10 px-8">
                    Discover More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#1e1208]/50 hover:bg-[#1e1208]/70 rounded-full text-[#c9b99a] transition-colors cursor-pointer"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#1e1208]/50 hover:bg-[#1e1208]/70 rounded-full text-[#c9b99a] transition-colors cursor-pointer"
          aria-label="Next slide"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {coverImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide
                  ? "bg-[#c9b99a] w-8"
                  : "bg-[#c9b99a]/50 hover:bg-[#c9b99a]/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
              Our Services
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              EXPERIENCE LUXURY
            </h2>
            <p className="font-quattro text-[#7a5c3a] max-w-2xl mx-auto">
              From pristine beaches to world-class dining, we offer everything you
              need for an unforgettable getaway.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#7b1c3e]/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-[#7b1c3e] text-2xl" />
                </div>
                <h3 className="font-oswald text-2xl font-semibold text-[#150e08] mb-3">
                  {service.title}
                </h3>
                <p className="font-quattro text-[#7a5c3a]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/accommodation">
              <Button className="cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="py-16 bg-[#1e1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#8b6914] text-xl" />
              ))}
            </div>
            <blockquote className="font-quattro text-xl md:text-2xl text-[#c9b99a] italic max-w-3xl mx-auto mb-6">
              &quot;An absolute paradise on earth. The staff went above and beyond to
              make our anniversary celebration truly unforgettable.&quot;
            </blockquote>
            <cite className="font-oswald text-[#c9b99a]/70 not-italic">
              — Sarah & Michael Thompson, Guest Review
            </cite>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-[#f5f0e6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
              Common Questions
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              FAQ
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-oswald text-lg text-[#150e08] pr-4">
                    {faq.question}
                  </span>
                  <FaQuestionCircle
                    className={`text-[#7b1c3e] transition-transform cursor-pointer ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="font-quattro text-[#7a5c3a]">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <Button variant="outline" className="cursor-pointer border-[#7b1c3e] text-[#7b1c3e] hover:bg-[#7b1c3e]/10">
                Contact Us for More Questions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#7b1c3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#c9b99a] mb-4">
              READY FOR YOUR ESCAPE?
            </h2>
            <p className="font-quattro text-[#c9b99a]/80 text-lg mb-8 max-w-2xl mx-auto">
              Book your stay today and discover why Seaside Resort is the
              perfect destination for your next getaway.
            </p>
            <Link href="/accommodation">
              <Button size="lg" className="cursor-pointer bg-[#c9b99a] text-[#150e08] hover:bg-[#c9b99a]/90 px-8">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}