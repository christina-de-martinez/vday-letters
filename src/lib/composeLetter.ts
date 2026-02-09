import type { LetterData } from "@/types/letter";

export function composeLetter(data: LetterData): string {
  return [
    `Dear ${data.valentineName},`,
    "",
    data.loveAbout,
    "",
    data.memory,
    "",
    data.meaning,
    "",
    data.signOff,
    data.senderName,
  ].join("\n");
}
