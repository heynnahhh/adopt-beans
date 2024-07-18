import type { Metadata } from "next";
import Script from "next/script";
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
      <body className={`bg-ecru-white text-charcoal-grey dark:text-white dark:bg-gradient-to-b dark:from-charcoal-grey dark:to-black ${inter.className}`}>
        <Header />
        {children}
        <Footer />
        <Script id="theme" strategy="beforeInteractive">
          {`if(localStorage.theme === 'dark' || ( !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
              document.documentElement.classList.add('dark');
            }`
          }
        </Script>
      </body>
    </html>
  );
}
