// import { CormorantInfant } from 'next/font/google'
import { Cormorant_Infant } from 'next/font/google'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Infant({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
})




export const metadata: Metadata = {
  title: "Юбилей",
  description: "Пригласительный",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${cormorant.className}`}>
        {children}
      </body>
    </html>
  );
}
