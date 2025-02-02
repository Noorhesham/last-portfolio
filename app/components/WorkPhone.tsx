import Image from "next/image";
import React from "react";
import Paragraph from "./Paragraph";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Tech from "./Tech";
import SpaceBtn from "./SpaceBtn";
import AnimatedImage from "./AnimatedImage";
import LinkTransition from "./LinkTransition";
import Visit from "./Visit";
import { projects } from "../constants";
import Header from "./Header";

const WorkPhone = ({ full }: { full?: boolean }) => {
  const projectsUsed = full ? projects : projects.slice(0, 4);
  return (
    <>
      <MaxWidthWrapper className="   text-base ">
        <Header text="My Work" text2="Most Recent Work By Noor Boi" />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex bg-mainBg flex-col items-center gap-6">
        {projectsUsed.map((project, i) => (
          <div key={i} className=" bg-[#1E1E1E] w-full rounded-2xl overflow-hidden">
            <LinkTransition href={`/project/${project.id}`} className=" block w-full h-52  relative">
              <Image
                src={Array.isArray(project.img) ? project.img[0] : project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </LinkTransition>
            <div className=" px-4 p-2">
              <Paragraph animate={false} text={project.title} height="h-10" />
              <Tech list={project.iconLists} />
              <Visit project={project} />
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
      {!full && (
        <>
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
                  {" "}
                  <span className=" text-white z-20">View More</span>
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
        </>
      )}
    </>
  );
};

export default WorkPhone;
