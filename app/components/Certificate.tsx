"use client";
import Image from "next/image";
import { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

export const testimonials = [
  {
    quote:
      "This JavaScript course covers essential topics like DOM manipulation, async programming, and API integration, showcasing skills in creating dynamic web apps.",
    name: "The Complete JavaScript Course 2023",
    title: "Udemy",
    img: "/c3.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-3caccd9d-f820-48fa-b40c-d7e8afcb8739.pdf",
  },
  {
    quote:
      "This MERN stack course covers database management, server-side development, and API creation, highlighting proficiency in building scalable web applications.",
    name: "The Complete Node.js, MongoDB, Express Course",
    title: "Udemy",
    img: "/c2.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-cc321f8d-2603-4cd5-8c2b-fd7818ef3f13.pdf",
  },
  {
    quote:
      "This React and Next.js course covers component-based architecture, server-side rendering, and performance optimization, demonstrating skills in modern web development.",
    name: "The Complete React, Redux, RTK, Next.js Course",
    title: "Udemy",
    img: "/c1.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-05fd62f5-87c2-447f-8ec9-0df38f5b8bee.pdf",
  },
  {
    quote:
      "This JavaScript DSA course covers arrays, linked lists, trees, sorting, and searching algorithms, showcasing skills in solving complex problems efficiently.",
    name: "JavaScript Algorithms and Data Structures",
    title: "",
    img: "/c4.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-bfe13cf7-585e-4437-9739-7c3685cffd79.pdf",
  },
  {
    quote:
      "The CS50 course covers algorithms, data structures, and web development, demonstrating a solid foundation in coding, problem-solving, and critical thinking.",
    name: "CS50x: CS50's Introduction to Computer Science",
    title: "Harvard University",
    img: "/cs50.png",
    link: "https://courses.edx.org/certificates/c6026e6a6ae34aca9bf6baff2eaf995e",
  },
];

export default function ServicesHover() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <MaxWidthWrapper className="flex flex-col md:flex-row gap-8 items-start p-4 md:p-8 text-white">
      {/* Left Side Image */}
      <div className="w-full md:w-2/3 h-[50vh] md:h-[80vh] relative">
        <Image
          fill
          src={testimonials[activeIndex].img}
          alt={testimonials[activeIndex].name}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side List */}
      <div className="w-full md:w-1/3 space-y-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`cursor-pointer py-4 px-6 rounded-lg transition-all duration-300 shadow-md ${
              activeIndex === index ? "bg-maincolor text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <h3 className="text-lg font-bold">
              {index + 1}. {testimonial.name}
            </h3>
            <p className="text-sm">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
