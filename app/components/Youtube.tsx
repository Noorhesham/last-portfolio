"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Paragraph from "./Paragraph";
import { FaYoutube } from "react-icons/fa";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const items = [
  {
    img: "/grid-black-background-neon-squares-5k-8k-7680x4320-2903 (1).png",
    href: "https://youtu.be/jdK_W5aEtec",
  },
  { img: "/nodecourse.png", href: "https://youtu.be/lAetWzfUgz8" },
  { img: "/jscourse.png", href: "https://youtu.be/f_4Y7nKSwao" },
  { img: "/reactcourse.jpg", href: "https://youtu.be/nFIVU4ni9Gk" },
  { img: "/fullstackcourse.png", href: "https://youtu.be/tLDDYY49exI" },
];
const Youtube = () => {
  const youtubeRef = useRef(null);

  useEffect(() => {
    const chars = youtubeRef.current.querySelectorAll(".char");

    const ctx = gsap.context(() => {
      gsap.to(chars, {
        y: -20,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
        ease: "power1.inOut",
      });
      gsap.from(".naruto", {
        x: 400,
        scrollTrigger: {
          trigger: ".youtube",
          start: "top 10%",
          end: "bottom bottom",
          scroller: ".main-container",
        },
      });
      ScrollTrigger.create({
        scroller: ".main-container",
        trigger: ".channel",
        start: "top 80%",
        end: "bottom top",
        animation: gsap.from(".channel", { scale: 0.4, rotate: -90, opacity: 0 }),
      });
      const media = gsap.matchMedia();
      media.add("(min-width: 768px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".youtube2",
              start: "top 2%",
              scrub: true,
              scroller: ".main-container",
              end: () => "+=1000",
              pin: true,
            },
          })
          .to(".slideshow3", { xPercent: -80 });
      });
    });
    return () => ctx.revert();
  }, []);
  const overlayRefs = useRef([]);

  useEffect(() => {
    overlayRefs.current = overlayRefs.current.slice(0, items.length);
  }, [items]);

  const handleMouseEnter = (index) => {
    gsap.to(overlayRefs.current[index], {
      opacity: 1,
      scale: 1,
      width: "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(overlayRefs.current[index], {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power2.in",
    });
  };
  return (
    <section className=" bg-mainBg youtube  relative ">
      <MaxWidthWrapper className="flex w-full lg:flex-row flex-col border-b border-[#333] pb-10 overflow-hidden items-center justify-between">
        <div className="flex flex-col max-w-3xl gap-5 pt-20">
          <h2 className="  text-white font-bold uppercase">
            {" "}
            <Paragraph
              height="h-14"
              className="flex flex-col  text-3xl lg:text-6xl items-start "
              width=" w-[5px] lg:w-[15px]"
              text="content Creation on"
            />
            <span ref={youtubeRef} className=" text-3xl lg:text-6xl mt-5 lg:mt-10 flex items-center gap-4 text-red-500">
              <FaYoutube />{" "}
              {"YouTube".split("").map((char, index) => (
                <span key={index} className="char inline-block">
                  {char}
                </span>
              ))}
            </span>
          </h2>
          <Paragraph
            height="h-12"
            className="flex flex-col items-start text-xl lg:text-2xl"
            width=" w-[5px] lg:w-[15px]"
            text="I love creating content!<br>Publishing tutorials, guiding aspiring developers to<br>learn fullstack development."
          />
          <Paragraph
            height="h-12"
            className=" capitalize text-xl lg:text-2xl  text-maincolor"
            width=" w-[5px] lg:w-[15px]"
            text="sharing knowledge every week with<br> a new video."
          />
          <Button className=" w-fit bg-red-600 text-white capitalize font-semibold  rounded-full hover:bg-red-400  text-lg">
            <Link href="https://www.youtube.com/@noorboi6706/videos" target="_blank">
              Subscribe
            </Link>
          </Button>
        </div>
        <div className=" h-[500px] naruto  lg:absolute w-full lg:-right-2 lg:top-20 lg:w-1/3">
          <Image src={"/Blankhey.png"} fill className=" object-contain" alt="image" />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex youtube2 w-full relative border-b border-[#333] pb-10 overflow-hidden items-center justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex lg:flex-row flex-col gap-3 items-center">
            <div className="relative channel w-44 h-44 rounded-full overflow-hidden">
              <Image src={"/channels4_profile (3).jpg"} fill alt="naruto" />
            </div>
            <div className="flex flex-col gap-2">
              <Paragraph
                height="h-14"
                className="flex flex-col  text-4xl items-start "
                width="w-[15px]"
                text="Some of My recent Videos :) "
              />{" "}
              <span className=" caption-top capitalize text-muted-foreground">{"(my videos are in arabic)"}</span>
            </div>
          </div>
          <div className="flex lg:flex-row    lg:translate-x-32 flex-col slideshow3  z-[49]  w-full  top-40  gap-5 lg:gap-10">
            {" "}
            {Array.from({ length: 4 }).map((_, index) => (
              <Link
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                target="_blank"
                href={items[index].href}
                className="slidee w-full h-full"
                key={index}
              >
                <div
                  key={index}
                  style={{ zIndex: index % 2 === 0 ? "52" : "48" }}
                  className="  overflow-hidden w-full lg:w-[50vw] rounded-2xl  relative  h-64 lg:h-[26rem] "
                >
                  <Image fill className="slideimg object-cover" src={items[index].img} alt="" />{" "}
                  <div
                    ref={(el) => (overlayRefs.current[index] = el)}
                    className="absolute inset-0 w-0 flex items-center justify-center
                     bg-red-400 bg-opacity-50 text-white text-3xl font-bold opacity-0 scale-0 pointer-events-none"
                  >
                    Watch Now
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Youtube;
