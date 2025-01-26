import { projects } from "../constants";

export const projectMetadata = {
  generateMetadata: async ({ params }: { params: { id: string } }) => {
    const project = projects.find((p) => p.id.toString() === params.id);

    if (!project) {
      return {
        title: "Project Not Found",
        description: "The requested project could not be found.",
      };
    }

    return {
      title: project.title.replace("<br>", " "),
      description: project?.des?.substring(0, 160) || "", // Truncate for SEO
      openGraph: {
        title: project.title.replace("<br>", " "),
        description: project?.des?.substring(0, 160) || "",
        images: Array.isArray(project.img) ? project.img[0] : project.img,
        url: project.link || undefined,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: project.title.replace("<br>", " "),
        description: project.des?.substring(0, 160),
        images: Array.isArray(project.img) ? project.img[0] : project.img,
      },
      alternates: {
        canonical: project.link || undefined,
      },
      keywords: [
        ...project.title.split("|").map((k) => k.trim().toLowerCase()),
        ...(project.features || []).slice(0, 5).map((f) => f.toLowerCase().split(" ")[0]),
      ],
    };
  },
};
