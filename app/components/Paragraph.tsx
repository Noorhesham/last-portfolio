"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { useSmoothScroll } from "../context/ScrollProviderContext";
export const charsTospans = (
  text: string,
  className: string,
  width?: string,
  height?: string,
  selectorClassName?: string
) =>
 text.split("<br>").map((line, lineIndex) => (
    <div
      className={` ${height || "h-12"} overflow-hidden ${selectorClassName || ""} line flex flex-wrap`}
      key={lineIndex}
    >
      {line.split("").map((char, charIndex) =>
        char === " " ? (
          <span key={charIndex} className={`inline-block ${width || "w-[5px]"} whitespace-nowrap`}>
            {" "}
          </span>
        ) : (
          <span className={`  ${className} inline-flex overflow-hidden`} key={charIndex}>
            {char}
          </span>
        )
      )}
    </div>
  ));

const Paragraph = ({
  text,
  className,
  animate = true,
  height,
  playAfterTL,
  timeline,
  width,
  text2,
}: {
  text: string;
  className?: string;
  animate?: boolean;
  height?: string;
  playAfterTL?: boolean;
  timeline?: gsap.core.Timeline;
  text2?: string;
  width?: string;
}) => {
  const paragraphRef = React.useRef<HTMLParagraphElement>(null);
  // const { isLoading } = useLoading();
  const { locoScroll } = useSmoothScroll();
  useEffect(() => {
    if (!animate || !locoScroll) return;

    const ctx = gsap.context(() => {
      // gsap.set(paragraphRef.current, { autoAlpha: 1 });

      //this is the paragraph animation that move each character
      const paragraphAnimation = gsap.to(paragraphRef.current?.querySelectorAll("span") as NodeListOf<HTMLElement>, {
        y: 0,
        skewX: 0,
        stagger: { amount: 0.5 },
        autoAlpha: 1,
      });

      //if there is a time line and play after boolean then append this to play after the tl i passed
      if (playAfterTL && timeline) {
        timeline.add(paragraphAnimation, "<");
      } else if (playAfterTL) {
        gsap.timeline().add(paragraphAnimation);
      } else {
        // Default ScrollTrigger animation to play this in multiple places on scroll
        ScrollTrigger.create({
          trigger: paragraphRef.current,
          start: () => "top 94%",
          end: "bottom 40%",
          animation: gsap.timeline().add(paragraphAnimation),
          scroller: ".main-container",
        });
      }
    });

    return () => ctx.revert();
  }, [animate, playAfterTL, timeline, locoScroll]);

  return (
    <div
      ref={paragraphRef}
      className={`${className || "lg:text-5xl"} flex flex-wrap flex-col    max-w-2xl  text-white font-normal`}
    >
      {text.split("<br>").map((line, lineIndex) => (
        <div className={` ${height || "h-12"} overflow-hidden line flex flex-wrap`} key={lineIndex}>
          {charsTospans(line, animate ? "opacity-0 skew-x-12 translate-y-16" : "", width, height || "h-12 ")}
        </div>
      ))}
    </div>
  );
};

export default Paragraph;
