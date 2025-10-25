import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StratSchool - Ignite Your Startup Journey",
  description: "Empowering India's brightest minds to build, launch, and scale innovative startups. Discover our flagship programs IGNITE, LIFTOFF, and FOUNDATIONS.",
  keywords: ["startup", "entrepreneurship", "India", "incubator", "accelerator", "startup education", "StratSchool"],
  authors: [{ name: "StratSchool" }],
  openGraph: {
    title: "StratSchool - Ignite Your Startup Journey",
    description: "Fueling India's Startup Ecosystem with cutting-edge programs and mentorship",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-black text-white`}
      >
        <SmoothScrollProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
