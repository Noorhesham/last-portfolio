"use client";

import dynamic from "next/dynamic"; // Import dynamic for client-side loading
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web"; // Import lottie-web for direct DOM manipulation

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const animationMap = {
  "animate1.json": () => import("../data/animate1.json"),
  "animate2.json": () => import("../data/animate2.json"),
  "animate3.json": () => import("../data/animate3.json"),
  "animate4.json": () => import("../data/anime.json"),
  "animate5.json": () => import("../data/animate5.json"),
  "animate6.json": () => import("../data/animate6.json"),
  "animate7.json": () => import("../data/animate7.json"),
  "animate8.json": () => import("../data/animate8.json"),
  "animate9.json": () => import("../data/animate9.json"),
  "animate10.json": () => import("../data/animate10.json"),
  "bgocean.json": () => import("../data/bgocean.json"),
  "diver.json": () => import("../data/diver.json"),
  "coffe.json": () => import("../data/coffe.json"),
  "treature.json": () => import("../data/treasure.json"),
  "dream.json": () => import("../data/dream.json"),
};

const AnimatedImage = ({ data = "animate1.json", className }: { data?: string; className?: string }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Only run this effect on the client-side
  useEffect(() => {
    setIsClient(true);

    // Dynamically load the animation data
    if (animationMap[data]) {
      animationMap[data]().then((mod) => setAnimationData(mod.default));
    }
  }, [data]);

  useEffect(() => {
    if (!animationContainerRef.current || !animationData) return;

    // Load and initialize the lottie-web animation
    const animationInstance = lottie.loadAnimation({
      container: animationContainerRef.current, // The container element
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    animationInstance.addEventListener("DOMLoaded", () => {
      const svgElement = animationContainerRef.current?.querySelector("svg");

      const gElements = svgElement?.querySelectorAll("g");
      console.log(gElements);

    });

    return () => {
      animationInstance.destroy();
    };
  }, [animationData]);

  if (!isClient || !animationData) {
    return <Image width={2000} height={2000} alt="animation" src="/placeholder.png" />;
  }

  return (
    <div ref={animationContainerRef} className={`${className || "max-w-[50%]"}`} />
  );
};

export default AnimatedImage;
