"use client";
import React, { useEffect } from "react";
import Logo from "./Logo";
import Paragraph from "./Paragraph";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import gsap from "gsap";
import CallMe from "./Call";

const Contact = () => {
  useEffect(() => {
    gsap.to(".smoke", {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <section className=" relative bg-mainBg">
      <div className="  relative smoke -top-14 h-96 w-full left-1/2 -translate-x-1/2">
        <Image src={"/byesmoke.svg"} fill className=" object-contain" alt="smoke" />
      </div>
      <div className=" -mt-28  ">
        <MaxWidthWrapper noPadding className="flex justify-center items-center mx-auto flex-col gap-4">
          <Logo />
          <blockquote className=" text-4xl font-extrabold uppercase text-maincolor">
            "If Your Dreams do not scare you, they are too small !"
          </blockquote>
     
          <Paragraph
            width="w-[10px]"
            height="h-12"
            className=" !flex-nowrap text-xl font-semibold "
            text="Got a project? Let’s vibe together and <br>make it ninjaa-precise—get in touch!"
          />
        </MaxWidthWrapper>
      </div>
      <CallMe />
    </section>
  );
};

export default Contact;
