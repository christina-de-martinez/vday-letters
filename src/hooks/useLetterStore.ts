import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LetterData } from "@/types/letter";

interface LetterStore extends LetterData {
  currentStep: number;
  direction: number;
  isSending: boolean;
  isSent: boolean;
  error: string | null;

  setField: <K extends keyof LetterData>(key: K, value: LetterData[K]) => void;
  nextStep: () => void;
  prevStep: () => void;
  setSending: (val: boolean) => void;
  setSent: (val: boolean) => void;
  setError: (msg: string | null) => void;
  reset: () => void;
}

const initialData: LetterData = {
  valentineName: "",
  loveAbout: "",
  memory: "",
  meaning: "",
  signOff: "Forever yours,",
  senderName: "",
  recipientEmail: "",
};

export const useLetterStore = create<LetterStore>()(
  persist(
    (set) => ({
      ...initialData,
      currentStep: 0,
      direction: 1,
      isSending: false,
      isSent: false,
      error: null,

      setField: (key, value) => set({ [key]: value }),
      nextStep: () =>
        set((s) => ({
          currentStep: Math.min(s.currentStep + 1, 5),
          direction: 1,
        })),
      prevStep: () =>
        set((s) => ({
          currentStep: Math.max(s.currentStep - 1, 0),
          direction: -1,
        })),
      setSending: (val) => set({ isSending: val }),
      setSent: (val) => set({ isSent: val }),
      setError: (msg) => set({ error: msg }),
      reset: () =>
        set({
          ...initialData,
          currentStep: 0,
          direction: 1,
          isSending: false,
          isSent: false,
          error: null,
        }),
    }),
    {
      name: "love-letter-draft",
      partialize: (state) => ({
        valentineName: state.valentineName,
        loveAbout: state.loveAbout,
        memory: state.memory,
        meaning: state.meaning,
        signOff: state.signOff,
        senderName: state.senderName,
        recipientEmail: state.recipientEmail,
      }),
    }
  )
);
