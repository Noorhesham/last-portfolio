"use client";
import React, { useEffect } from "react";
import "../splitscreen.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";
import { projects } from "../constants";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./Paragraph";
import Tech from "./Tech";
import { useIsMobile } from "../hooks/useIsMobile";
import WorkPhone from "./WorkPhone";
import ImageSlider from "./ImageSlider";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import Visit from "./Visit";
import LinkTransition from "./LinkTransition";
const AllProjects = () => {
  const [index, setIndex] = React.useState(0);
  const { isMobile } = useIsMobile();
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        //desktop
        "(min-width: 601px)": () => {
          const sections = gsap.utils.toArray(".desktopContentSection").slice(1);
          const photos = gsap.utils.toArray(".desktopPhoto");
          // a container that includes all photos and as i scroll i ill move the corresponding photo to the top to appear
          gsap.set(photos, { yPercent: 100 });
          ScrollTrigger.create({
            trigger: ".gallery",
            scroller: ".main-container",
            start: "top top",
            pin: ".right",
            end: "bottom bottom",
          });
          sections.forEach((section, i) => {
            const animation = gsap.timeline().to(photos[i], { yPercent: 0 }, "<");
            ScrollTrigger.create({
              trigger: section.querySelector("h2"),
              scroller: ".main-container",
              start: "top 80%",
              end: "top 10%",
              scrub: true,
              animation,
              onEnter: () => {
                setIndex(i=>i+1);
              },
              onEnterBack: () => setIndex(i=>i-1),
            });
          });
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="  relative bg-mainBg">
      <MaxWidthWrapper className="flex font-semibold uppercase gap-2     !pt-32 lg:text-5xl text-2xl flex-col items-center max-w-2xl">
        <Paragraph height=" h-8 lg:h-14" text="MY Work !" className=" !text-maincolor2" />
        <Paragraph
          width="w-[14px]"
          className=""
          text="I ve worked on huge projects<br>full stack webapps<br>complex sequence animations<br>huge frontend apps"
        />
      </MaxWidthWrapper>
      <>
        {isMobile ? (
          <WorkPhone full />
        ) : (
          <MaxWidthWrapper className="gallery">
            <div className="right">
              <div className="desktopPhotos">
                {projects.map((project, i) =>
                  index === i && Array.isArray(project.img) ? (
                    <ImageSlider key={i} isActive={true} images={project.img} />
                  ) : (
                    <LinkTransition href={`/project/${project.id}`} key={i}>
                      {" "}
                      <Image
                        key={i}
                        src={Array.isArray(project.img) ? project.img[0] : project.img}
                        alt={project.title}
                        fill
                        className="desktopPhoto  object-cover"
                      />
                    </LinkTransition>
                  )
                )}
              </div>
            </div>
            <div className="left flex items-center">
              <div className="desktopContent">
                {projects.map((project, i) => (
                  <div key={i} className={`desktopContentSection  flex flex-col gap-2 ${i === index ? "active" : ""}`}>
                    <h2 className="text-3xl  max-w-xl font-bold text-white text-center md:text-left">
                      {project.title.replace("<br>", "")}
                    </h2>{" "}
                    <Tech list={project.iconLists} />
                    <Visit project={project} />
                  </div>
                ))}
              </div>
            </div>
          </MaxWidthWrapper>
        )}
      </>
    </div>
  );
};

export default AllProjects;
