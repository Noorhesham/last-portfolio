"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Paragraph from "./Paragraph";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { MdEmail } from "react-icons/md";
import { PhoneCall } from "lucide-react";
import SpaceBtn from "./SpaceBtn";

const Footer = () => {
  const firstText = React.useRef<HTMLParagraphElement>(null);
  const secondText = React.useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.to([firstText.current, secondText.current], {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "none",
      repeatDelay: 0,
    });
  }, []);

  return (
    <footer className="bg-[#171719] relative overflow-hidden h-screen">
      <div className=" text-white h-full">
        <div className={"  absolute top-0 "}>
          <div className={"whitespace-nowrap relative  "}>
            <p className="text-[15vw]" ref={firstText}>
              NOOR HESHAM
            </p>
            <p className=" absolute text-[15vw] top-0  left-full" ref={secondText}>
              NOOR HESHAM
            </p>
          </div>
        </div>
        <div className=" pt-[13vh] lg:pt-[35vh] h-full py-5  ">
          <MaxWidthWrapper className=" h-full items-start grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5">
            <div className="flex h-full px-5 flex-col">
              <div className="flex   items-center  justify-between">
                <div className="  max-w-sm text-3xl">HEAL THE WORLD</div>
                <SpaceBtn>
                  <Link href="mailto:noordragon2004@gmail.com" className=" text-white z-20">
                    Contact Me
                  </Link>
                </SpaceBtn>
              </div>
              <div className=" mt-auto flex justify-between">
                <div className="   flex flex-col ">
                  <a
                    href="mailto:noordragon2004@gmail.com"
                    className="flex hover:text-maincolor2 hover:underline duration-150 items-center gap-2 text-white hover:underline"
                  >
                    <MdEmail className=" w-4 h-4" />
                    noordragon2004@gmail.com
                  </a>
                  <a
                    href="tel:+201145838187"
                    className="flex  hover:text-maincolor2 hover:underline duration-150  items-center gap-2 text-white hover:underline"
                  >
                    <PhoneCall className=" w-4 h-4" />
                    +20 114 583 81 87
                  </a>{" "}
                </div>
                <div className="flex gap-3">
                  <Link
                    target="_blank"
                    className=" hover:text-maincolor2 hover:underline duration-150  flex items-center justify-center"
                    href="https://web.facebook.com/profile.php?id=100006306765558"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </Link>{" "}
                  <Link
                    className=" hover:text-maincolor2 hover:underline duration-150  flex items-center justify-center"
                    target="_blank"
                    href="https://www.instagram.com/noorhesham174/"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>{" "}
                  <Link
                    target="_blank"
                    className="  hover:text-maincolor2 hover:underline duration-150  flex items-center justify-center"
                    href="https://www.linkedin.com/in/noor-elgendy-0aa84b207/"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    className="  hover:text-maincolor2 hover:underline duration-150  flex items-center justify-center"
                    href="https://www.youtube.com/@noorboi6706"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-5   flex  border-l pl-4 h-full flex-col">
              <Paragraph
                height="h-8"
                className="text-white lg:text-xl border-gray-50 opacity-100"
                text="Animations ? Fullstack ? <br> Backend ? Just call me ! I will grant your wish!"
              />
              <div className=" mt-auto flex flex-col ">
                <Link href="https://noor-hesham-boi.io/" className="uppercase ">
                  ©Noor Boi
                </Link>
                <span>Noor Hesham © All Rights Reserved - 2025</span>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
