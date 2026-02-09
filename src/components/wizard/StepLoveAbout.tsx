"use client";

import { useLetterStore } from "@/hooks/useLetterStore";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function StepLoveAbout() {
  const { loveAbout, valentineName, setField, nextStep, prevStep } =
    useLetterStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loveAbout.trim()) nextStep();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.metaKey && loveAbout.trim()) {
      e.preventDefault();
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="font-serif text-3xl text-rose-800 mb-2">
        What do you love about {valentineName || "them"}?
      </h2>
      <p className="text-rose-400 text-sm mb-6 font-sans">
        Write a sentence or two &mdash; the more specific, the sweeter.
      </p>
      <Textarea
        value={loveAbout}
        onChange={(e) => setField("loveAbout", e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="I love the way you always know how to make me laugh, even on my worst days."
        autoFocus
      />
      <div className="flex items-center justify-between mt-6">
        <Button variant="ghost" onClick={prevStep}>
          Back
        </Button>
        <div className="flex flex-col items-center gap-1.5">
          <Button type="submit" disabled={!loveAbout.trim()}>
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
