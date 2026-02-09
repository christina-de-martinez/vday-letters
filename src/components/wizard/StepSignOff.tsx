"use client";

import { useLetterStore } from "@/hooks/useLetterStore";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const signOffOptions = [
  "Forever yours,",
  "With all my love,",
  "Yours always,",
  "XOXO,",
  "All my heart,",
];

export default function StepSignOff() {
  const { signOff, senderName, setField, nextStep, prevStep } =
    useLetterStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signOff.trim() && senderName.trim()) nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="font-serif text-3xl text-rose-800 mb-2">
        How do you want to sign off?
      </h2>
      <p className="text-rose-400 text-sm mb-6 font-sans">
        Pick a closing and add your name.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {signOffOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setField("signOff", option)}
            className={`px-4 py-2 rounded-full text-sm font-sans transition-all ${
              signOff === option
                ? "bg-rose-400 text-white shadow-md"
                : "bg-white/60 text-rose-600 border border-rose-200 hover:bg-rose-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <Input
        value={signOff}
        onChange={(e) => setField("signOff", e.target.value)}
        placeholder="Or write your own..."
        className="font-script text-xl mb-4"
      />

      <Input
        value={senderName}
        onChange={(e) => setField("senderName", e.target.value)}
        placeholder="Your name"
        className="font-serif text-xl"
        autoFocus
      />

      <div className="flex justify-between mt-6">
        <Button variant="ghost" onClick={prevStep}>
          Back
        </Button>
        <Button
          type="submit"
          disabled={!signOff.trim() || !senderName.trim()}
        >
          Next
        </Button>
      </div>
    </form>
  );
}
