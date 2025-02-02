"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

// Lazy-load animation files to avoid unnecessary imports
const animationMap: Record<string, () => Promise<any>> = {
  "animate8.json": () => import("../data/animate8.json"),
  "animate9.json": () => import("../data/animate9.json"),
  "coffe.json": () => import("../data/coffe.json"),
  "dream.json": () => import("../data/dream.json"),
};

const AnimatedImage = ({ data = "animate1.json", className }: { data?: string; className?: string }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (animationMap[data]) {
      animationMap[data]().then((mod) => setAnimationData(mod.default));
    }
  }, [data]);

  if (!isClient || !animationData) {
    return <Image width={2000} height={2000} alt="animation" src="/placeholder.png" />;
  }

  return <Lottie loop play animationData={animationData} className={`${className || "max-w-[50%]"}`} />;
};

export default AnimatedImage;
