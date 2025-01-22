import React from "react";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
const Visit = ({ project }: { project: any }) => {
  return (
    <div className="flex flex-row justify-between lg:flex-col gap-2 text-white">
      <div className=" flex items-center mr-auto mt-2  gap-5 justify-center">
        {project?.git && (
          <Link target="_blank" href={project?.git}>
            <FaGithub className=" text-3xl hover:text-purple duration-150" />
          </Link>
        )}
        {project?.link && (
          <Link
            target="_blank"
            href={project?.link || ""}
            className=" cursor-pointer flex lg:text-xl md:text-xs text-sm text-purple"
          >
            Check life site
            <FaLocationArrow className=" w-4 h-4 my-auto ms-3" color="#CBACF9" />
          </Link>
        )}
      </div>
      <Link href={`/project/${project?.id}`} className=" underline lg:text-2xl text-lg text-maincolor2">More Details</Link>
    </div>
  );
};

export default Visit;
