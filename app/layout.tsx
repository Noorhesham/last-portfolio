import type { Metadata } from "next";
import { Belanosima } from "next/font/google";
import "./globals.css";
import "locomotive-scroll/src/locomotive-scroll.scss";

import { LoaderProvider } from "./context/LoaderProvider";
import { SmoothScrollProvider } from "./context/ScrollProviderContext";
import NavBar from "./components/NavBar";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const belanosima = Belanosima({
  subsets: ["latin"],
  weight: ["400", "700", "700"],
  variable: "--font-belanosima",
});

export const metadata: Metadata = {
  title: "Noor Hesham Portfolio",
  icons: { icon: "/boi.png" },
  openGraph: {
    type: "website",
    title: "Noor Hesham Portfolio",
    description: "MERN Stack Developer specializing in React, Next.js, TypeScript, Node.js, MongoDB, and Tailwind CSS.",
    images: [
      {
        url: "/noor.jpg",
        alt: "Noor Hesham Portfolio",
      },
    ],
    url: "https://new-portfolio-noor-hesham.vercel.app",
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
