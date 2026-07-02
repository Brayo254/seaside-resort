"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaGlassCheers, FaUtensils, FaMusic, FaCamera, FaLeaf, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: FaGlassCheers,
    title: "Reception Venues",
    description: "Choose from our beachfront terrace, garden pavilion, or elegant ballroom - each offering stunning ocean views.",
  },
  {
    icon: FaUtensils,
    title: "Catering",
    description: "Our expert chefs craft personalized menus celebrating local flavors with international flair.",
  },
  {
    icon: FaMusic,
    title: "Entertainment",
    description: "From live bands to DJs, we coordinate entertainment that keeps your guests dancing all night.",
  },
  {
    icon: FaCamera,
    title: "Photography",
    description: "Our preferred photographers capture every magical moment against our breathtaking backdrop.",
  },
];

const testimonials = [
  {
    quote: "Seaside Resort made our wedding day absolutely magical. The team went above and beyond to make our vision come true.",
    couple: "Amara & David",
    location: "Married March 2024",
  },
  {
    quote: "From the first site visit, we knew this was the place. Our guests are still talking about the celebration months later.",
    couple: "Sophie & James",
    location: "Married November 2023",
  },
  {
    quote: "The attention to detail was incredible. Every moment felt personal and special. We couldn't have asked for more.",
    couple: "Grace & Michael",
    location: "Married February 2024",
  },
];

const faqs = [
  {
    question: "What is the maximum guest capacity for weddings?",
    answer:
      "Our venues can accommodate from intimate gatherings of 20 guests to grand celebrations of up to 300 guests. We offer flexible seating arrangements to suit your vision.",
  },
  {
    question: "Do you offer wedding planning services?",
    answer:
      "Yes! Our experienced wedding coordinators are included in our packages. They'll guide you through every step, from venue selection to the final dance.",
  },
  {
    question: "Can we bring our own vendors?",
    answer:
      "We have a curated list of preferred vendors, but you're welcome to bring your own. Our team will work with you to ensure all vendors meet our quality standards.",
  },
  {
    question: "What is the deposit and payment schedule?",
    answer:
      "We require a 25% deposit to secure your date, with the remaining balance due 30 days before your event. We offer flexible payment plans for added convenience.",
  },
  {
    question: "Is accommodation available for wedding guests?",
    answer:
      "Absolutely! We offer special rates for wedding guests and can block rooms in advance. Many couples choose to make it a destination wedding weekend.",
  },
];

export default function WeddingsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/wedding1.jpg"
          alt="Seaside Wedding"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1208]/80 to-[#1e1208]/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <p className="font-quattro text-[#c9b99a] text-sm tracking-widest uppercase mb-2">
              Say &quot;I Do&quot; in Paradise
            </p>
            <h1 className="font-oswald text-4xl md:text-6xl font-bold text-[#c9b99a] mb-4">
              WEDDINGS
            </h1>
            <p className="font-quattro text-[#c9b99a]/80 text-lg max-w-2xl mx-auto">
              Create forever memories at Kenya&apos;s most romantic beachfront venue
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
                Your Dream Wedding
              </p>
              <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-6">
                WHERE LOVE MEETS THE SEA
              </h2>
              <p className="font-quattro text-[#7a5c3a] mb-4">
                Imagine exchanging vows with the Indian Ocean as your witness. At
                Seaside Resort, we transform your wedding day into a dream come
                true.
              </p>
              <p className="font-quattro text-[#7a5c3a] mb-6">
                Our dedicated wedding team has orchestrated hundreds of celebrations,
                each as unique as the couple it celebrates. From intimate beach
                ceremonies to grand ballroom receptions, we bring your vision to
                life with meticulous attention to every detail.
              </p>
              <div className="flex items-center gap-2 text-[#7b1c3e]">
                <FaHeart />
                <span className="font-quattro">Voted Kenya&apos;s Best Wedding Venue 2024</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/wedding2.jpg"
                alt="Wedding Ceremony"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
              What We Offer
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              WEDDING SERVICES
            </h2>
            <p className="font-quattro text-[#7a5c3a] max-w-2xl mx-auto">
              Everything you need for your perfect day, all under one roof
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-14 h-14 bg-[#7b1c3e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-[#7b1c3e] text-xl" />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-[#150e08] mb-2">
                  {feature.title}
                </h3>
                <p className="font-quattro text-sm text-[#7a5c3a]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#1e1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#c9b99a] mb-4">
              GALLERY
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden"
            >
              <Image
                src="/wedding1.jpg"
                alt="Wedding Image 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden"
            >
              <Image
                src="/wedding2.jpg"
                alt="Wedding Image 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden"
            >
              <Image
                src="/wedding3.jpg"
                alt="Wedding Image 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
              Love Stories
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              COUPLE TESTIMONIALS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f5f0e6] p-8 rounded-lg"
              >
                <FaHeart className="text-[#7b1c3e] text-2xl mb-4" />
                <p className="font-quattro text-[#7a5c3a] italic mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-oswald text-[#150e08] font-semibold">
                    {testimonial.couple}
                  </p>
                  <p className="font-quattro text-sm text-[#7a5c3a]">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/cover6.jpg"
                alt="Sustainable Wedding"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FaLeaf className="text-[#2e7d52]" />
                <span className="font-quattro text-[#2e7d52] text-sm tracking-widest uppercase">
                  Eco-Conscious
                </span>
              </div>
              <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-6">
                SUSTAINABLE CELEBRATIONS
              </h2>
              <p className="font-quattro text-[#7a5c3a] mb-4">
                We&apos;re committed to making your special day kind to the planet. Our
                sustainable wedding program includes locally sourced flowers,
                eco-friendly décor, and minimal waste practices.
              </p>
              <p className="font-quattro text-[#7a5c3a] mb-6">
                Ask about our green wedding package and receive special benefits for
                choosing an eco-conscious celebration.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="cursor-pointer border-[#2e7d52] text-[#2e7d52] hover:bg-[#2e7d52]/10">
                  Learn About Green Weddings
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
              Common Questions
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              WEDDING FAQ
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
                className="bg-[#f5f0e6] rounded-lg overflow-hidden cursor-pointer"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-oswald text-lg text-[#150e08] pr-4">
                    {faq.question}
                  </span>
                  <FaChevronRight
                    className={`text-[#7b1c3e] transition-transform cursor-pointer flex-shrink-0 ${
                      openFaq === index ? "rotate-90" : ""
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#7b1c3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaHeart className="text-[#c9b99a] text-4xl mx-auto mb-4" />
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#c9b99a] mb-4">
              LET&apos;S PLAN YOUR PERFECT DAY
            </h2>
            <p className="font-quattro text-[#c9b99a]/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our wedding team and start planning the
              celebration of your dreams.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer bg-[#c9b99a] text-[#150e08] hover:bg-[#c9b99a]/90 px-8"
              >
                Start Planning
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}