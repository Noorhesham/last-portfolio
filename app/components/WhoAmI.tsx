import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./Paragraph";
import Image from "next/image";
import Header from "./Header";

const WhoAmI = () => {
  return (
    <section className=" bg-mainBg">
      <MaxWidthWrapper>
        <Header bordertop text="About" text2="Noor Boi " />

        <div className="flex lg:px-20  lg:flex-row flex-col gap-4 mt-4 lg:mt-8 justify-center">
          <div className=" max-w-md flex flex-col gap-5 mb-auto">
            <Paragraph text="About Noor Boi" className=" text-lg" height="h-10" />
            <Paragraph
              className=" text-sm"
              height="h-10"
              text="I’m Ritvikram, the ninjaa-designer and I'm the unusual designer who bring ideas to life that even AI would think twice about. Not a fan of long paragraphs, so I’ll stop here"
            />
          </div>
          <div className=" overflow-hidden rounded-2xl  w-full lg:w-[55vw] h-[50vh] lg:h-[80vh]  relative">
            <Image src="/noor.jpg" alt="me" fill className=" object-cover" />
          </div>
          <div className="max-w-md flex flex-col gap-5 mt-auto">
            <Paragraph className="  text-lg" text="About Noor Boi" height="h-10" />
            <Paragraph
              className=" text-sm"
              height="h-10"
              text="I’m Ritvikram, the ninjaa-designer and I'm the unusual designer who bring ideas to life that even AI would think twice about. Not a fan of long paragraphs, so I’ll stop here"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WhoAmI;
