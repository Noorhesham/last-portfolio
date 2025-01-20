"use client";
import React, { useEffect } from "react";
import "../splitscreen.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";
import { projects } from "../constants";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph, { charsTospans } from "./Paragraph";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import SpaceBtn from "./SpaceBtn";
import Header from "./Header";
import AnimatedImage from "./AnimatedImage";
import { useIsMobile } from "../hooks/useIsMobile";
import WorkPhone from "./WorkPhone";
import Tech from "./Tech";
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
        animation: gsap.to(".scrolly", { y: -height }),
        scrub: true,
      });
      const sections = gsap.utils.toArray(".desktopContentSection");
      sections.forEach((section, i) => {
        const animation = gsap.timeline({});

        animation
          .fromTo(document.querySelector(".heading-project"), { opacity: 0 }, { opacity: 1 })
          .fromTo(document.querySelectorAll(".techstack"), { opacity: 0 }, { opacity: 1 });

        ScrollTrigger.create({
          trigger: section,
          scroller: ".main-container",
          start: "top 50%",
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
    return () => ctx.revert();
  }, []);
  if (isMobile) return <WorkPhone />;
  return (
    <div className="bg-mainBg">
      <MaxWidthWrapper noPadding className="   text-sm lg:text-base ">
        <Header text="My Work" text2="Most Recent Work By Noor Boi" />
      </MaxWidthWrapper>
      {isMobile ? (
        <WorkPhone />
      ) : (
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
              <Link href="/projects">view all</Link>
              <FaArrowRight className=" w-3 h-3 text-white" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" mt-2">
                <Tech list={projects[index].iconLists} />
              </div>
              <h2 className="text-3xl py-1 font-bold text-white text-center md:text-left h-14 heading-project">
                {charsTospans(
                  projects[index].title,
                  "text-3xl lg:text-6xl font-normal text-white text-center md:text-left",
                  "",
                  "h-16",
                  "heading-project"
                )}
              </h2>
            </div>
          </MaxWidthWrapper>
        </section>
      )}
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
    </div>
  );
};

export default MyWork;

// "use client";
// import React, { useEffect } from "react";
// import "../splitscreen.css";
// import { ScrollTrigger } from "gsap/all";
// import gsap from "gsap";
// import Image from "next/image";
// import { projects } from "../constants";
// import MaxWidthWrapper from "./MaxWidthWrapper";
// import { charsTospans } from "./Paragraph";
// import Tech from "./Tech";
// const MyWork = () => {
//   const [index, setIndex] = React.useState(0);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       ScrollTrigger.matchMedia({
//         //desktop
//         "(min-width: 601px)": () => {
//           const sections = gsap.utils.toArray(".desktopContentSection").slice(1);
//           const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
//           // a container that includes all photos and as i scroll i ill move the corresponding photo to the top to appear
//           gsap.set(photos, { yPercent: 100 });
//           ScrollTrigger.create({
//             trigger: ".gallery",
//             scroller: ".main-container",
//             start: "top top",
//             pin: ".right",
//             end: "bottom bottom",
//             markers: true,
//           });
//           sections.forEach((section, i) => {
//             const animation = gsap
//               .timeline()
//               .to(section.querySelectorAll(".heading-project span"), { y: 0, opacity: 1, stagger: { amount: 0.4 } })
//               .to(photos[i], { yPercent: 0 }, "<");
//             ScrollTrigger.create({
//               trigger: section.querySelector("h2"),
//               scroller: ".main-container",
//               start: "top 80%",
//               end: "top 10%",
//               markers: true,
//               scrub: true,
//               animation,
//               onEnter: () => setIndex(i),
//               onEnterBack: () => setIndex(i),
//             });
//           });
//         },
//       });
//     });
//     return () => ctx.revert();
//   }, []);
//   return (
//     <div className="  relative bg-mainBg">
//       {/* <div
//         className=" absolute  bgchange inset-0 grayscale w-full h-full"
//         style={{
//           backgroundImage: `url(${Array.isArray(projects[index].img) ? projects[index].img[1] : projects[index].img})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       ></div> */}

//       <MaxWidthWrapper className="gallery">
//         <div className="right">
//           {/* <div className="mobileContent">
//             <div className="mobilePhoto red"></div>
//             <h1>Red</h1>
//             <p>
//               Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and
//               attention-grabbing color that can evoke feelings of excitement, warmth, and energy.
//             </p>

//             <div className="mobilePhoto green"></div>
//             <h1>Green</h1>
//             <p>
//               Green is a color that is often associated with nature, growth, and harmony. It is a calming and relaxing
//               color that can evoke feelings of balance, stability, and freshness. In color psychology, green is said to
//               represent balance and stability, making it a popular choice for branding and marketing in the health and
//               wellness industry.{" "}
//             </p>

//             <div className="mobilePhoto pink"></div>
//             <h1>Pink</h1>
//             <p>
//               Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more
//               delicate shade of red that can evoke feelings of warmth, love, and nurturing. In the world of branding and
//               marketing, pink is often used to target a female audience or to promote products that are associated with
//               beauty, love, or romance.
//             </p>

//             <div className="mobilePhoto blue"></div>
//             <h1>Blue</h1>
//             <p>
//               Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and
//               serene color that can evoke feelings of stability, security, and professionalism. In color psychology,
//               blue is said to represent loyalty and trust, making it a popular choice for branding and marketing in the
//               finance and technology industries.
//             </p>
//           </div> */}
//           <div className="desktopPhotos">
//             {projects.map((project, i) => (
//               <Image
//                 key={i}
//                 src={Array.isArray(project.img) ? project.img[0] : project.img}
//                 alt={project.title}
//                 fill
//                 className="desktopPhoto  object-cover"
//               />
//             ))}
//           </div>
//         </div>
//         <div className="left flex items-center">
//           <div className="desktopContent">
//             {index === 0 && (
//               <div className=" ">
//                 <h2 className="text-3xl font-bold text-white text-center md:text-left h-14 heading-project">
//                   {charsTospans(
//                     projects[0].title,
//                     "text-3xl font-bold text-white text-center md:text-left",
//                     "",
//                     "h-14",
//                     "heading-project"
//                   )}
//                 </h2>
//                 <Tech list={projects[0].iconLists} />
//               </div>
//             )}

//             {projects.slice(0, 4).map((project, i) => (
//               <div key={i} className={`desktopContentSection  ${i === index ? "active" : ""}`}>
//                 <h2 className="flex flex-col h-fit">
//                   {charsTospans(
//                     project.title,
//                     "text-4xl  opacity-0 translate-y-8 font-bold text-white  text-center md:text-left",
//                     "",
//                     "h-20",
//                     "heading-project"
//                   )}
//                   {index === i && <Tech list={project.iconLists} />}
//                 </h2>{" "}
//               </div>
//             ))}
//           </div>
//         </div>
//       </MaxWidthWrapper>

//       <div className="spacer"></div>
//       <div className="spacer"></div>
//       <div className="spacer"></div>
//     </div>
//   );
// };

// export default MyWork;
