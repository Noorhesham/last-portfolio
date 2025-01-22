"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import gsap from "gsap";
import { useSmoothScroll } from "../context/ScrollProviderContext";

const animationEnter = (): Promise<void> => {
  return new Promise((resolve) => {
    gsap.to(".piece", {
      yPercent: 0,
      autoAlpha: 1,
      stagger: 0.1,
      ease: "power3.out",
      duration: 0.5,
      onComplete: resolve,
    });
  });
};

const animationLeave = (): Promise<void> => {
  return new Promise((resolve) => {
    gsap.to(".piece", {
      yPercent: 100,
      autoAlpha: 0,
      stagger: 0.1,
      ease: "power3.in",
      duration: 0.5,
      onComplete: resolve,
    });
  });
};

const LinkTransition = ({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const { locoScroll } = useSmoothScroll();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    if (isNavigating) return; // Prevent multiple transitions
    setIsNavigating(true);

    // Start the enter animation
    await animationEnter();

    // Push the route
    router.push(href);

    // Wait for the next page to mount before leaving
    const interval = setInterval(() => {
      if (document.readyState === "complete") {
        clearInterval(interval);
       
        animationLeave().finally(() => setIsNavigating(false));
      }
    }, 200); // Polling every 100ms
  };

  return (
    <Link href={href} onClick={handleTransition} className={className || ""} {...props}>
      {children}
    </Link>
  );
};

export default LinkTransition;
