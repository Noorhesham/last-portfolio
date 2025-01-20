import { projects } from "@/public";
import Image from "next/image";
import React from "react";
import Paragraph from "./Paragraph";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Tech from "./Tech";
import SpaceBtn from "./SpaceBtn";
import Link from "next/link";
import AnimatedImage from "./AnimatedImage";

const WorkPhone = () => {
  return (
    <>
      {" "}
      <MaxWidthWrapper className="flex bg-mainBg flex-col items-center gap-4">
        {projects.slice(0, 4).map((project, i) => (
          <div key={i} className=" bg-[#1E1E1E] w-full rounded-2xl overflow-hidden">
            <div className=" w-full h-44 relative">
              <Image
                src={Array.isArray(project.img) ? project.img[0] : project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className=" p-2">
              <Paragraph text={project.title} height="h-10" />
            </div>
            <Tech list={project.iconLists} />
          </div>
        ))}
      </MaxWidthWrapper>{" "}
      <MaxWidthWrapper className=" m-auto  w-full">
        <div className=" border-t py-5 w border-gray-400 flex items-center gap-5 flex-col">
          <Paragraph
            className=" text-2xl lg:text-4xl"
            height=" h-10 "
            width="w-[10px]"
            text="Just a few of my projects"
          />
          <SpaceBtn>
            {" "}
            <Link className=" text-white z-20" href={"/projects"}>
              View More
            </Link>
          </SpaceBtn>
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
    </>
  );
};

export default WorkPhone;
