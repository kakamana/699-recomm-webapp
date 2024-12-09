import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OSINT Recommendations",
  description: "Kaizen's OSINT Recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Header />
          <main className="p-4">{children}</main>
        {/* {children} */}
        </div>
      </body>
    </html>
  );
}
