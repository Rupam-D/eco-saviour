import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TrpcProvider from "@/components/Trpc-Provider";
import { cn } from "@/lib/utils";
import Topbar from "@/components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TrpcProvider>
      <body className={cn("bg-gray-100 min-h-screen", inter.className)}>
      <Topbar />
        {children}
        </body>
      </TrpcProvider>
      
    </html>
  );
}
