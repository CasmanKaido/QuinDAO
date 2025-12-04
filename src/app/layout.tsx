import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Web3ModalProvider } from "@/context/Web3Modal";
import { ToastProvider } from "@/components/ToastProvider";
import { NotificationProvider } from "@/context/NotificationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuinDAO - Watch Party Voting",
  description: "Real-time DAO voting with live watch party features powered by Reown",
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
        <Web3ModalProvider>
          <NotificationProvider>
            {children}
            <ToastProvider />
          </NotificationProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
