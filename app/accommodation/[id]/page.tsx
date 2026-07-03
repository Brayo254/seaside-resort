"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaUser,
  FaCheck,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { rooms, roomFaqs, Room } from "@/app/data/rooms";

export default function RoomDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const roomId = parseInt(params.id as string);
  const room: Room | undefined = rooms.find((r) => r.id === roomId);
  const faqs = room ? roomFaqs[room.id] : [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [roomId]);

  if (!room) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#f5f0e6]">
        <div className="text-center">
          <h1 className="font-oswald text-4xl text-[#150e08] mb-4">
            Room Not Found
          </h1>
          <p className="font-quattro text-[#7a5c3a] mb-8">
            The room you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button
            onClick={() => router.push("/accommodation")}
            className="cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90"
          >
            Back to Accommodation
          </Button>
        </div>
      </div>
    );
  }

  const handleBookRoom = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/cover1.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1208]/80 to-[#1e1208]/40" />
        <div className="absolute top-20 left-4 md:left-8 z-20">
          <button
            onClick={() => router.push("/accommodation")}
            className="flex items-center gap-2 text-[#c9b99a] hover:text-white transition-colors cursor-pointer"
          >
            <FaArrowLeft />
            <span className="font-quattro">Back to Rooms</span>
          </button>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <p className="font-quattro text-[#c9b99a] text-sm tracking-widest uppercase mb-2">
              Room Details
            </p>
            <h1 className="font-oswald text-4xl md:text-6xl font-bold text-[#c9b99a] mb-4">
              {room.name.toUpperCase()}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < 4 ? "text-[#8b6914]" : "text-[#c9b99a]/30"
                    }`}
                  />
                ))}
              </span>
              <span className="font-quattro text-[#c9b99a]/80 text-sm">
                Premium Suite
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${room.id}-${currentImage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={room.images[currentImage] || room.images[0]}
                  alt={`${room.name} - Image ${currentImage + 1}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/cover1.jpg";
                  }}
                />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={() => {
                setCurrentImage(
                  currentImage === 0 ? room.images.length - 1 : currentImage - 1
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#1e1208]/50 hover:bg-[#1e1208]/70 rounded-full text-white cursor-pointer transition-colors"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={() => {
                setCurrentImage((currentImage + 1) % room.images.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#1e1208]/50 hover:bg-[#1e1208]/70 rounded-full text-white cursor-pointer transition-colors"
            >
              <FaChevronRight className="text-xl" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {room.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => setCurrentImage(imgIndex)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                    imgIndex === currentImage
                      ? "bg-white scale-110"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Overview */}
      <section className="py-8 md:py-12 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-oswald text-2xl md:text-3xl font-bold text-[#150e08] mb-4">
                  About This Room
                </h2>
                <p className="font-quattro text-[#7a5c3a] text-lg leading-relaxed mb-6">
                  {room.longDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-8"
              >
                <h3 className="font-oswald text-xl font-bold text-[#150e08] mb-4">
                  Room Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm"
                    >
                      <FaCheck className="text-[#7b1c3e] flex-shrink-0" />
                      <span className="font-quattro text-[#7a5c3a] text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8"
              >
                <h3 className="font-oswald text-xl font-bold text-[#150e08] mb-4">
                  Amenities
                </h3>
                <div className="flex flex-wrap gap-3">
                  {room.amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <span
                        key={index}
                        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-quattro text-[#7a5c3a]"
                      >
                        <span className="text-[#7b1c3e]">
                          <Icon />
                        </span>
                        {amenity.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl p-6 sticky top-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-quattro text-sm text-[#7a5c3a] tracking-widest uppercase">
                    Room {room.id}
                  </span>
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xs ${
                          i < 4 ? "text-[#8b6914]" : "text-[#c9b99a]/30"
                        }`}
                      />
                    ))}
                  </span>
                </div>

                <h3 className="font-oswald text-2xl font-bold text-[#150e08] mb-2">
                  {room.name}
                </h3>

                <div className="border-t border-b border-[#c9b99a]/30 py-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-[#7a5c3a]" />
                      <span className="font-quattro text-[#7a5c3a]">
                        Up to {room.maxPeople} guests
                      </span>
                    </div>
                    <span className="font-quattro text-[#7a5c3a]">
                      {room.roomSize}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-quattro text-[#7a5c3a]">
                      Bed: {room.bedType}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="font-oswald text-4xl font-bold text-[#150e08]">
                    ${room.price}
                  </span>
                  <span className="font-quattro text-[#7a5c3a]"> / night</span>
                </div>

                <div className="space-y-3">
                  <p className="font-quattro text-xs text-[#7a5c3a]">
                    <span className="font-semibold">Smoking:</span>{" "}
                    {room.smokingPolicy}
                  </p>
                  <p className="font-quattro text-xs text-[#7a5c3a]">
                    <span className="font-semibold">Cancellation:</span>{" "}
                    {room.cancellationPolicy}
                  </p>
                </div>

                {bookingSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-center"
                  >
                    <p className="font-quattro text-green-700 font-semibold">
                      Booking Request Received!
                    </p>
                    <p className="font-quattro text-green-600 text-sm mt-1">
                      Our team will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <Button
                    onClick={handleBookRoom}
                    className="w-full mt-6 cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90 text-lg py-6"
                  >
                    Book This Room
                  </Button>
                )}

                <p className="font-quattro text-xs text-[#7a5c3a] text-center mt-4">
                  Free breakfast included
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Room FAQ */}
      {faqs.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-oswald text-2xl md:text-3xl font-bold text-[#150e08] mb-2">
                Frequently Asked Questions
              </h2>
              <p className="font-quattro text-[#7a5c3a]">
                Common questions about this room
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-[#c9b99a]/30 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 text-left cursor-pointer hover:bg-[#f5f0e6] transition-colors"
                  >
                    <span className="font-oswald text-[#150e08] pr-4">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <FaChevronUp className="text-[#7b1c3e] flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-[#7b1c3e] flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4">
                          <p className="font-quattro text-[#7a5c3a]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-[#7b1c3e]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-oswald text-2xl md:text-3xl font-bold text-[#c9b99a] mb-3">
              READY TO EXPERIENCE LUXURY?
            </h2>
            <p className="font-quattro text-[#c9b99a]/80 mb-6">
              Book this room today and create unforgettable memories at Seaside
              Resorts.
            </p>
            <Button
              onClick={handleBookRoom}
              size="lg"
              className="cursor-pointer bg-[#c9b99a] text-[#150e08] hover:bg-[#c9b99a]/90 px-8"
            >
              Book This Room
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}