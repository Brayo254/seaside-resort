"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward, FaHeart, FaLeaf, FaUsers } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    icon: FaHeart,
    title: "Passion for Hospitality",
    description: "Every guest is family. We pour our hearts into creating memorable experiences.",
  },
  {
    icon: FaLeaf,
    title: "Sustainable Luxury",
    description: "We honor our beautiful coastline through eco-conscious practices and conservation.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    description: "From our amenities to our service, we strive for excellence in everything we do.",
  },
  {
    icon: FaUsers,
    title: "Community",
    description: "We believe in building lasting relationships with our guests and local community.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Seaside Resort opened its doors with 20 rooms and a dream to transform Kenya's hospitality scene.",
  },
  {
    year: "2020",
    title: "Expansion",
    description: "Added our signature wedding venue and expanded to 40 luxury suites.",
  },
  {
    year: "2022",
    title: "Recognition",
    description: "Received the prestigious Kenya Tourism Board Excellence Award.",
  },
  {
    year: "2024",
    title: "New Horizons",
    description: "Launched our meetings and events division, becoming a premier destination for corporate retreats.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/cover3.jpg"
          alt="Seaside Resort Aerial View"
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
              Our Story
            </p>
            <h1 className="font-oswald text-4xl md:text-6xl font-bold text-[#c9b99a] mb-4">
              ABOUT SEASIDE
            </h1>
            <p className="font-quattro text-[#c9b99a]/80 text-lg max-w-2xl mx-auto">
              A legacy of luxury on Kenya&apos;s most beautiful coastline
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
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
                Since 2018
              </p>
              <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-6">
                CREATING MEMORIES
              </h2>
              <p className="font-quattro text-[#7a5c3a] mb-4">
                Seaside Resort was born from a simple vision: to create a haven where
                nature&apos;s beauty meets unparalleled luxury. Nestled along Kenya&apos;s
                pristine coastline, our resort offers an escape from the ordinary.
              </p>
              <p className="font-quattro text-[#7a5c3a] mb-6">
                What started as a small family venture has grown into one of Kenya&apos;s
                most sought-after destinations. Every detail of our property reflects
                our commitment to excellence and our deep love for our coastal home.
              </p>
              <p className="font-quattro text-[#7a5c3a]">
                We invite you to experience the warmth of Kenyan hospitality, the
                serenity of ocean breezes, and the luxury of truly exceptional service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/cover5.jpg"
                alt="Seaside Resort Beach"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              What Drives Us
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              OUR VALUES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-14 h-14 bg-[#7b1c3e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-[#7b1c3e] text-xl" />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-[#150e08] mb-2">
                  {value.title}
                </h3>
                <p className="font-quattro text-sm text-[#7a5c3a]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
              Our Journey
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              MILESTONES
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#c9b99a]/30 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-left mb-4 md:mb-0 md:px-8">
                    <div className={`${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <span className="font-oswald text-[#7b1c3e] text-2xl font-bold">
                        {item.year}
                      </span>
                      <h3 className="font-oswald text-xl text-[#150e08] mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="font-quattro text-[#7a5c3a]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#7b1c3e] rounded-full z-10 flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1e1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#c9b99a] mb-4">
              JOIN OUR STORY
            </h2>
            <p className="font-quattro text-[#c9b99a]/80 text-lg mb-8 max-w-2xl mx-auto">
              Experience the Seaside magic firsthand. Book your stay and become
              part of our growing family of cherished guests.
            </p>
            <Link href="/accommodation">
              <Button className="cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90">
                Book Your Stay
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}