import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KPW Build | Landscaping & 3D Garden Design | Scotland",
    template: "%s | KPW Build",
  },
  description:
    "Eco-friendly landscaping services in North Lanarkshire and Scotland. Fencing, patios, garden rooms, driveways, and professional 3D garden designs available online.",
  keywords: [
    "landscaping",
    "garden design",
    "3D garden design",
    "North Lanarkshire",
    "Scotland",
    "fencing",
    "patios",
    "garden rooms",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
