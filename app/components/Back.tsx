"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import React from "react";
import { FaBackward } from "react-icons/fa";

const Back = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      className="flex hover:text-purple duration-200  w-fit items-center transition-all left-0 mb-5 3"
    >
      <FaBackward />
      Back
    </Button>
  );
};

export default Back;
