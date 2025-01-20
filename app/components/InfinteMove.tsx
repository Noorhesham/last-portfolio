import gsap from "gsap";
import React, { ReactNode, useEffect, useRef } from "react";

const InfiniteMoveSection = ({ list, className }: { list: ReactNode[]; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstTextWidth = firstTextRef.current?.offsetWidth || 0;

    if (containerRef.current && firstTextWidth > 0) {
      // i will set the second text ref to be after the first text
      gsap.set(secondTextRef.current, { x: firstTextWidth + 10 }); // Set the second text to appear right after the first
      // i will move both of them the same direction with the x set as the value
      gsap.to([firstTextRef.current, secondTextRef.current], {
        x: `-=${firstTextWidth}`, // Move left by the width of the first text
        duration: 10, // Adjust speed
        ease: "none",
        repeat: -1, // Loop infinitely
        modifiers: {
          x: (x) => {
            return `${parseFloat(x) % firstTextWidth}px`;
          },
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={`${className || ""} relative w-full overflow-hidden`}>
      <div ref={firstTextRef} className="absolute whitespace-nowrap flex">
        {list}
      </div>
      <div ref={secondTextRef} className="absolute whitespace-nowrap flex">
        {list}
      </div>
    </div>
  );
};

export default InfiniteMoveSection;
