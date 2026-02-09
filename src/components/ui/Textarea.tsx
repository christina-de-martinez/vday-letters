"use client";

interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export default function Textarea({
  value,
  onChange,
  onKeyDown,
  placeholder,
  className = "",
  autoFocus = false,
}: TextareaProps) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      autoFocus={autoFocus}
      rows={4}
      className={`w-full rounded-2xl border border-rose-200 bg-white/80 backdrop-blur-sm px-5 py-3.5 text-rose-900 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all resize-none min-h-[120px] font-script text-xl ${className}`}
    />
  );
}
