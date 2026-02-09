"use client";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  autoComplete?: string;
  className?: string;
  autoFocus?: boolean;
}

export default function Input({
  value,
  onChange,
  onKeyDown,
  placeholder,
  type = "text",
  name,
  autoComplete,
  className = "",
  autoFocus = false,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      className={`w-full rounded-2xl border border-rose-200 bg-white/80 backdrop-blur-sm px-5 py-3.5 text-rose-900 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all ${className}`}
    />
  );
}
