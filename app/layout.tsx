import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "./component/layouts/Hero/Hero";
import Navbar from "./component/layouts/Navbar/Navbar";
import Footer from "./component/layouts/Footer/Footer";
import About from "./component/layouts/About/About";
import Destination from "./component/layouts/Destination/Destination";

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
      <body className={inter.className}>
        <Hero />
        <Navbar />
        <About />
        <Destination />
        <Footer />
        {children}
      </body>
    </html>
  );
}
