"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLetterStore } from "@/hooks/useLetterStore";
import { composeLetter } from "@/lib/composeLetter";
import { z } from "zod";
import LetterPaper from "@/components/letter/LetterPaper";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const emailSchema = z.string().email();

export default function StepPreview() {
  const router = useRouter();
  const store = useLetterStore();
  const [showEmail, setShowEmail] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const letterText = composeLetter(store);

  const isValidEmail = emailSchema.safeParse(store.recipientEmail).success;

  const handleSend = () => {
    const result = emailSchema.safeParse(store.recipientEmail);
    if (!result.success) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError(null);
    router.push("/preview");
  };

  return (
    <div className="w-full">
      <h2 className="font-serif text-3xl text-rose-800 mb-2">
        Your letter
      </h2>
      <p className="text-rose-400 text-sm mb-6 font-sans">
        Here&apos;s how it will look. Go back to make changes, or send it off.
      </p>

      <div className="mb-6 -mx-4 sm:-mx-6">
        <LetterPaper>
          <div className="font-script text-2xl text-rose-900 whitespace-pre-wrap leading-relaxed">
            {letterText}
          </div>
        </LetterPaper>
      </div>

      {showEmail ? (
        <div className="space-y-4">
          <p className="font-serif text-lg text-rose-800">
            Where should we send it?
          </p>
          <div>
            <Input
              type="email"
              name="email"
              autoComplete="email"
              value={store.recipientEmail}
              onChange={(e) => {
                store.setField("recipientEmail", e.target.value);
                if (emailError) setEmailError(null);
              }}
              placeholder={`${store.valentineName ? store.valentineName.toLowerCase() : "valentine"}@example.com`}
              autoFocus
              className="font-sans"
            />
            {emailError && (
              <p className="text-red-500 text-xs font-sans mt-1.5 ml-1">
                {emailError}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setShowEmail(false)}>
              Back
            </Button>
            <Button onClick={handleSend} disabled={!isValidEmail}>
              Send
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={store.prevStep}>
            Edit
          </Button>
          <Button onClick={() => setShowEmail(true)}>
            Send this letter
          </Button>
        </div>
      )}
    </div>
  );
}
