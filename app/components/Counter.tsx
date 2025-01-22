"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaYoutube, FaLinkedin, FaProjectDiagram, FaSmile, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import GridContainer from "./GridContainer";
import MaxWidthWrapper from "./MaxWidthWrapper";

type Stat = {
  icon: React.ReactNode;
  title: string;
  count: number;
  prefix?: string;
  link?: string;
};

const stats: Stat[] = [
  {
    icon: <FaYoutube size={32} color="#FF0000" />,
    title: "Subscribers on YouTube",
    count: 4000,
    prefix: "+",
    link: "https://www.youtube.com/@noorboi6706",
  },
  {
    icon: <FaLinkedin size={32} color="#0077B5" />,
    title: "Followers on LinkedIn",
    count: 6000,
    link: "https://www.linkedin.com/in/noor-elgendy-0aa84b207/",
  },
  { icon: <FaProjectDiagram size={32} color="#4CAF50" />, title: "Completed Projects", count: 20, prefix: "+" },
  { icon: <FaSmile size={32} color="#FFC107" />, title: "Happy Clients", count: 10, prefix: "+" },
  { icon: <FaCalendarAlt size={32} color="#673AB7" />, title: "Years of Experience", count: 3, prefix: "+" },
];

const Counter = () => {
  useEffect(() => {
    stats.forEach((_, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            scroller: ".main-container",
            trigger: `#stat-${i}`,
            start: "top 80%",
          },
        })
        .fromTo(
          `#stat-${i} .count`,
          { innerText: 0 },
          {
            innerText: stats[i].count,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power3.out",
            onUpdate: function () {
              const el = document.querySelector(`#stat-${i} .count`);
              if (el) el.innerText = Math.round(Number(this.targets()[0].innerText)).toString();
            },
          }
        );
    });
  }, []);
  return (
    <MaxWidthWrapper>
      <GridContainer cols={5} className=" gap-8 statttt justify-center p-8  rounded-lg">
        {stats.map((stat, index) =>
          stat.link ? (
            <Link
              id={`stat-${index}`}
              className="flex flex-col  items-center text-center bg-white shadow-md p-6 rounded-lg"
              key={index}
              href={stat.link}
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="flex items-center gap-1">
                <span>{stat.prefix}</span> <div className="text-4xl font-bold count text-maincolor">0</div>
              </div>
              <div className="mt-2 text-lg font-medium text-gray-700">{stat.title}</div>
            </Link>
          ) : (
            <div
              key={index}
              id={`stat-${index}`}
              className="flex flex-col items-center text-center bg-white shadow-md p-6 rounded-lg"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="flex items-center gap-1">
                <span>{stat.prefix}</span> <div className="text-4xl font-bold count text-maincolor">0</div>
              </div>
              <div className="mt-2 text-lg font-medium text-gray-700">{stat.title}</div>
            </div>
          )
        )}
      </GridContainer>
    </MaxWidthWrapper>
  );
};

export default Counter;
