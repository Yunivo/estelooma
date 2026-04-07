import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESTELOOMA | Premium Health Tourism in Istanbul",
  description:
    "Expert cosmetic surgery, rhinoplasty, weight loss surgery and eye care in Istanbul. JCI-accredited hospitals, VIP transfers, and dedicated aftercare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} antialiased`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans bg-white dark:bg-charcoal transition-colors duration-300">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
