import HeadNavbar from "./HeadNavbar";
import Navbar from "./Navbar";
import React, { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children}:LayoutProps ) {
  return (
    <>
      <HeadNavbar />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
