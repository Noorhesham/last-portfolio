import type { Metadata } from "next";
import { Belanosima } from "next/font/google";
import "./globals.css";
import "locomotive-scroll/src/locomotive-scroll.scss";

import { LoaderProvider } from "./context/LoaderProvider";
import { SmoothScrollProvider } from "./context/ScrollProviderContext";
import NavBar from "./components/NavBar";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));
const belanosima = Belanosima({
  subsets: ["latin"],
  weight: ["400", "700", "700"],
  variable: "--font-belanosima",
});

export const metadata: Metadata = {
  title: "Noor Hesham Portfolio",
  icons: { icon: "/me.png" },
  openGraph: {
    type: "website",
    title: "Noor Hesham Portfolio",
    description: "MERN Stack Developer specializing in React, Next.js, TypeScript, Node.js, MongoDB, and Tailwind CSS.",
    images: [
      {
        url: "https://noor-hesham-boi.io/noor.jpg",
        alt: "Noor Hesham Portfolio",
      },
    ],
    url: "https://noor-hesham-boi.io/",
  },
  description:
    "MERN Stack Developer specializing in React, Next.js, TypeScript,Node .js,Mongo DB and Tailwind CSS. Proven track record of crafting high-performance web applications with sleek, user-friendly interfaces. Adaptable and detail-oriented, committed to delivering top-notch solutions. Passionate about staying ahead in technology and contributing to dynamic teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${belanosima.className} dark antialiased`}>
        <CustomCursor />
        <LoaderProvider>
          <>
            <PageTransition />
            <SmoothScrollProvider>
              <NavBar />
              <main className="main-container">
                {children}
                <Contact />
                <Footer />
              </main>
            </SmoothScrollProvider>
          </>
        </LoaderProvider>
      </body>
    </html>
  );
}
