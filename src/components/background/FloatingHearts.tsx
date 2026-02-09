"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HEART_COUNT = 16;

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

const colors = [
  "text-rose-200",
  "text-pink-200",
  "text-red-200",
  "text-rose-300",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: HEART_COUNT }, (_, i) => ({
        id: i,
        x: seededRandom(i * 7) * 100,
        size: 12 + seededRandom(i * 13) * 18,
        duration: 10 + seededRandom(i * 19) * 8,
        delay: seededRandom(i * 23) * 8,
        opacity: 0.08 + seededRandom(i * 31) * 0.17,
        color: colors[Math.floor(seededRandom(i * 37) * colors.length)],
      }))
    );
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className={heart.color}
          style={{
            position: "absolute",
            left: `${heart.x}%`,
            bottom: -30,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
          animate={{
            y: [0, -1200],
            x: [0, Math.sin(heart.id) * 40, -Math.sin(heart.id) * 30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          &#9829;
        </motion.div>
      ))}
    </div>
  );
}
