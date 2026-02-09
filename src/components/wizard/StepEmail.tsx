"use client";

import { useRouter } from "next/navigation";
import { useLetterStore } from "@/hooks/useLetterStore";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function StepEmail() {
  const router = useRouter();
  const { recipientEmail, valentineName, setField, prevStep } =
    useLetterStore();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipientEmail);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail) {
      router.push("/preview");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="font-serif text-3xl text-rose-800 mb-2">
        Where should we send it?
      </h2>
      <p className="text-rose-400 text-sm mb-6 font-sans">
        Enter {valentineName ? `${valentineName}'s` : "their"} email address.
      </p>
      <Input
        type="email"
        value={recipientEmail}
        onChange={(e) => setField("recipientEmail", e.target.value)}
        placeholder="valentine@example.com"
        autoFocus
        className="font-sans"
      />
      <div className="flex justify-between mt-6">
        <Button variant="ghost" onClick={prevStep}>
          Back
        </Button>
        <Button type="submit" disabled={!isValidEmail}>
          Preview My Letter
        </Button>
      </div>
    </form>
  );
}
