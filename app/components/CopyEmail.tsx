"use client";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import SpaceBtn from "./SpaceBtn";

const Lottie = React.lazy(() => import("lottie-react"));

const CopyEmail = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const lottieRef = useRef<any>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);

    // Reset the state after 1 second
    setTimeout(() => {
      setCopiedType(null);
    }, 1000);
  };

  useEffect(() => {
    if (copiedType && lottieRef.current) {
      lottieRef.current.stop();
      lottieRef.current.play();
    }
  }, [copiedType]);

  return (
    <div className="mt-5 text-white flex flex-col gap-4 items-center z-40 relative">
      {/* Lazy-loaded Lottie component */}
      <React.Suspense fallback={<div>Loading animation...</div>}>
        <div className={`absolute -bottom-5 right-0 ${copiedType ? "block" : "hidden"}`}>
          <Lottie
            lottieRef={lottieRef}
            animationData={require("../data/conffite.json")}
            loop={false}
            autoplay={false}
            style={{ width: 200, height: 200 }}
          />
        </div>
      </React.Suspense>

      <SpaceBtn
        className="relative text-white z-30 hover:text-white"
        onClick={() => handleCopy("noordragon2004@gmail.com", "email")}
      >
        <span className="z-20">{copiedType === "email" ? "Email is Copied!" : "Copy my email address"}</span>
      </SpaceBtn>
      <SpaceBtn
        className="relative text-white hover:text-white z-30"
        onClick={() => handleCopy("+201145838187", "phone")}
      >
        <span className="z-20">{copiedType === "phone" ? "Phone Number is Copied!" : "Copy my Phone Number"}</span>
      </SpaceBtn>
    </div>
  );
};

export default CopyEmail;
