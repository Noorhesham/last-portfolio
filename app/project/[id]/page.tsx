import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ProjectDescription from "@/app/components/ProjectDescription";
import { projects } from "@/app/constants";
import { projectMetadata } from "@/app/utils/metadata";
import React from "react";
export const generateStaticParams = async () => {
  return projects.map((p) => ({ id: p.id.toString() }));
};

export const generateMetadata = projectMetadata.generateMetadata;

const page = async ({ params }: { params: { id: string } }) => {
  const id = await params.id;
  const project = projects.find((p) => p.id == id);
  return (
    <section className="bg-mainBg">
      <MaxWidthWrapper className="  flex flex-col gap-5 ">
        {project && <ProjectDescription project={project} />}
      </MaxWidthWrapper>
    </section>
  );
};

export default page;
