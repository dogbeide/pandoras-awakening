import type { Metadata } from "next";
import { montserrat } from "./lib/fonts";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import SubFooter from './components/footer/SubFooter';

export const metadata: Metadata = {
  title: "Home - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
        <SubFooter />
      </body>
    </html>
  );
}
