"use client";
import React, { useEffect, useState } from "react";

const PageTransition = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth / 6);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full flex items-center pointer-events-none z-50">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="piece opacity-0 h-full bg-[#222]" style={{ width }}></div>
      ))}
    </div>
  );
};

export default PageTransition;
