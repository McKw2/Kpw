import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KPW — Full-Stack Developer",
  description:
    "Full-stack developer crafting beautiful, performant digital experiences. Specialising in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["developer", "full-stack", "React", "Next.js", "TypeScript", "web development"],
  openGraph: {
    title: "KPW — Full-Stack Developer",
    description: "Full-stack developer crafting beautiful, performant digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
