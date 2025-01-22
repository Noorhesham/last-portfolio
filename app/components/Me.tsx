"use client";
import React, { useEffect } from "react";
import { charsTospans } from "./Paragraph";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaBookSkull, FaWandMagicSparkles } from "react-icons/fa6";
import Card from "./Card";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { tech } from "@/public";
import Image from "next/image";
import InfiniteMoveSection from "./InfinteMove";
import { Globe } from "./Globe";
import Switcher from "./Switcher";
import CopyEmail from "./CopyEmail";
import { FcContacts } from "react-icons/fc";
import MoleskineNotebooks from "./Books";
import AnimatedImage from "./AnimatedImage";
import { FaLanguage } from "react-icons/fa";
import Counter from "./Counter";
import LinkTransition from "./LinkTransition";
import SpaceBtn from "./SpaceBtn";

const Me = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".secsecsec",
        start: "top 90%",
        end: "24% center",
        scroller: ".main-container",
        animation: gsap.timeline().to(
          ".meow span",
          {
            autoAlpha: 1,
            y: 0,
            stagger: { amount: 0.5 },
          },
          "<"
        ),
        scrub: true,
      });
      ScrollTrigger.create({
        trigger: ".circle1",
        animation: gsap.from(".circle1", { clipPath: "circle(86.1% at 50% 0)" }),
        scroller: ".main-container",
        scrub: true,
      });
    });
    return () => ctx.revert();
  });

  return (
    <section className="secsecsec relative bg-light">
      <section className=" scrollup mb-auto circle1 justify-center flex items-center  bg-black h-[80vh] lg:h-screen  relative  w-full  z-40">
        <div className=" mb-auto lg:my-0  mt-20">
          {charsTospans(
            `The friendly neighborhood<br> MERN Stack Developer <br>with Next.js`,
            " text-3xl lg:text-7xl opacity-0  translate-y-12 text-white font-bold text-center text11 max-w-2xl mx-auto",
            "w-[10px]",
            "h-16",
            "meow"
          )}
        </div>
      </section>

      <MaxWidthWrapper className=" grid gap-5 grid-cols-2 lg:grid-cols-9">
        <div className="flex flex-col gap-5 col-span-3">
          <div className="flex flex-col gap-1">
            <h2 className=" text-muted-foreground">BEYOND PORTFOLIO</h2>
            <h3 className=" text-2xl lg:text-4xl">Let's know more about me</h3>
          </div>
          <Card nohover icon={<FaLanguage />} title={"Spoken Languages"} paragraph="Watachiwa Noor des !">
            <div className=" w-full h-64 flex items-center justify-center relative mt-5">
              <Globe className=" absolute -right-10 -bottom-full  " />
            </div>
            <Switcher />
          </Card>
        </div>
        <div className=" flex flex-col gap-5 col-span-3">
          <Card
            icon={<FaWandMagicSparkles />}
            title={"My tech staks"}
            paragraph="If you like using these tools too, we'll get along just fine."
          >
            <div className=" mt-5">
              <InfiniteMoveSection
                className="h-20"
                list={
                  <div className="flex w-full overflow-hidden max-w-full gap-5">
                    {tech.map((t, i) => (
                      <div
                        key={i}
                        className=" p-2 rounded-lg w-16 h-16 aspect-square relative bg-slate-200 flex items-center justify-center"
                      >
                        <Image src={t} alt="" fill className=" object-contain" />
                      </div>
                    ))}
                  </div>
                }
              />
            </div>
          </Card>
          <Card className=" " title="Want To contact me ?" icon={<FcContacts />} nohover>
            <CopyEmail />
          </Card>
        </div>
        <div className=" flex flex-col gap-5 col-span-3">
          <Card img={"/masoura.png"}>
            <div className=" text-muted-foreground font-thin bg-white absolute bottom-4 py-1.5 px-3 rounded-full">
              📍 Mansoura , Egypt
            </div>
          </Card>
          <Card
            nohover
            icon={<FaBookSkull />}
            title={"I Keep evolving my skills"}
            paragraph="From enhancing my problem solving skills to keeping myself updated with new tech"
          >
            <MoleskineNotebooks />
          </Card>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className=" relative flex lg:flex-row flex-col items-start justify-between">
        <div className=" relative h-96 w-full">
          <AnimatedImage data="coffe.json" className=" max-h-96  w-full h-full" />
        </div>
        <p className=" lg:text-2xl   capitalize  gap-1   m-auto font-semibold text-gray-800 max-w-xl">
          Now, I'm pushing boundaries with Next.js,
          <span className=" inline text-maincolor2"> diving into 3D animations with Three.js</span>, and bringing my web
          creations to life using GSAP. It's a constant learning adventure, and I'm loving every moment of mastering new
          tools. 🚀
        </p>
      </MaxWidthWrapper>
      <div className="flex my-5 flex-col items-center">
      <Counter />
      <LinkTransition className=" mb-5 mx-auto" href={"/about"}>
        <SpaceBtn>
          {" "}
          <span className=" text-white z-20">More About My Experience!</span>
        </SpaceBtn>
      </LinkTransition>
      </div>
    </section>
  );
};

export default Me;
