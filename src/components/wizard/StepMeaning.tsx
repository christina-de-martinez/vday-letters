"use client";

import { useLetterStore } from "@/hooks/useLetterStore";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function StepMeaning() {
  const { meaning, valentineName, setField, nextStep, prevStep } =
    useLetterStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (meaning.trim()) nextStep();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.metaKey && meaning.trim()) {
      e.preventDefault();
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="font-serif text-3xl text-rose-800 mb-2">
        What does {valentineName || "your Valentine"} mean to you?
      </h2>
      <p className="text-rose-400 text-sm mb-6 font-sans">
        Speak from the heart. A complete thought means more than a few
        words.
      </p>
      <Textarea
        value={meaning}
        onChange={(e) => setField("meaning", e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="You make every ordinary moment feel extraordinary. I can't imagine my life without you in it."
        autoFocus
      />
      <div className="flex items-center justify-between mt-6">
        <Button variant="ghost" onClick={prevStep}>
          Back
        </Button>
        <div className="flex flex-col items-center gap-1.5">
          <Button type="submit" disabled={!meaning.trim()}>
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
