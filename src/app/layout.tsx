import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components";
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
  title: "DS Labs | Selective Digital Studio",
  description:
    "DS Labs is a selective digital studio specializing in AI tools, web applications, and backend systems. We build software that works.",
  keywords: [
    "AI tools",
    "web development",
    "backend systems",
    "digital studio",
    "web applications",
    "automation",
  ],
  authors: [{ name: "DS Labs" }],
  openGraph: {
    title: "DS Labs | Selective Digital Studio",
    description:
      "DS Labs is a selective digital studio specializing in AI tools, web applications, and backend systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DS Labs | Selective Digital Studio",
    description:
      "DS Labs is a selective digital studio specializing in AI tools, web applications, and backend systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
