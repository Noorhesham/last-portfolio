import { TiLocationArrow } from "react-icons/ti";
import BentoCard, { BentoTilt } from "./BentoCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./Paragraph";

const Features = () => {
  return (
    <MaxWidthWrapper className=" !text-black pb-52">
      <div className=" container mx-auto px-3 md:px-10">
        <div className="flex items-center">
          <div className=" px-5 ">
            <Paragraph
              text="BEYOND PORTFOLIO"
              className="  text-6xl !text-maincolor w-full"
              width="w-[10px]"
              height="h-32 "
            />
            <Paragraph className="!text-black" width="w-[10px]" text="Let's know more about me" />
          </div>
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description={
              "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            }
            isComingSoon
          />
        </div>
        <div className=" grid  grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt
            className="relative  
          col-span-2 overflow-hidden transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2"
          >
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>
          <BentoTilt
            className="relative ms-32 md:ms-0  
          col-span-2  transition-transform duration-300 ease-out md:col-span-1 row-span-1"
          >
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="a gamified social hub . adding a new dimension of play interacting with your friends."
            />
          </BentoTilt>{" "}
          <BentoTilt
            className="relative  me-14  md:me-0
          col-span-2  transition-transform duration-300 ease-out md:col-span-1 "
          >
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="a gamified social hub . adding a new dimension of play interacting with your friends."
            />
          </BentoTilt>
          <BentoTilt className=" bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h2 className=" bento-title speical-font max-w-64 text-black">
                <b>M</b>ore coming s<b>o</b>on !
              </h2>
              <TiLocationArrow className=" m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className=" bento-tilt_2">
            <video className=" size-full object-cover object-center" src="/videos/feature-5.mp4" loop autoPlay muted />
          </BentoTilt>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Features;
