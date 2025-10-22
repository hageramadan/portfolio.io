import "./globals.css";
import { type ReactNode } from "react";
import ClientLayout from "./components/ClientLayout";
import { El_Messiri, Roboto } from "next/font/google";
import { LanguageProvider } from "../src/context/LanguageContext";
import { HomeDataProvider } from "../src/context/HomeDataContext";
import ScrollRestorationHandler from "./components/ScrollRestorationHandler";

export const metadata = {
  title: "My Portfolio",
  description: "Professional & Creative Design Solution",
};

const elMessiri = El_Messiri({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-el-messiri",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${elMessiri.variable} ${roboto.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.vercel.app" />
      </head>
      <body>
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
