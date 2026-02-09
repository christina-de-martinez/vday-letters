import { Resend } from "resend";
import { sendLetterSchema } from "@/lib/validators";
import { LoveLetterEmail } from "@/emails/LoveLetterEmail";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = sendLetterSchema.parse(body);

    const { error } = await resend.emails.send({
      from: "Love Letter <vday@newsletter.sillysoftware.club>",
      to: [data.recipientEmail],
      subject: `A love letter for you, ${data.valentineName}`,
      headers: {
        "List-Unsubscribe": `<mailto:hi@sillysoftware.club?subject=Unsubscribe&body=Please%20unsubscribe%20me%20from%20future%20love%20letters.>`,
      },
      react: LoveLetterEmail({
        valentineName: data.valentineName,
        loveAbout: data.loveAbout,
        memory: data.memory,
        meaning: data.meaning,
        signOff: data.signOff,
        senderName: data.senderName,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json(
        { error: "Invalid letter data", details: err.issues },
        { status: 400 }
      );
    }
    console.error("Send error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
