"use client";

import { useLetterStore } from "@/hooks/useLetterStore";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function StepMemory() {
  const { memory, setField, nextStep, prevStep } = useLetterStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (memory.trim()) nextStep();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.metaKey && memory.trim()) {
      e.preventDefault();
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="font-serif text-3xl text-rose-800 mb-2">
        Share a favorite memory together
      </h2>
      <p className="text-rose-400 text-sm mb-6 font-sans">
        Describe it like you&apos;re telling a story &mdash; full sentences
        make the letter feel real.
      </p>
      <Textarea
        value={memory}
        onChange={(e) => setField("memory", e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="I still think about the night we stayed up talking until sunrise. I never wanted that conversation to end."
        autoFocus
      />
      <div className="flex items-center justify-between mt-6">
        <Button variant="ghost" onClick={prevStep}>
          Back
        </Button>
        <div className="flex flex-col items-center gap-1.5">
          <Button type="submit" disabled={!memory.trim()}>
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
