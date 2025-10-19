import "./globals.css";
import type { ReactNode } from "react";
import ClientLayout from "../src/components/ClientLayout";
import { El_Messiri, Roboto } from "next/font/google";

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
  
  const isArabic = false;

  return (
    <html
      lang={isArabic ? "ar" : "en"}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${elMessiri.variable} ${roboto.variable}`}
    >
      <body className={isArabic ? "font-arabic" : "font-english"}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
