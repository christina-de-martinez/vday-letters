"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FloatingHearts from "@/components/background/FloatingHearts";

export default function Home() {
  return (
    <>
      <FloatingHearts />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl mb-6"
          >
            &#9829;
          </motion.div>

          <h1 className="font-serif text-5xl sm:text-6xl text-rose-800 mb-4">
            Send Your Valentine a Love Letter
          </h1>

          <p className="font-sans text-lg sm:text-xl text-rose-400 mb-12">
            You don&apos;t need AI to write something from the heart.
          </p>

          <Link href="/write">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block font-serif bg-gradient-to-r from-rose-700 to-rose-800 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow text-xl cursor-pointer"
            >
              Begin
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
