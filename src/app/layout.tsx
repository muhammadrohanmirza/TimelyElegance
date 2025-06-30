import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CartSidebar from '@/components/CartSidebar';
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimelyElegance",
  description: "created by Muhammad Rohan Mirza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers> {/* ✅ Wrap everything inside Providers */}
          <Header />
          <CartSidebar />
          {children}
          <Footer />
        </Providers>
        </body>
    </html>
    
  );
}
