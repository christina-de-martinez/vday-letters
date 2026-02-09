"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  if (variant === "ghost") {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`font-serif text-rose-400 hover:text-rose-600 transition-colors px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`font-serif bg-gradient-to-r from-rose-700 to-rose-800 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow disabled:opacity-40 disabled:cursor-not-allowed text-lg ${className}`}
    >
      {children}
    </motion.button>
  );
}
