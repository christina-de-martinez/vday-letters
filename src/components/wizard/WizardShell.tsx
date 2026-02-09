"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLetterStore } from "@/hooks/useLetterStore";
import ProgressDots from "@/components/ui/ProgressDots";
import StepName from "./StepName";
import StepLoveAbout from "./StepLoveAbout";
import StepMemory from "./StepMemory";
import StepMeaning from "./StepMeaning";
import StepSignOff from "./StepSignOff";
import StepPreview from "./StepPreview";

const steps = [
  StepName,
  StepLoveAbout,
  StepMemory,
  StepMeaning,
  StepSignOff,
  StepPreview,
];

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
  }),
};

export default function WizardShell() {
  const { currentStep, direction } = useLetterStore();
  const StepComponent = steps[currentStep];
  const isPreview = currentStep === steps.length - 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className={isPreview ? "w-full max-w-xl" : "w-full max-w-md"}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-100"
          >
            <StepComponent />
          </motion.div>
        </AnimatePresence>
      </div>
      <ProgressDots total={steps.length} current={currentStep} />
    </div>
  );
}
