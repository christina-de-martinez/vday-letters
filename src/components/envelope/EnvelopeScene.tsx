"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLetterStore } from "@/hooks/useLetterStore";
import { composeLetter } from "@/lib/composeLetter";
import LetterPaper from "@/components/letter/LetterPaper";
import TypewriterText from "@/components/letter/TypewriterText";
import FloatingHearts from "@/components/background/FloatingHearts";

type Phase = "typing" | "folding" | "sealing" | "flying" | "sent" | "error";

async function sendLetter() {
  const s = useLetterStore.getState();
  const res = await fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      valentineName: s.valentineName,
      loveAbout: s.loveAbout,
      memory: s.memory,
      meaning: s.meaning,
      signOff: s.signOff,
      senderName: s.senderName,
      recipientEmail: s.recipientEmail,
    }),
  });
  if (!res.ok) throw new Error("Failed to send");
}

/* ─── Wax Seal — photorealistic dusty rose with embossed heart ─── */
function WaxSeal({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter:
          "drop-shadow(0 2px 3px rgba(100, 60, 70, 0.5)) drop-shadow(0 6px 12px rgba(100, 60, 70, 0.25))",
      }}
    >
      {/* Organic blob outer shape — waxy irregular edge */}
      <path
        d="M50 3C55 2 61 4 67 7C71 9 76 13 80 18C84 23 87 28 89 34C91 40 93 45 93 50C93 55 92 61 89 67C86 73 82 78 77 82C72 86 67 89 61 91C56 93 51 93 47 93C42 93 37 92 32 89C27 86 22 82 18 77C14 72 11 67 8 61C6 56 4 51 4 46C4 41 5 36 7 31C10 25 13 20 18 16C23 12 28 8 34 6C40 3 45 3 50 3Z"
        fill="url(#sealBase)"
      />
      {/* Outer rim bevel — raised edge catching light */}
      <path
        d="M50 3C55 2 61 4 67 7C71 9 76 13 80 18C84 23 87 28 89 34C91 40 93 45 93 50C93 55 92 61 89 67C86 73 82 78 77 82C72 86 67 89 61 91C56 93 51 93 47 93C42 93 37 92 32 89C27 86 22 82 18 77C14 72 11 67 8 61C6 56 4 51 4 46C4 41 5 36 7 31C10 25 13 20 18 16C23 12 28 8 34 6C40 3 45 3 50 3Z"
        fill="none"
        stroke="url(#rimLight)"
        strokeWidth="2.5"
      />
      {/* Secondary rim — dark underside of bevel */}
      <path
        d="M50 5C55 4 60 6 66 9C70 11 75 14 79 19C83 24 86 29 88 34C90 40 91 45 91 50C91 55 90 60 88 65C85 71 81 76 76 80C71 84 66 87 60 89C55 91 51 91 47 91C42 91 38 90 33 87C28 84 24 80 20 76C16 71 13 66 10 60C8 55 6 50 6 46C6 41 7 37 9 32C12 27 14 22 19 18C24 14 28 10 34 8C40 5 45 5 50 5Z"
        fill="none"
        stroke="rgba(140,80,95,0.25)"
        strokeWidth="1"
      />
      {/* Inner circle depression — concave stamp area */}
      <circle cx="50" cy="50" r="31" fill="url(#innerDepression)" />
      {/* Inner circle rim — lit edge of depression */}
      <circle
        cx="50"
        cy="50"
        r="31"
        fill="none"
        stroke="url(#innerRimGrad)"
        strokeWidth="1.5"
      />
      {/* Embossed heart — raised relief */}
      <g filter="url(#heartEmboss)">
        <path
          d="M50 68C50 68 30 54 30 42C30 36 34 31 40 31C44 31 47 33 50 37C53 33 56 31 60 31C66 31 70 36 70 42C70 54 50 68 50 68Z"
          fill="url(#heartFill)"
        />
      </g>
      {/* Heart highlight — top of the emboss catching light */}
      <path
        d="M40 33C44 33 47 35 50 39C53 35 56 33 60 33C65 33 68 37 68 42C68 44 67 46 66 48"
        fill="none"
        stroke="rgba(255,220,230,0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Heart shadow — bottom edge of emboss */}
      <path
        d="M34 48C36 52 42 58 50 66C58 58 64 52 66 48"
        fill="none"
        stroke="rgba(130,70,85,0.2)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Primary specular highlight — upper left gloss */}
      <ellipse
        cx="38"
        cy="36"
        rx="16"
        ry="10"
        fill="url(#specularMain)"
        transform="rotate(-20, 38, 36)"
      />
      {/* Secondary soft highlight — lower right ambient */}
      <ellipse
        cx="64"
        cy="66"
        rx="10"
        ry="6"
        fill="url(#specularSecondary)"
        transform="rotate(15, 64, 66)"
      />
      {/* Subtle surface texture — fine grain */}
      <circle cx="50" cy="50" r="44" fill="url(#surfaceTexture)" opacity="0.04" />
      <defs>
        {/* Base wax gradient — warm dusty rose with depth */}
        <radialGradient id="sealBase" cx="42%" cy="38%" r="58%">
          <stop offset="0%" stopColor="#DEAAB6" />
          <stop offset="25%" stopColor="#D49DAA" />
          <stop offset="50%" stopColor="#C88D9A" />
          <stop offset="75%" stopColor="#B87A8A" />
          <stop offset="100%" stopColor="#A66A7C" />
        </radialGradient>
        {/* Rim bevel light — top-left lit, bottom-right shadowed */}
        <linearGradient id="rimLight" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="rgba(255,210,220,0.6)" />
          <stop offset="40%" stopColor="rgba(255,210,220,0.15)" />
          <stop offset="60%" stopColor="rgba(120,60,75,0.1)" />
          <stop offset="100%" stopColor="rgba(100,50,65,0.35)" />
        </linearGradient>
        {/* Inner depression gradient — slightly darker, concave look */}
        <radialGradient id="innerDepression" cx="45%" cy="42%" r="52%">
          <stop offset="0%" stopColor="#D4A5B0" />
          <stop offset="40%" stopColor="#CC9CA8" />
          <stop offset="80%" stopColor="#C2909E" />
          <stop offset="100%" stopColor="#B88594" />
        </radialGradient>
        {/* Inner rim — lit top, shadowed bottom */}
        <linearGradient id="innerRimGrad" x1="30%" y1="15%" x2="70%" y2="85%">
          <stop offset="0%" stopColor="rgba(100,55,70,0.3)" />
          <stop offset="45%" stopColor="rgba(100,55,70,0.1)" />
          <stop offset="55%" stopColor="rgba(255,210,220,0.1)" />
          <stop offset="100%" stopColor="rgba(255,210,220,0.35)" />
        </linearGradient>
        {/* Heart fill — slightly raised, warmer tone */}
        <radialGradient id="heartFill" cx="48%" cy="44%" r="45%">
          <stop offset="0%" stopColor="#D8A5B2" />
          <stop offset="50%" stopColor="#CFA0AB" />
          <stop offset="100%" stopColor="#C4949F" />
        </radialGradient>
        {/* Heart emboss filter — inner shadow for raised relief */}
        <filter id="heartEmboss" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feOffset in="blur" dx="-0.8" dy="-1" result="shadowTop" />
          <feOffset in="blur" dx="0.8" dy="1" result="shadowBottom" />
          <feFlood floodColor="rgba(255,220,230,0.4)" result="lightColor" />
          <feFlood floodColor="rgba(100,55,70,0.3)" result="shadowColor" />
          <feComposite in="lightColor" in2="shadowTop" operator="in" result="topLight" />
          <feComposite in="shadowColor" in2="shadowBottom" operator="in" result="bottomShadow" />
          <feMerge>
            <feMergeNode in="bottomShadow" />
            <feMergeNode in="topLight" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Primary specular */}
        <radialGradient id="specularMain" cx="50%" cy="35%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        {/* Secondary ambient highlight */}
        <radialGradient id="specularSecondary" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(255,230,235,0.1)" />
          <stop offset="100%" stopColor="rgba(255,230,235,0)" />
        </radialGradient>
        {/* Fine radial texture grain */}
        <radialGradient id="surfaceTexture" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="30%" stopColor="#ccc" />
          <stop offset="50%" stopColor="#fff" />
          <stop offset="70%" stopColor="#bbb" />
          <stop offset="100%" stopColor="#ddd" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ─── Static sealed letter for the flying phase ─── */
function SealedLetter() {
  const thirdH = 160;
  const w = "min(90vw, 520px)";

  return (
    <div
      className="relative mx-auto"
      style={{ width: w, height: thirdH }}
    >
      {/* Middle third (base — visible) */}
      <div
        className="absolute inset-0 bg-stationery"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
      />
      {/* Top third back face (folded cover, on top) */}
      <div className="absolute inset-0 bg-stationery" style={{ zIndex: 2 }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[80px] text-rose-100/25 select-none">
            &#9829;
          </span>
        </div>
      </div>
      {/* Wax seal */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <WaxSeal />
      </div>
    </div>
  );
}

/*
 * FoldingLetter — the letter folds in thirds like a real tri-fold.
 *   - Middle panel: static base
 *   - Bottom panel: folds UP (rotateX -180 around top edge)
 *   - Top panel: folds DOWN IN FRONT (rotateX -180 around bottom edge)
 */
function FoldingLetter({
  letterText,
  phase,
  onFoldDone,
  onSealDone,
}: {
  letterText: string;
  phase: Phase;
  onFoldDone: () => void;
  onSealDone: () => void;
}) {
  const [bottomFolded, setBottomFolded] = useState(false);
  const isFolded = phase === "folding" || phase === "sealing";
  const w = "min(90vw, 520px)";
  const thirdH = 160;
  const totalH = thirdH * 3;

  return (
    <div
      className="relative mx-auto"
      style={{
        width: w,
        height: totalH,
        perspective: "1200px",
      }}
    >
      {/* ── MIDDLE THIRD (static base) ── */}
      <div
        className="absolute left-0 right-0 overflow-hidden bg-stationery"
        style={{
          top: thirdH,
          height: thirdH,
          zIndex: 1,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        <div className="lined-paper absolute inset-0" />
        <div
          className="absolute left-0 right-0 px-10 py-8 font-script text-2xl text-rose-900 whitespace-pre-wrap leading-relaxed"
          style={{ top: -thirdH }}
        >
          {letterText}
        </div>
      </div>

      {/* ── BOTTOM THIRD (folds UP onto middle) ── */}
      <motion.div
        className="absolute left-0 right-0 origin-top"
        style={{
          top: thirdH * 2,
          height: thirdH,
          transformStyle: "preserve-3d",
          zIndex: 2,
        }}
        initial={{ rotateX: 0 }}
        animate={isFolded ? { rotateX: -180 } : { rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        onAnimationComplete={() => {
          if (phase === "folding" && !bottomFolded) {
            setBottomFolded(true);
          }
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden bg-stationery"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="lined-paper absolute inset-0" />
          <div
            className="absolute left-0 right-0 px-10 py-8 font-script text-2xl text-rose-900 whitespace-pre-wrap leading-relaxed"
            style={{ top: -thirdH * 2 }}
          >
            {letterText}
          </div>
        </div>
        <div
          className="absolute inset-0 bg-stationery"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            boxShadow: "inset 0 1px 6px rgba(0,0,0,0.04)",
          }}
        />
      </motion.div>

      {/* ── TOP THIRD (folds DOWN in front) ── */}
      <motion.div
        className="absolute left-0 right-0 origin-bottom"
        style={{
          top: 0,
          height: thirdH,
          transformStyle: "preserve-3d",
          zIndex: bottomFolded ? 10 : 1,
        }}
        initial={{ rotateX: 0 }}
        animate={
          bottomFolded && isFolded ? { rotateX: -180 } : { rotateX: 0 }
        }
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        onAnimationComplete={() => {
          if (bottomFolded && phase === "folding") {
            onFoldDone();
          }
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden bg-stationery"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-1.5 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300" />
          <div className="lined-paper absolute inset-0 top-1.5" />
          <div className="absolute left-0 right-0 px-10 py-8 font-script text-2xl text-rose-900 whitespace-pre-wrap leading-relaxed">
            {letterText}
          </div>
        </div>
        <div
          className="absolute inset-0 bg-stationery"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[80px] text-rose-100/25 select-none">
              &#9829;
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── WAX SEAL ── */}
      <motion.div
        className="absolute"
        style={{
          top: thirdH + thirdH / 2,
          left: "50%",
          x: "-50%",
          y: "-50%",
          zIndex: 20,
        }}
        initial={{ scale: 0, opacity: 0, rotate: -15 }}
        animate={
          phase === "sealing"
            ? { scale: 1, opacity: 1, rotate: 0 }
            : { scale: 0, opacity: 0, rotate: -15 }
        }
        transition={
          phase === "sealing"
            ? { delay: 0.15, type: "spring", stiffness: 350, damping: 12 }
            : { duration: 0 }
        }
        onAnimationComplete={() => {
          if (phase === "sealing") {
            onSealDone();
          }
        }}
      >
        <WaxSeal />
      </motion.div>
    </div>
  );
}

export default function EnvelopeScene() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [, setSendError] = useState(false);
  const store = useLetterStore();
  const letterText = composeLetter(store);

  const isAnimating = phase === "typing" || phase === "folding" || phase === "sealing" || phase === "flying";

  const onTypewriterComplete = useCallback(() => {
    setTimeout(() => setPhase("folding"), 800);
  }, []);

  const onSealDone = useCallback(() => {
    setPhase("flying");
  }, []);

  const handleRetry = () => {
    setSendError(false);
    setPhase("flying");
  };

  const handleWriteAnother = () => {
    store.reset();
    window.location.href = "/";
  };

  useEffect(() => {
    if (phase === "sealing") {
      const timeout = setTimeout(() => setPhase("flying"), 3000);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
      <FloatingHearts />

      {/* ── Continuous animation flow (no AnimatePresence between phases) ── */}
      {isAnimating && (
        <div className="relative z-10">
          {/* ── TYPING ── */}
          <motion.div
            animate={{
              opacity: phase === "typing" ? 1 : 0,
              scale: phase === "typing" ? 1 : 0.92,
            }}
            transition={{ duration: 0.4 }}
            style={{
              pointerEvents: phase === "typing" ? "auto" : "none",
              position: phase === "typing" ? "relative" : "absolute",
              top: phase === "typing" ? undefined : 0,
              left: phase === "typing" ? undefined : 0,
              right: phase === "typing" ? undefined : 0,
            }}
          >
            <LetterPaper>
              <TypewriterText
                text={letterText}
                onComplete={onTypewriterComplete}
              />
            </LetterPaper>
          </motion.div>

          {/* ── FOLDING + SEALING ── */}
          {(phase === "folding" || phase === "sealing") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <FoldingLetter
                letterText={letterText}
                phase={phase}
                onFoldDone={() => setPhase("sealing")}
                onSealDone={onSealDone}
              />
            </motion.div>
          )}

          {/* ── FLYING ── */}
          {phase === "flying" && (
            <motion.div
              initial={{ y: 0, x: 0, rotate: 0, scale: 1, opacity: 1 }}
              animate={{
                y: [0, -30, -700],
                x: [0, 20, 280],
                rotate: [0, -3, -20],
                scale: [1, 1.02, 0.3],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 1.6,
                ease: [0.2, 0.8, 0.2, 1],
                times: [0, 0.25, 1],
              }}
              onAnimationComplete={async () => {
                try {
                  await sendLetter();
                  store.setSent(true);
                  setPhase("sent");
                } catch {
                  setSendError(true);
                  setPhase("error");
                }
              }}
            >
              <SealedLetter />
            </motion.div>
          )}
        </div>
      )}

      {/* ── Terminal states use AnimatePresence for clean entrance ── */}
      <AnimatePresence>
        {phase === "sent" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-10 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-7xl mb-6"
            >
              &#9829;
            </motion.div>
            <h2 className="font-serif text-4xl text-rose-800 mb-3">
              Your letter is on its way!
            </h2>
            <p className="font-sans text-rose-400 mb-8">
              Sent with love to {store.valentineName}
            </p>
            <button
              onClick={handleWriteAnother}
              className="font-serif text-rose-500 hover:text-rose-700 underline underline-offset-4 transition-colors"
            >
              Write another letter
            </button>
          </motion.div>
        )}

        {phase === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-100 max-w-md"
          >
            <p className="font-serif text-2xl text-rose-800 mb-3">
              Oh no, something went wrong
            </p>
            <p className="font-sans text-rose-400 text-sm mb-6">
              We couldn&apos;t send your letter. Let&apos;s try again.
            </p>
            <button
              onClick={handleRetry}
              className="font-serif bg-gradient-to-r from-rose-700 to-rose-800 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
