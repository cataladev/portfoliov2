import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

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
  title: "Carlos Catala",
  description: "Carlos Catala is a undergraduate student at the University of Central Florida and an aspiring software engineer.",
  keywords:[
        "Carlos Catala",
        "UCF",
        "University of Central Florida",
        "Student",
        "Software Engineer",
        "Web Development",
        "KnightHacks",
        "Hackathons",
        "Programming",
        "Fullstack",
    ],
    openGraph: {
      type: "website",
      title: "Carlos Catala",
      description:
      "Carlos Catala is a undergraduate student at the University of Central Florida and an aspiring software engineer.",
      url: "https://catala.dev",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
