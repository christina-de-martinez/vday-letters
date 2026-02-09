import { z } from "zod";

export const sendLetterSchema = z.object({
  valentineName: z.string().min(1).max(100),
  loveAbout: z.string().min(1).max(2000),
  memory: z.string().min(1).max(2000),
  meaning: z.string().min(1).max(2000),
  signOff: z.string().min(1).max(200),
  senderName: z.string().min(1).max(100),
  recipientEmail: z.string().email(),
});

export type SendLetterInput = z.infer<typeof sendLetterSchema>;
