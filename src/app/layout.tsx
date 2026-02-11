import type { Metadata } from "next";
import { Instrument_Serif, Meow_Script, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const meowScript = Meow_Script({
  variable: "--font-meow-script",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Send Your Valentine a Love Letter",
  description:
    "You don't need AI to write something from the heart. Write a personal love letter and send it to your Valentine.",
  metadataBase: new URL("https://vday.sillysoftware.club"),
  openGraph: {
    title: "Send Your Valentine a Love Letter",
    description:
      "You don't need AI to write something from the heart. Write a personal love letter and send it to your Valentine.",
    type: "website",
    siteName: "Love Letter by Silly Software",
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Your Valentine a Love Letter",
    description:
      "You don't need AI to write something from the heart.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${meowScript.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
