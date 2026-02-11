import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsubscribed",
};

export default function UnsubscribePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-5xl mb-6">♥</p>
        <h1 className="font-serif text-2xl text-rose-800 mb-3">
          You&apos;ve been unsubscribed
        </h1>
        <p className="font-sans text-rose-400 text-sm">
          You won&apos;t receive any more love letters from ilysm.email.
        </p>
      </div>
    </main>
  );
}
