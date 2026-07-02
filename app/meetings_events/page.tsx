"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaVideo,
  FaUtensils,
  FaCoffee,
  FaChevronRight,
  FaMapMarkerAlt,
  FaLaptop,
  FaMicrophone,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const venues = [
  {
    name: "Ocean View Ballroom",
    capacity: 300,
    size: "500 sq meters",
    description:
      "Our flagship venue features floor-to-ceiling windows with panoramic ocean views, perfect for grand conferences and gala dinners.",
    image: "/meeting1.jpg",
  },
  {
    name: "Garden Pavilion",
    capacity: 150,
    size: "250 sq meters",
    description:
      "A serene space surrounded by tropical gardens, ideal for team building events and outdoor receptions.",
    image: "/meeting2.jpg",
  },
  {
    name: "Boardroom Suite",
    capacity: 20,
    size: "50 sq meters",
    description:
      "An intimate executive meeting room with state-of-the-art technology and comfortable leather seating.",
    image: "/meeting3.jpg",
  },
];

const services = [
  {
    icon: FaChalkboardTeacher,
    title: "Team Building",
    description:
      "Curated activities from beach Olympics to treasure hunts, designed to strengthen team bonds.",
  },
  {
    icon: FaVideo,
    title: "Virtual Events",
    description:
      "Full hybrid event capabilities with professional streaming setup and technical support.",
  },
  {
    icon: FaUtensils,
    title: "Catering",
    description:
      "Custom menus from coffee breaks to gala dinners, with options for all dietary requirements.",
  },
  {
    icon: FaLaptop,
    title: "Technology",
    description:
      "High-speed WiFi, video conferencing, presentation equipment, and dedicated tech support.",
  },
];

const packages = [
  {
    name: "Day Delegate",
    price: 85,
    description: "Perfect for day-long meetings",
    features: [
      "Meeting room rental (8 hours)",
      "Morning and afternoon tea/coffee",
      "Lunch buffet",
      "Basic AV equipment",
      "WiFi access",
    ],
  },
  {
    name: "Residential",
    price: 250,
    description: "All-inclusive experience",
    features: [
      "Luxury accommodation",
      "All meals included",
      "Meeting room rental (full day)",
      "Team building activity",
      "Full AV equipment",
      "Dedicated event coordinator",
    ],
  },
  {
    name: "Executive",
    price: 450,
    description: "Premium corporate experience",
    features: [
      "Suite accommodation",
      "All meals plus premium drinks",
      "Private meeting room",
      "Personal assistant",
      "Airport transfers",
      "Custom team building",
    ],
  },
];

const faqs = [
  {
    question: "What is the minimum and maximum group size?",
    answer:
      "We welcome groups from 10 to 300 delegates. Our flexible spaces can be configured to suit intimate strategy sessions or large-scale conferences.",
  },
  {
    question: "Do you offer custom team building activities?",
    answer:
      "Absolutely! We work with professional facilitators to create custom team building programs tailored to your organization&apos;s goals and culture.",
  },
  {
    question: "What AV equipment is available?",
    answer:
      "All venues include projectors, screens, sound systems, and high-speed WiFi. We also offer video conferencing solutions, polling technology, and live streaming capabilities.",
  },
  {
    question: "Can you accommodate dietary requirements?",
    answer:
      "Yes, our culinary team can accommodate all dietary needs including vegetarian, vegan, gluten-free, halal, and kosher. We&apos;ll work with you to create customized menus.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 14 days before the event receive a full refund. Within 14 days, deposits are non-refundable but may be credited to a future booking.",
  },
];

export default function MeetingsEventsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/meeting1.jpg"
          alt="Corporate Events at Seaside"
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
              Business Meets Paradise
            </p>
            <h1 className="font-oswald text-4xl md:text-6xl font-bold text-[#c9b99a] mb-4">
              MEETINGS & EVENTS
            </h1>
            <p className="font-quattro text-[#c9b99a]/80 text-lg max-w-2xl mx-auto">
              Inspire your team with productive meetings in stunning coastal
              surroundings
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
                Corporate Retreats
              </p>
              <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-6">
                WORK BETTER TOGETHER
              </h2>
              <p className="font-quattro text-[#7a5c3a] mb-4">
                Escape the conference room and bring your team to Seaside Resort.
                Our beautiful coastal setting creates the perfect environment for
                creativity, connection, and productive collaboration.
              </p>
              <p className="font-quattro text-[#7a5c3a] mb-6">
                From strategic planning sessions to annual getaways, we provide
                everything needed for successful corporate events. Our dedicated
                events team ensures every detail is handled so you can focus on
                what matters most.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#7b1c3e]" />
                  <span className="font-quattro text-[#7a5c3a]">Up to 300 guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#7b1c3e]" />
                  <span className="font-quattro text-[#7a5c3a]">3 dedicated venues</span>
                </div>
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
                src="/meeting2.jpg"
                alt="Team Building Event"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 md:py-28 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
              Our Spaces
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              VENUES
            </h2>
            <p className="font-quattro text-[#7a5c3a] max-w-2xl mx-auto">
              Three distinctive spaces designed to host events of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-oswald text-xl text-[#150e08] mb-2">
                    {venue.name}
                  </h3>
                  <p className="font-quattro text-sm text-[#7a5c3a] mb-3">
                    {venue.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm font-quattro text-[#7a5c3a]">
                    <span className="flex items-center gap-1">
                      <FaUsers /> {venue.capacity} guests
                    </span>
                    <span>{venue.size}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
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
              EVENT SERVICES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-[#7b1c3e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-[#7b1c3e] text-xl" />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-[#150e08] mb-2">
                  {service.title}
                </h3>
                <p className="font-quattro text-sm text-[#7a5c3a]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
              Pricing
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              PACKAGES
            </h2>
            <p className="font-quattro text-[#7a5c3a] max-w-2xl mx-auto">
              Transparent pricing for every type of corporate event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="font-oswald text-xl text-[#150e08] mb-2">
                  {pkg.name}
                </h3>
                <p className="font-quattro text-sm text-[#7a5c3a] mb-4">
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span className="font-oswald text-4xl font-bold text-[#150e08]">
                    ${pkg.price}
                  </span>
                  <span className="font-quattro text-[#7a5c3a]"> / person</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-quattro text-sm text-[#7a5c3a]"
                    >
                      <FaChevronRight className="text-[#7b1c3e] text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full cursor-pointer border-[#7b1c3e] text-[#7b1c3e] hover:bg-[#7b1c3e]/10"
                >
                  Request Quote
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#1e1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <FaMicrophone className="text-[#8b6914] text-3xl mx-auto mb-6" />
            <blockquote className="font-quattro text-xl md:text-2xl text-[#c9b99a] italic mb-6">
              &quot;Our annual strategy retreat at Seaside Resort was the most
              productive we've ever had. The team returned energized and aligned.
              The combination of excellent facilities and inspiring surroundings
              made all the difference.&quot;
            </blockquote>
            <cite className="font-oswald text-[#c9b99a]/70 not-italic block">
              — Regional Director, Tech Solutions Ltd
            </cite>
          </motion.div>
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
              MEETINGS FAQ
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
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#c9b99a] mb-4">
              PLAN YOUR CORPORATE EVENT
            </h2>
            <p className="font-quattro text-[#c9b99a]/80 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our events team to start planning your successful
              corporate retreat.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer bg-[#c9b99a] text-[#150e08] hover:bg-[#c9b99a]/90 px-8"
              >
                Request Proposal
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}