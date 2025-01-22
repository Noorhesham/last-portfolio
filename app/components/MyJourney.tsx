import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./Paragraph";

const MyJourney = () => {
  const experience = [
    {
      role: "Instructor & Freelancer",
      company: "YouTube & Upwork",
      date: "2021 - 2023",
      location: "Global",
      details: [
        "Taught full tutorials on YouTube, turning the impossible into 'just Google it.'",
        "Guided aspiring developers with practical insights and detailed sessions.",
        "Worked with top-tier clients on Upwork, delivering full-stack solutions for complex projects.",
        "Built a reputation for balancing creativity with deadlines, and coffee with code.",
      ],
      tools: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    },
    {
      role: "Senior Developer",
      company: "Right Mind",
      date: "2023 - Present",
      location: "Remote",
      details: [
        "Learned the art of collaboration on large-scale projects with diverse teams.",
        "Optimized performance for web applications that don’t just load—they fly.",
        "Mastered complex workflows, proving 'Senior' is just a title.",
      ],
      tools: ["React", "Next.js", "SASS", "Performance Optimization"],
    },
  ];

  const education = [
    {
      title: "CS50 Certificate",
      institution: "Harvard (Online)",
      date: "2023",
      details: [
        "Survived one of the toughest programming courses, building a problem-solving mindset.",
        "Earned the ultimate 'badge of coding honor.'",
      ],
    },
    {
      title: "Competitive Programming",
      institution: "LeetCode",
      date: "2022 - 2023",
      details: [
        "Solved hundreds of challenging problems, one bug at a time.",
        "Turned frustration into elegant algorithms, and coffee into solutions.",
      ],
    },
  ];

  return (
    <section className="bg-mainBg">
      <MaxWidthWrapper className="grid   grid-cols-4 gap-4 mx-auto text-white p-6">
        <div className="col-span-1 sticky top-6">
          <div className="mb-12">
            <h3 className="text-lg font-bold uppercase">Experience</h3>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase">Education</h3>
          </div>
        </div>

        <div className="col-span-3 space-y-12">
          <div>
            {experience.map((item, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl items-start flex font-semibold">
                  <Paragraph className="!font-semibold !text-xl" text={item.role} />,{" "}
                  <span className="text-maincolor2">{item.company}</span>
                </h4>
                <p className="text-gray-400 text-sm mb-2">
                  {item.date} / {item.location}
                </p>
                <ul className="list-disc ml-6 mb-2">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="flex lg:flex-nowrap flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            {education.map((item, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm mb-2">
                  {item.institution} / {item.date}
                </p>
                <ul className="list-disc ml-6">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MyJourney;
