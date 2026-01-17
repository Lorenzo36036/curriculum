import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curriculum Lorenzo Parra",
  description:
    "Curriculum personal de trabajo donde refleja todo mi perfil profesional con las tecnologias del vanguardia en el desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} w-screen h-screen antialiased`}
    >
      <div className="fixed w-screen z-50">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
