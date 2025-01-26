"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import Paragraph from "./Paragraph";

const PortfolioEvolution = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const items = gridRef.current.querySelectorAll(".project");

      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex flex-col  h-[90vh] flex items-center justify-center items-center bg-gradient-to-b from-black to-gray-900"
      ref={gridRef}
    >
      <MaxWidthWrapper className="flex flex-col items-center justify-center pt-20" noPadding>
        <Paragraph
          width="w-[15px]"
          text="Evolution of Portfolio"
          className=" text-4xl !w-full text-center mx-auto lg:text-7xl !text-maincolor2 font-extrabold w-full"
          height="h-20"
        />
        <p className=" text-sm lg:text-lg text-gray-400 text-center mt-4 max-w-3xl">
          It’s absolutely crazy to look back at how my portfolios have evolved over time! From simple designs to
          professional, visually stunning projects, each iteration reflects a leap in skills and creativity.
        </p>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="relative flex md:flex-row flex-col justify-center items-center space-x-[-40px] mt-8">
          {[
            {
              link: "https://noor-hesham-portfolio.netlify.app/",
              imgSrc: "/portfolio1.png",
              alt: "portfolio1",
            },
            {
              link: "https://noor-hesham-portfolio.vercel.app/",
              imgSrc: "/portfolio2.png",
              alt: "portfolio2",
            },
            {
              link: "https://new-portfolio-noor-hesham.vercel.app/",
              imgSrc: "/portfolio3.png",
              alt: "portfolio3",
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="project relative w-80  h-40 lg:h-52 rounded-2xl overflow-hidden transform rotate-[0deg] scale-100 shadow-lg z-10 transition-transform hover:scale-105 hover:shadow-2xl group"
              style={{
                transform: `rotate(${idx === 0 ? -10 : idx === 1 ? 0 : 10}deg) translateY(2%) scale(${
                  idx === 1 ? 1 : 0.95
                })`,
              }}
            >
              <Link href={project.link} className="block w-full h-full relative">
                <Image alt={project.alt} src={project.imgSrc} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="shine-effect absolute inset-0 pointer-events-none" />
              </Link>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
      <style jsx>{`
        .shine-effect {
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: skewX(-30deg);
          position: absolute;
          top: -150%;
          left: -150%;
          width: 300%;
          height: 300%;
          animation: shine 3s infinite;
        }

        @keyframes shine {
          from {
            transform: translateX(-150%) skewX(-30deg);
          }
          to {
            transform: translateX(150%) skewX(-30deg);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioEvolution;
