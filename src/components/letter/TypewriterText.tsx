"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  onComplete,
}: TypewriterTextProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [done, setDone] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const duration = Math.max(4, text.length * 0.035);

    const controls = animate(count, text.length, {
      type: "tween",
      duration,
      ease: "linear",
      onComplete: () => {
        setDone(true);
        onComplete?.();
      },
    });

    const unsubscribe = displayText.on("change", (latest) => {
      setCurrentText(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [text, count, displayText, onComplete]);

  return (
    <span className="font-script text-2xl text-rose-900 whitespace-pre-wrap leading-relaxed">
      {currentText}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="inline-block w-[2px] h-6 bg-rose-400 ml-0.5 align-middle"
        />
      )}
    </span>
  );
}
