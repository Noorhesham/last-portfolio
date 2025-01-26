import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaStar, FaLightbulb, FaLaptopCode, FaUsers, FaCircle, FaShieldAlt, FaYoutube } from "react-icons/fa";
import { useIsMobile } from "../hooks/useIsMobile";

const TvMove = () => {
  const { isMobile } = useIsMobile();
  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);
  const all = React.useRef<HTMLDivElement>(null);

  let direction = -1;
  let xPercent = 0;
  useEffect(() => {
    if (!isMobile) requestAnimationFrame(animate);
  }, [isMobile]);
  const animate = () => {
    if (isMobile) return;
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const wordsAndIcons = [
    { word: "Creative", icon: <FaLightbulb className="text-yellow-400" /> },
    { word: "Leader", icon: <FaStar className="text-blue-400" /> },
    { word: "MERN Developer", icon: <FaLaptopCode className="text-green-400" /> },
    { word: "Freelancer", icon: <FaCircle className="text-pink-400" /> },
    { word: "Youtuber", icon: <FaYoutube className="text-red-400" /> },
    { word: "Focused", icon: <FaLightbulb className="text-orange-400" /> },
    { word: "+4 Years", icon: <FaShieldAlt className="text-gray-400" /> },
    { word: "Passionate", icon: <FaStar className="text-yellow-400" /> },
    { word: "Problem Solver", icon: <FaLightbulb className="text-blue-400" /> },
    { word: "Innovative", icon: <FaUsers className="text-pink-400" /> },
  ];
  if (isMobile) return null;
  return (
    <div className="relative  py-4 text-lg overflow-hidden text-orange-500">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap flex" ref={firstText}>
        {wordsAndIcons.map((item, index) => (
          <span key={index} className="mx-4 flex items-center gap-2">
            {item.icon} <span className="uppercase ">{item.word}</span>
          </span>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-full whitespace-nowrap flex" ref={secondText}>
        {wordsAndIcons.map((item, index) => (
          <span key={index} className="mx-4 flex items-center gap-2">
            {item.icon} <span className="uppercase ">{item.word}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TvMove;
