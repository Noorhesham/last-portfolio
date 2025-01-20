"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedImage from "./AnimatedImage";
import Clouds from "./Clouds";
import { ScrollTrigger } from "gsap/all";

const dreams = [
  "Heal the World",
  "Help Humanity",
  "Leave Reasons to Be Missed",
  "Written in History",
  "I Will Never Give Up",
  "I Will Be the Best Frontend Developer",
  "Become the Biggest Arabic Influencer",
];

const HealTheWorld = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        scroller: ".main-container",
        start: "center 30%",
        end: () => "+=400",
        trigger: ".dream",
        animation: gsap.to(".dteamtext", { y: 300 }),
        scrub: true,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
            scroller: ".main-container",
          },
        })

        .to(
          ".dream",
          {
            y: () => -200 - Math.random() * 200, // Randomize movement upwards
            x: () => Math.random() * 400 - 200, // Randomize horizontal position
            opacity: 1,
            stagger: 0.3,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  const colors = ["#FF5733", "#6C3483"];

  return (
    <section
      ref={sectionRef}
      className="relative  bg-[#eeeeef] flex flex-col items-center justify-center overflow-hidden"
    >
      <h1 className=" text-[15vw] dteamtext font-bold text-mainBg absolute left-1/2  bottom-[20%]  -translate-x-1/2 z-40 text-nowrap">
        DREAM BIG
      </h1>
      <div className=" bottom-0 absolute left-0 w-full h-full">
        <Clouds />
      </div>
      <AnimatedImage className=" w-full" data="dream.json" />
      <div className="absolute top-[30%] w-full h-full flex flex-wrap items-center justify-center">
        {dreams.map((dream, index) => (
          <div
            key={index}
            className="dream rounded-full p-4 m-4 text-center font-bold opacity-0"
            style={{
              backgroundColor: colors[index % colors.length],
              color: "white",
              minWidth: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {dream}
          </div>
        ))}
      </div>
      <div className="bg-[#eeeeef] h-screen"></div>
    </section>
  );
};

export default HealTheWorld;
