"use client";
import React, { useEffect } from "react";
import "../splitscreen.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { projects } from "../constants";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./Paragraph";
import Tech from "./Tech";
import { useIsMobile } from "../hooks/useIsMobile";
import WorkPhone from "./WorkPhone";
import Visit from "./Visit";
import LinkTransition from "./LinkTransition";
import PortfolioEvolution from "./PortFolioEvleotion";
const AllProjects = () => {
  const [index, setIndex] = React.useState(0);
  const { isMobile } = useIsMobile();
  useEffect(() => {
    if (isMobile) return;
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(min-width: 601px)", () => {
        const sections = gsap.utils.toArray(".desktopContentSection").slice(1);
        const photos = gsap.utils.toArray(".desktopPhoto").slice(1);
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
              setIndex((i) => i + 1);
            },
            onEnterBack: () => setIndex((i) => i - 1),
          });
        });
      });
    });
    return () => ctx.revert();
  }, [isMobile]);
  return (
    <div className="  relative bg-mainBg">
      <div>
        <PortfolioEvolution />
      </div>
      <MaxWidthWrapper className="flex font-semibold uppercase gap-2    lg:text-5xl text-2xl flex-col items-center max-w-2xl">
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
                {projects.map((project, i) => (
                  <LinkTransition href={`/project/${project.id}`} key={i}>
                    {" "}
                    <Image
                      loading="lazy"
                      key={i}
                      src={Array.isArray(project.img) ? project.img[0] : project.img}
                      alt={project.title}
                      fill
                      className="desktopPhoto  object-cover"
                    />
                  </LinkTransition>
                ))}
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
