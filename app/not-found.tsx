"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaUmbrellaBeach, FaHome } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1208] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <FaUmbrellaBeach className="text-[#c9b99a] text-8xl mx-auto" />
        </motion.div>

        <p className="font-quattro text-[#8b6914] text-lg tracking-widest uppercase mb-4">
          Page Not Found
        </p>

        <h1 className="font-oswald text-6xl md:text-8xl font-bold text-[#c9b99a] mb-6">
          404
        </h1>

        <p className="font-quattro text-[#c9b99a]/80 text-lg mb-4">
          Looks like you&apos;ve wandered off the beaten path. This page has drifted
          away like seashells on the tide.
        </p>

        <p className="font-quattro text-[#c9b99a]/60 mb-8">
          Don&apos;t worry, your perfect getaway is still waiting. Let&apos;s get you back
          on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              size="lg"
              className="cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90 gap-2"
            >
              <FaHome />
              Return Home
            </Button>
          </Link>
          <Link href="/accommodation">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer border-[#c9b99a] text-[#c9b99a] hover:bg-[#c9b99a]/10"
            >
              Book Your Stay
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}