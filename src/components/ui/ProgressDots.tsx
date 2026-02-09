"use client";

import { motion } from "framer-motion";
import { useLetterStore } from "@/hooks/useLetterStore";

interface ProgressDotsProps {
  total: number;
  current: number;
}

export default function ProgressDots({ total, current }: ProgressDotsProps) {
  const goToStep = (step: number) => {
    if (step === current) return;
    useLetterStore.setState({
      currentStep: step,
      direction: step > current ? 1 : -1,
    });
  };

  return (
    <div className="flex items-center gap-2.5 mt-8">
      {Array.from({ length: total }, (_, i) => (
        <motion.button
          key={i}
          type="button"
          onClick={() => goToStep(i)}
          animate={{
            scale: i === current ? 1.3 : 1,
            backgroundColor: i <= current ? "#fb7185" : "#fecdd3",
          }}
          whileHover={{ scale: 1.4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="w-2.5 h-2.5 rounded-full cursor-pointer p-0 border-none outline-none"
        />
      ))}
    </div>
  );
}
