import React from "react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Engineering",
      university: "İskenderun Technical University",
      period: "2021 - 2025",
      description:
        "Studying core subjects in computer science and engineering including algorithms, data structures, OOP, databases, operating systems, and full-stack web development. Honor student with a GPA of 3.39.",
      pulse: false,
    },
    {
      degree: "Turkish Language Preparation",
      university: "Middle East Institute",
      period: "2019 - 2020",
      description:
        "Completed a full academic year of Turkish language studies at the Middle East Institute, preparing for university education and focusing on communication, comprehension, and academic language skills.",
      pulse: false,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-white to-pastel-blue/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30">
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-12 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-[41px] w-5 h-5">
                  {edu.pulse ? (
                    <span className="relative flex h-full w-full">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-primary border-4 border-white"></span>
                    </span>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-white"></div>
                  )}
                </div>

                <div className="pl-6">
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-2">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {edu.university}
                  </p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
