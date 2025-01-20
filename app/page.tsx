"use client";
import Intro from "./components/Intro";
import MyWork from "./components/MyWork";
import Youtube from "./components/Youtube";
import Me from "./components/Me";
import WhoAmI from "./components/WhoAmI";
import HealTheWorld from "./components/HealTheWorld";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="bg-mainBg relative">
      <Intro />
      <MyWork />
      <Me />
      <WhoAmI />
      <Youtube />
      <HealTheWorld />
      <Contact />
      <Footer />
    </section>
  );
}
