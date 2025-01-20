import Image from "next/image";
import Link from "next/link";
import React from "react";
import PhoneNav from "./PhoneNav";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "@/components/ui/button";
export const NAV_LINKS = ["HOME", "about us", "Projects", "Media center", "News", "Contact us"];
const NavBar = () => {
  return (
    <header>
      <nav className="fixed z-50  inset-0 !h-fit w-full ">
        <MaxWidthWrapper noPadding className="flex !pt-5 !h-fit justify-between">
          {" "}
          <div className=" ">
            <Logo />
          </div>
          <div className=" flex  items-center gap-5">
            <PhoneNav />
            <a href="/noorhesham.pdf" download="Noor-Hesham-cv">
              <Button className=" text-sm">MY CV ?</Button>
            </a>
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
};

export default NavBar;
