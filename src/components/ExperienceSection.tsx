import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Student Counseling",
      company: "Freelancer",
      period: "2021 - 2023",
      description:
        "Assisted students in applying to Turkish universities, helping them secure admissions and providing necessary consultations throughout the process.",
    },
    {
      title: "Volunteer Data Entry Clerk",
      company: "Al Hadi Center",
      period: "2023",
      description:
        "In response to the earthquake in Turkey in February, I volunteered to provide emotional and material support to affected individuals, engaging in conversations to offer comfort and assistance during this challenging time.",
    },
    {
      title: "Web Developer & SEO & Data Entry & Designer",
      company: "Al Hilal Education",
      period: "2023 - 2024",
      description:
        "Gained experience working with Al Hilal Education in web development, SEO, data entry, and design, collaborating with a team and managing projects effectively.",
    },
    {
      title: "Web Developer",
      company: "Solexad",
      period: "2023 - 2024",
      description:
        "Worked as a web developer for a startup in Dubai, contributing to the development and enhancement of web applications.",
    },
    {
      title: "Internship Student",
      company:
        "ÇELEBİ KARDEŞLER MÜHENDİSLİK DANIŞMANLIK VE TİCARET LİMİTED ŞİRKETİ",
      period: "2024",
      description:
        "Worked as a web developer intern, gaining hands-on experience in web development and contributing to various projects within the company.",
    },
    {
      title: "Designer",
      company: "Freelancer",
      period: "2024 - Present",
      description:
        "Designed Instagram posts and managed multiple accounts for restaurants and other businesses, enhancing their online presence and engagement.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-pastel-blue/20 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="mb-12 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary border-4 border-white"></div>
                <div className="pl-6">
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-2">
                    {experience.period}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {experience.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {experience.company === "Solexad" ? (
                      <a
                        href="https://solexad.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium mb-2 underline hover:text-primary/80 transition"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      <p className="text-primary font-medium mb-2">
                        {experience.company}
                      </p>
                    )}
                  </p>
                  <p className="text-gray-600">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
