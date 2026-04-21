import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estelooma.com"),
  title: {
    default: "ESTELOOMA | Premium Health Tourism in Istanbul",
    template: "%s | ESTELOOMA",
  },
  description:
    "Expert cosmetic surgery, rhinoplasty, weight loss surgery and eye care in Istanbul. JCI-aligned hospitals, VIP transfers and dedicated aftercare.",
  applicationName: "Estelooma",
  authors: [{ name: "Estelooma" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Estelooma",
    url: "https://estelooma.com",
  },
  twitter: {
    card: "summary_large_image",
  },
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
        <WhatsAppFloat />
      </body>
    </html>
  );
}
