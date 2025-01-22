"use client";
import React, { useEffect, useState } from "react";
import AnimatedImage from "./AnimatedImage";
import FlexWrapper from "./FlexWrapper";
import Paragraph from "./Paragraph";
import gsap from "gsap";
import { GoArrowDownRight } from "react-icons/go";
import Ring from "./Ring";
import { FloatingDock } from "./ui/floating-dock";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { ScrollTrigger } from "gsap/all";
import TvMove from "./Infinte2";

const Intro = () => {
  const [index, setIndex] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  const specialities = [
    { text: "Mern Stack Dev.", color: "!text-green-400" },
    {
      text: "Free-Lancer",
      color: "!text-pink-400",
    },
    {
      text: "Youtuber",
      color: "!text-red-400",
    },
  ];
  useEffect(() => {
    const t = setTimeout(
      () =>
        gsap.to(".header", {
          y: -100,
          onComplete: () => {
            setIsFirst(false);
            gsap.set(".header span", { autoAlpha: 1 });
            setIndex((prev) => (prev + 1) % 3);
          },
        }),
      3000
    );
    const ctx = gsap.context(() => {
      if (!isFirst) gsap.fromTo(".header", { y: 50 }, { y: 0, duration: 0.5 });
    });
    return () => {
      ctx.revert();
      clearTimeout(t);
    };
  }, [index]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".smile", { width: 0, autoAlpha: 0, duration: 1, delay: 1 });

      ScrollTrigger.create({
        trigger: ".spacebg",
        animation: gsap.timeline().to(".portfolio", { x: -200 }).to(".floating", { y: -100 }, "<"),
        scroller: ".main-container",
        scrub: true,
        start: "top top",
        end: "bottom top",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="bg-mainBg">
      <section className="spacebg overflow-hidden bg-mainBg  min-h-screen lg:block flex flex-col h-full relative">
        <h2 className="portfolio lg:block hidden text-[14vw] font-bold uppercase text-[#313139] absolute left-1/2 -translate-x-1/2 bottom-0">
          PORTFOLIO
        </h2>
        <div className=" pt-20 lg:pt-6">
          <FlexWrapper className="  items-start justify-between">
            <div className=" z-10 relative">
              <span
                className="smile w-fit  rotate-90 absolute top-0 right-0 lg:block hidden text-7xl text-[#f1f0eb] z-50 -bottom-16 
              left-[50px]"
              >
                {")"}
              </span>

              <Paragraph
                width="w-[15px]"
                height=" h-16 lg:h-32"
                className="head-1 uppercase font-semibold"
                text="Hi , My Name <br>Is Noor"
              />
              <div className="flex mt-16 flex-col items-start gap-3">
                <GoArrowDownRight className=" text-white text-xl mr-4" />
                <Paragraph
                  text="Develop Your<br>Dream App<br>Now"
                  height="h-6"
                  className=" !items-start text-lg uppercase font-semibold"
                />
                <div className="flex items-center gap-2">
                  <Ring />
                  <Paragraph text="open to work" height="h-6" className=" text-gray-200" />
                </div>
              </div>
            </div>

            <div className="flex text-5xl lg:text-6xl  lg:w-fit w-full mt-40 font-semibold flex-col items-start gap-2">
              <h2 className=" text-gray-50 lg:ml-auto">Working As</h2>
              <div className="  overflow-hidden relative h-14">
                <Paragraph
                  height=" h-10 lg:h-14"
                  animate={isFirst}
                  text={specialities[index].text}
                  className={`header ${specialities[index].color}   !flex-nowrap text-nowrap  font-semibold 
                w-full`}
                />
              </div>
              <div className=" mt-4 ml-auto relative z-50">
                <FloatingDock
                  items={[
                    {
                      title: "GitHub",
                      href: "https://github.com/Noorhesham",
                      icon: <FaGithub className=" w-6 h-6 text-white" />,
                    },
                    {
                      title: "LinkedIn",
                      href: "https://www.linkedin.com/in/noor-elgendy-0aa84b207/",
                      icon: <FaLinkedin className=" text-white w-6 h-6" />,
                    },
                    {
                      title: "Facebook",
                      href: "https://www.facebook.com/profile.php?id=100006306765558",
                      icon: <FaFacebook className=" w-6 h-6 text-white" />,
                    },
                  ]}
                />
              </div>
            </div>
          </FlexWrapper>
          <div className=" absolute w-full bottom-0 left-1/2 -translate-x-1/2">
            <div className=" bg-orange-100 py-3  ">
              <TvMove />
            </div>
          </div>
        </div>

        <div className=" floating w-full lg:w-[40%] lg:absolute lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2 z-[1]    ">
          <AnimatedImage className=" mt-auto  lg:absolute lg:bottom-0 w-full" data="animate9.json" />
        </div>
      </section>{" "}
    </section>
  );
};

export default Intro;
