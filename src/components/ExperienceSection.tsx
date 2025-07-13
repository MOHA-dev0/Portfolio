import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Intern",
      company: "Digital Skills21 Institution",
      period: "2025",
      description:
        "Developed a CMS-powered news platform with 100+ monthly visitors. Achieved 100% mobile responsiveness and improved content loading speed by 40%.",
    },
    {
      title: "Graduation Project",
      company: "e-Kiralık",
      period: "2025",
      description:
        "Built a full-stack rental platform with e-contracts, reminders, and analytics using Next.js, Express.js, and Sanity. Reduced manual paperwork time by 70% and improved communication between tenants and landlords.",
    },
    {
      title: "Internship Student",
      company:
        "ÇELEBİ KARDEŞLER MÜHENDİSLİK DANIŞMANLIK VE TİCARET LİMİTED ŞİRKETİ",
      period: "2024",
      description:
        "Contributed to 3+ frontend/backend projects. Decreased bug count by 25% through code review and refactoring.",
    },
    {
      title: "Web Developer",
      company: "Solexad, Dubai",
      period: "2023 - 2024",
      description:
        "Improved website performance by 45% through frontend optimization and UI enhancements. Developed 4+ user-centric features that led to a 20% increase in session time.",
    },
    {
      title: "Web Developer, SEO & Designer",
      company: "Al Hilal Education",
      period: "2023 - 2024",
      description:
        "Increased organic web traffic by 60% over 3 months through on-page SEO and UI-UX improvements. Created responsive interfaces for 2 educational portals serving 5,000+ users.",
    },
    {
      title: "Volunteer Data Entry Clerk",
      company: "Al Hadi Center",
      period: "2023",
      description:
        "Provided logistical and emotional support to 150+ individuals during the Turkey earthquake. Digitized 300+ aid request records to streamline support operations.",
    },
    {
      title: "Student Counseling",
      company: "Freelancer",
      period: "2021 - 2023",
      description:
        "Guided 50+ students in applying to Turkish universities with an 85% success rate. Hosted virtual Q&A sessions reaching over 400 prospective students.",
    },
    {
      title: "Student Assistant",
      company: "Vakitgroup",
      period: "2020",
      description:
        "Assisted 15+ students with study planning and cultural adaptation. Developed onboarding guides used by future cohorts.",
    },
    {
      title: "Volunteer",
      company: "Prophet's Mosque, Medina",
      period: "2014 - 2020",
      description:
        "Served 100+ pilgrims with daily assistance, language translation, and food service.",
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
