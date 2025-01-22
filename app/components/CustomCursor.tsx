"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const innerCursor = innerCursorRef.current;

    if (!cursor || !innerCursor) return;

    // Track mouse position and instantly move the custom cursors
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      gsap.set(cursor, { x, y });
      gsap.set(innerCursor, { x, y });
    };

    // Scale cursor on hover
    const addHoverEffect = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#maincolor",
        duration: 0.2,
        ease: "power3.out",
        borderColor: "#fff", // Outline color on hover
        borderWidth: 4, // Outline thickness on hover
      });
      gsap.to(innerCursor, {
        scale: 0.5,
        backgroundColor: "#fff",
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const removeHoverEffect = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#222",
        duration: 0.2,
        ease: "power3.out",
        borderColor: "#222", // Reset outline color
        borderWidth: 2, // Reset outline thickness
      });
      gsap.to(innerCursor, {
        scale: 1,
        backgroundColor: " #5629d9",
        duration: 0.2,
        ease: "power3.out",
      });
    };

    // Attach mousemove event
    document.addEventListener("mousemove", moveCursor);

    // Attach hover effects to specific elements
    const hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", addHoverEffect);
      target.addEventListener("mouseleave", removeHoverEffect);
    });

    // Hide original cursor
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", addHoverEffect);
        target.removeEventListener("mouseleave", removeHoverEffect);
      });
      document.body.style.cursor = ""; // Restore default cursor on unmount
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none bg-[#222] z-50"
        style={{
          transform: "translate(-50%, -50%)",
          border: "2px solid #222", // Initial outline style
          transition: "border-color 0.2s ease, border-width 0.2s ease", // Smooth outline transition
        }}
      />
      <div
        ref={innerCursorRef}
        className="inner-cursor fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none bg-maincolor z-50"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
