"use client";
import React, { useEffect } from "react";
import "../splitscreen.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { projects } from "../constants";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph, { charsTospans } from "./Paragraph";
import { FaArrowRight } from "react-icons/fa";
import SpaceBtn from "./SpaceBtn";
import Header from "./Header";
const AnimatedImage = dynamic(() => import("./AnimatedImage"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96  flex items-center rounded-full overflow-hidden justify-center relative mt-5">
      <Image loading="lazy" src={"/frontend.png"} fill className="object-cover" alt="laptop" />
    </div>
  ),
});
import { useIsMobile } from "../hooks/useIsMobile";
import WorkPhone from "./WorkPhone";
import Tech from "./Tech";
import LinkTransition from "./LinkTransition";
import dynamic from "next/dynamic";

const MyWork = () => {
  const [index, setIndex] = React.useState(0);
  const { isMobile } = useIsMobile();
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const height = document.querySelector(".scrolly")?.clientHeight;
      const images = gsap.utils.toArray(".bgimage");
      ScrollTrigger.create({
        trigger: ".secsec",
        scroller: ".main-container",
        start: "top top",
        end: `+=${height * 1.5}`,
        pin: true,
        animation: gsap.to(".scrolly", { y: -height * 1.5 }),
        scrub: true,
      });
      const sections = gsap.utils.toArray(".desktopContentSection");
      sections.forEach((section, i) => {
        const animation = gsap.timeline({});

        animation.fromTo(document.querySelector(".heading-project"), { opacity: 0 }, { opacity: 1 });

        ScrollTrigger.create({
          trigger: section,
          scroller: ".main-container",
          start: "top 65%",
          end: "bottom 80%",

          scrub: true,
          onEnter: () => {
            setIndex(i);
            gsap.fromTo(images[i], { opacity: 0 }, { opacity: 1 });
          },
          onLeaveBack: () => {
            setIndex(i);
            gsap.fromTo(images[i], { opacity: 1 }, { opacity: 0 });
          },
          onLeave: () => {
            setIndex(i);
          },
          onEnterBack: () => setIndex(i),
          animation,
        });
      });
    });
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile]);
  if (isMobile) return <WorkPhone />;
  return (
    <div className="bg-mainBg">
      <MaxWidthWrapper className="   text-base ">
        <Header text="My Work" text2="Most Recent Work By Noor Boi" />
      </MaxWidthWrapper>
      <>
        {" "}
        <section className="  flex secsec  items-center h-screen overflow-hidden justify-between relative bg-mainBg">
          {projects.slice(0, 4).map((project, i) => (
            <div key={i} className={`bgimage scale-110  opacity-0  fixed inset-0  bg-move  grayscale w-[60%] h-screen`}>
              <Image
                key={i}
                src={Array.isArray(project.img) ? project.img[0] : project.img}
                alt={project.title}
                fill
                className="  object-cover"
              />
              <div className=" absolute bg-black/80 w-full h-full"></div>
            </div>
          ))}
          <div className="top-0  border-b border-gray-400 flex items-start gap-8 left-[65%] absolute">
            <div className=" flex flex-col mt-20 gap-3 ">
              {projects.slice(0, 4).map((project, i) => (
                <div
                  key={i}
                  className={`text-sm font-normal flex items-start gap-2 duration-150 ${
                    i === index ? "text-white" : "text-gray-200/50"
                  } text-center md:text-left `}
                >
                  0{i + 1} {charsTospans(project.title, "", "", "h-4", "")}
                </div>
              ))}
            </div>
            <span className=" text-[10vw] font-bold  text-white z-20">0{index + 1}</span>
          </div>
          <MaxWidthWrapper className=" absolute scrolly left-0 top-1/2 pt-20 z-30 w-[60%]">
            {projects.slice(0, 4).map((project, i) => (
              <MaxWidthWrapper key={i} className="desktopContentSection   w-full relative">
                <div className=" h-80 my-auto w-[40vw] overflow-hidden rounded-2xl relative">
                  <Image
                    key={i}
                    src={Array.isArray(project.img) ? project.img[0] : project.img}
                    alt={project.title}
                    fill
                    className="desktopPhoto  object-cover"
                  />
                </div>
              </MaxWidthWrapper>
            ))}
          </MaxWidthWrapper>
          <MaxWidthWrapper className="  z-40 flex flex-col   absolute w-[40%] left-[60%] bottom-20  ">
            <div className="border-b w-full max-w-md border-b-gray-400 items-center py-2 capitalize text-sm text-white flex justify-between">
              <LinkTransition href="/projects">view all</LinkTransition>
              <FaArrowRight className=" w-3 h-3 text-white" />
            </div>

            <div className=" flex flex-col gap-2">
              <div className=" mt-2">
                <Tech list={projects[index].iconLists} />
              </div>
              <h2 className="text-3xl py-1 font-bold text-white text-center md:text-left h-14 heading-project">
                {charsTospans(
                  projects[index].title,
                  "text-3xl lg:text-6xl font-normal  text-white text-center md:text-left",
                  "w-[10px]",
                  "h-16",
                  "heading-project"
                )}
              </h2>
            </div>
          </MaxWidthWrapper>
        </section>
      </>

      <MaxWidthWrapper className=" m-auto  w-full">
        <div className=" border-t py-5 w border-gray-400 flex items-center gap-5 flex-col">
          <Paragraph
            className=" text-2xl lg:text-4xl"
            height=" h-10 "
            width="w-[10px]"
            text="Just a few of my projects"
          />
          <LinkTransition href={"/projects"}>
            <SpaceBtn>
              <span className=" text-white z-20"> View More</span>
            </SpaceBtn>
          </LinkTransition>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper noPadding className=" flex lg:flex-row flex-col items-center justify-between">
        <p className=" lg:text-4xl   capitalize  gap-1   m-auto font-semibold text-white max-w-xl">
          With skills sharpened, I dove into{" "}
          <span className=" inline  text-maincolor2">freelancing on the weekends{"  "}</span>
          nothing felt better than delivering powerful, polished websites to happy clients. 🏆
        </p>
        <div className="  w-full h-fit  lg:-mt-40  relative">
          <AnimatedImage data="animate8.json" className=" w-full h-full " />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MyWork;
