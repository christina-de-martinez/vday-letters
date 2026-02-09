"use client";

import { useLetterStore } from "@/hooks/useLetterStore";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function StepName() {
  const { valentineName, setField, nextStep } = useLetterStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valentineName.trim()) nextStep();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.metaKey && valentineName.trim()) {
      e.preventDefault();
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="font-serif text-3xl text-rose-800 mb-2">
        What&apos;s your Valentine&apos;s name?
      </h2>
      <p className="text-rose-400 text-sm mb-6 font-sans">
        Who is this letter for?
      </p>
      <Input
        value={valentineName}
        onChange={(e) => setField("valentineName", e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Their name..."
        autoFocus
        className="font-serif text-xl"
      />
      <div className="flex justify-end mt-6">
        <div className="flex flex-col items-center gap-1.5">
          <Button type="submit" disabled={!valentineName.trim()}>
            Next
          </Button>
          <span className="text-rose-300 text-xs font-sans hidden sm:inline">
            &#8984; Enter
          </span>
        </div>
      </div>
    </form>
  );
}
