"use client";

interface LetterPaperProps {
  children: React.ReactNode;
}

export default function LetterPaper({ children }: LetterPaperProps) {
  return (
    <div className="relative w-[min(90vw,520px)] mx-auto">
      {/* Decorative top border */}
      <div className="h-1.5 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300 rounded-t-sm" />

      {/* Letter body */}
      <div className="bg-stationery lined-paper px-10 py-8 shadow-xl border-x border-b border-rose-100/50 min-h-[400px]">
        {/* Faint watermark heart */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[200px] text-rose-100/20 select-none">
            &#9829;
          </span>
        </div>

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
