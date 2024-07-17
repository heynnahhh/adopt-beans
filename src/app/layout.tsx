import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdoptBeans",
  description: "A purrsonal project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-ecru-white dark:bg-charcoal-grey ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
