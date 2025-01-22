import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./Paragraph";
import Image from "next/image";
import Header from "./Header";
import { Button } from "@/components/ui/button";

const WhoAmI = () => {
  return (
    <section className="flex flex-col items-center  bg-mainBg">
      <MaxWidthWrapper>
        <Header bordertop text="About" text2="Noor Boi " />

        <div className="flex lg:px-20  lg:flex-row flex-col gap-4 mt-4 lg:mt-8 justify-center">
          <div className=" max-w-md flex flex-col gap-5 mb-auto">
            <Paragraph text="About Noor Boi" className=" text-lg" height="h-10" />
            <Paragraph
              className=" text-sm"
              height="h-10"
              text="I create Smooth , sleek Animations,Deleiver Super fast ! and i am full stack developer"
            />
          </div>
          <div className=" overflow-hidden rounded-2xl  w-full lg:w-[55vw] h-[50vh] lg:h-[80vh]  relative">
            <Image src="/noor.jpg" alt="me" fill className=" object-cover" />
          </div>
          <div className="max-w-md flex flex-col gap-5 mt-auto">
            <Paragraph className="text-lg font-semibold !text-maincolor" text="What I Do" height="h-10" />
            <Paragraph
              className="text-sm"
              height="h-10"
              text="By day, I’m a second-year college student leading a team of 10 on a mission to create something world-changing.<br>By night? I’m a full-stack adventurer, diving deep into Next.js realms,slaying bugs, and syncing MongoDB like a pro. When I’m not coding, you’ll find me brainstorming the next big thing or arguing with Stripe APIs for fun. Multi-role management? That’s just a Tuesday for me."
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <a href="/noorhesham.pdf" className=" mx-auto self-center" download="Noor-Hesham-cv">
        <Button className=" rounded-full px-4 py-8 text-lg lg:text-3xl my-6">Download CV ?</Button>
      </a>{" "}
    </section>
  );
};

export default WhoAmI;
