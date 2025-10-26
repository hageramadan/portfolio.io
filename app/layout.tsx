import "./globals.css";
import { type ReactNode } from "react";
import ClientLayout from "./components/ClientLayout";
import { El_Messiri, Roboto } from "next/font/google";
import { LanguageProvider } from "../src/context/LanguageContext";
import { HomeDataProvider } from "../src/context/HomeDataContext";
import ScrollRestorationHandler from "./components/ScrollRestorationHandler";
import Head from "next/head";

export const metadata = {
  title: "My Portfolio",
  description: "Professional & Creative Design Solution",
};

const elMessiri = El_Messiri({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-el-messiri",
  display: "swap",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${elMessiri.variable} ${roboto.variable}`}>
      <Head>
       
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
        />
      </Head>

      <body className={`${elMessiri.className} ${roboto.className}`}>
        <LanguageProvider>
          <HomeDataProvider>
            <ScrollRestorationHandler />
            <ClientLayout>{children}</ClientLayout>
          </HomeDataProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
