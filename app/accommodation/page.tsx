"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaStar,
  FaCheck,
  FaWifi,
  FaSwimmer,
  FaCoffee,
  FaTv,
  FaSnowflake,
  FaBath,
  FaWineGlass,
  FaUtensils,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const bookingSchema = z.object({
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  adults: z.number().min(1, "At least 1 adult required"),
  children: z.number().min(0),
  rooms: z.number().min(1, "At least 1 room required"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  maxPeople: number;
  amenities: { name: string; icon: React.ComponentType }[];
  images: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Ocean View Suite",
    description:
      "Wake up to breathtaking ocean views in this spacious suite featuring a private balcony, luxurious bedding, and elegant furnishings designed for ultimate relaxation.",
    price: 350,
    maxPeople: 2,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Ocean View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "En-suite Bath", icon: FaBath },
    ],
    images: ["/room1a.jpg", "/room1b.jpg", "/room1c.jpg"],
  },
  {
    id: 2,
    name: "Beachfront Villa",
    description:
      "Step directly onto pristine sands from your private villa. Features a separate living area, outdoor shower, and personalized butler service for the discerning guest.",
    price: 550,
    maxPeople: 4,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Beach Access", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "Private Pool", icon: FaSwimmer },
      { name: "Minibar", icon: FaWineGlass },
      { name: "Butler Service", icon: FaUser },
    ],
    images: ["/room2a.jpg", "/room2b.jpg", "/room2c.jpg"],
  },
  {
    id: 3,
    name: "Garden Paradise Room",
    description:
      "Nestled among tropical gardens, this room offers tranquility and privacy. Features a queen-sized bed, modern bathroom, and peaceful garden views.",
    price: 220,
    maxPeople: 2,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Garden View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
    ],
    images: ["/room3a.jpg", "/room3b.jpg", "/room3c.jpg"],
  },
  {
    id: 4,
    name: "Family Suite",
    description:
      "Spacious suite perfect for families. Includes a master bedroom, children's area, kitchenette, and large balcony with partial ocean views.",
    price: 450,
    maxPeople: 5,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Ocean View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "Kitchenette", icon: FaUtensils },
      { name: "Kids Area", icon: FaUser },
    ],
    images: ["/room4a.jpg", "/room4b.jpg", "/room4c.jpg"],
  },
  {
    id: 5,
    name: "Honeymoon Suite",
    description:
      "Celebrate love in our most romantic suite. Features a four-poster bed, private jacuzzi, champagne service, and stunning sunset views from the terrace.",
    price: 750,
    maxPeople: 2,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Ocean View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "Private Jacuzzi", icon: FaBath },
      { name: "Champagne Service", icon: FaWineGlass },
      { name: "Butler Service", icon: FaUser },
    ],
    images: ["/room5a.jpg", "/room5b.jpg", "/room5c.jpg"],
  },
  {
    id: 6,
    name: "Presidential Suite",
    description:
      "The pinnacle of luxury. This expansive suite features panoramic ocean views, two bedrooms, formal dining room, personal chef option, and dedicated concierge.",
    price: 1200,
    maxPeople: 6,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Panoramic View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "Private Pool", icon: FaSwimmer },
      { name: "Minibar", icon: FaWineGlass },
      { name: "Personal Chef", icon: FaUtensils },
      { name: "Concierge", icon: FaUser },
    ],
    images: ["/room6a.jpg", "/room6b.jpg", "/room6c.jpg"],
  },
];

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer:
      "Check-in is from 2:00 PM and check-out is until 11:00 AM. Early check-in and late check-out can be arranged upon availability.",
  },
  {
    question: "Are meals included in the room rate?",
    answer:
      "Yes, breakfast is included with all room bookings. Lunch and dinner are available at our seaside restaurant at an additional cost.",
  },
  {
    question: "Can I get a refund if I cancel my booking?",
    answer:
      "Cancellations made 7 days before check-in receive a full refund. Cancellations within 7 days are non-refundable but may be credited for a future stay.",
  },
  {
    question: "Is there airport transportation available?",
    answer:
      "Yes, we offer airport transfers at an additional cost. Our concierge team can arrange pickup from the airport.",
  },
  {
    question: "What is the policy for children?",
    answer:
      "Children under 12 stay free when sharing a room with parents. Extra beds and cribs are available upon request.",
  },
];

export default function AccommodationPage() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0,
      rooms: 1,
    },
    mode: "onChange",
  });

  const onSearch = (data: BookingFormData) => {
    console.log("Search:", data);
    setShowResults(true);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const adults = watch("adults");
  const children = watch("children");

  const filteredRooms = rooms.filter((room) => {
    const totalGuests = (adults || 1) + (children || 0);
    return room.maxPeople >= totalGuests;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/cover2.jpg"
          alt="Luxury Accommodation"
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
              Comfort & Luxury
            </p>
            <h1 className="font-oswald text-4xl md:text-6xl font-bold text-[#c9b99a] mb-4">
              ACCOMMODATION
            </h1>
            <p className="font-quattro text-[#c9b99a]/80 text-lg max-w-2xl mx-auto">
              Six uniquely designed suites to suit every traveler&apos;s needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Search */}
      <section className="py-4 md:py-8 bg-[#1e1208] sticky top-16 z-40">
        <div className={isScrolled ? "w-full px-0" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
          <form
            onSubmit={handleSubmit(onSearch)}
            className="bg-white rounded-lg p-4 md:p-6"
          >
            {/* When scrolled: 2-row layout, When not scrolled: single row */}
            {isScrolled ? (
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {/* Row 1: Check-in, Check-out, Adults, Children */}
                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Check-in
                  </label>
                  <Controller
                    name="checkIn"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="date"
                        min={today}
                        className="w-full px-2 py-1.5 text-sm rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro"
                      />
                    )}
                  />
                </div>
                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Check-out
                  </label>
                  <Controller
                    name="checkOut"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="date"
                        min={today}
                        className="w-full px-2 py-1.5 text-sm rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro"
                      />
                    )}
                  />
                </div>
                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Adults
                  </label>
                  <Controller
                    name="adults"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="w-full px-2 py-1.5 text-sm rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} Adult{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>
                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Children
                  </label>
                  <Controller
                    name="children"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="w-full px-2 py-1.5 text-sm rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro bg-white"
                      >
                        {[0, 1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num} Child{num !== 1 ? "ren" : ""}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>
                {/* Row 2: Rooms and Search button side by side */}
                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Rooms
                  </label>
                  <Controller
                    name="rooms"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="w-full px-2 py-1.5 text-sm rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} Room{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    type="submit"
                    className="w-full cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90 py-1.5 text-sm"
                  >
                    Search
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Check-in
                  </label>
                  <Controller
                    name="checkIn"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="date"
                        min={today}
                        className="w-full px-3 py-2 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro"
                      />
                    )}
                  />
                  {errors.checkIn && (
                    <p className="text-[#b22222] text-xs mt-1 font-quattro">
                      {errors.checkIn.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Check-out
                  </label>
                  <Controller
                    name="checkOut"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="date"
                        min={today}
                        className="w-full px-3 py-2 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro"
                      />
                    )}
                  />
                  {errors.checkOut && (
                    <p className="text-[#b22222] text-xs mt-1 font-quattro">
                      {errors.checkOut.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Adults
                  </label>
                  <Controller
                    name="adults"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} Adult{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>

                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Children
                  </label>
                  <Controller
                    name="children"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro bg-white"
                      >
                        {[0, 1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num} Child{num !== 1 ? "ren" : ""}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>

                <div>
                  <label className="block font-quattro text-sm text-[#150e08] mb-1">
                    Rooms
                  </label>
                  <Controller
                    name="rooms"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-lg border border-[#c9b99a] focus:border-[#7b1c3e] focus:ring-2 focus:ring-[#7b1c3e]/20 outline-none transition-colors font-quattro bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} Room{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>

                <div className="md:col-span-5 mt-2">
                  <Button
                    type="submit"
                    className="w-full md:w-auto cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90"
                  >
                    Search Available Rooms
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Search Results */}
      {showResults && (
        <section className="py-12 bg-[#f5f0e6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h2 className="font-oswald text-3xl font-bold text-[#150e08] mb-2">
                AVAILABLE ROOMS
              </h2>
              <p className="font-quattro text-[#7a5c3a]">
                {filteredRooms.length} room{filteredRooms.length !== 1 ? "s" : ""}{" "}
                available for your dates
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRooms.map((room) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="relative h-48">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-[#7b1c3e] text-white px-2 py-1 rounded text-sm font-quattro">
                      ${room.price}/night
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-oswald text-xl text-[#150e08] mb-2">
                      {room.name}
                    </h3>
                    <p className="font-quattro text-sm text-[#7a5c3a] mb-3 line-clamp-2">
                      {room.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <FaUser className="text-[#7a5c3a]" />
                      <span className="font-quattro text-sm text-[#7a5c3a]">
                        Up to {room.maxPeople} guests
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Rooms */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-quattro text-[#7b1c3e] text-sm tracking-widest uppercase mb-2">
              Our Suites
            </p>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#150e08] mb-4">
              ALL ACCOMMODATION
            </h2>
            <p className="font-quattro text-[#7a5c3a] max-w-2xl mx-auto">
              Each room has been thoughtfully designed to provide the perfect blend
              of comfort and coastal elegance.
            </p>
          </motion.div>

          <div className="space-y-16">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Carousel */}
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(
                        currentImage === 0 ? room.images.length - 1 : currentImage - 1
                      );
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#1e1208]/50 hover:bg-[#1e1208]/70 rounded-full text-white cursor-pointer"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage((currentImage + 1) % room.images.length);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#1e1208]/50 hover:bg-[#1e1208]/70 rounded-full text-white cursor-pointer"
                  >
                    <FaChevronRight />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {room.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImage(imgIndex);
                        }}
                        className={`w-2 h-2 rounded-full cursor-pointer ${
                          imgIndex === currentImage
                            ? "bg-white"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Room Details */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-quattro text-sm text-[#7b1c3e] tracking-widest uppercase">
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
                  <h3 className="font-oswald text-2xl md:text-3xl font-bold text-[#150e08] mb-3">
                    {room.name}
                  </h3>
                  <p className="font-quattro text-[#7a5c3a] mb-4">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {room.amenities.map((amenity) => {
                      const Icon = amenity.icon;
                      return (
                        <span
                          key={amenity.name}
                          className="flex items-center gap-1 bg-[#f5f0e6] px-3 py-1 rounded-full text-sm font-quattro text-[#7a5c3a]"
                        >
                          <span className="text-[#7b1c3e]">
                            <Icon />
                          </span>
                          {amenity.name}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between border-t border-[#c9b99a]/30 pt-4">
                    <div>
                      <span className="font-oswald text-3xl font-bold text-[#150e08]">
                        ${room.price}
                      </span>
                      <span className="font-quattro text-[#7a5c3a]"> / night</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUser className="text-[#7a5c3a]" />
                      <span className="font-quattro text-[#7a5c3a]">
                        Max {room.maxPeople} guests
                      </span>
                    </div>
                  </div>

                  <Button className="w-full mt-4 cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90">
                    Book This Room
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-[#f5f0e6]">
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
              ACCOMMODATION FAQ
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-oswald text-lg text-[#150e08] pr-4">
                    {faq.question}
                  </span>
                  <FaChevronRight
                    className={`text-[#7b1c3e] transition-transform flex-shrink-0 ${
                      openFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="font-quattro text-[#7a5c3a]">{faq.answer}</p>
                  </div>
                )}
              </div>
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
              READY TO BOOK?
            </h2>
            <p className="font-quattro text-[#c9b99a]/80 text-lg mb-8 max-w-2xl mx-auto">
              Reserve your perfect room today and start counting down to paradise.
            </p>
            <Button
              size="lg"
              className="cursor-pointer bg-[#c9b99a] text-[#150e08] hover:bg-[#c9b99a]/90 px-8"
            >
              Check Availability
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}