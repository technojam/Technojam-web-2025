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
  title: "TechnoJam - Technical Club",
  description: "Join TechnoJam, the premier technical club for innovators, developers, and tech enthusiasts. Explore cutting-edge technology, participate in events, and build the future together.",
  icons: {
    icon: '/tj.webp',
    shortcut: '/tj.webp',
    apple: '/tj.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tj.webp" type="image/webp" />
        <link rel="shortcut icon" href="/tj.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/tj.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
