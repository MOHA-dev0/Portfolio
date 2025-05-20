
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [".NET Framework", "jQuery", "Java", "C#", "C", "SQL"]
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Tailwind CSS", "Sanity", "PHP Laravel" , "Appwrite"]
    },
    {
      title: "Operating Systems",
      skills: ["Unix", "Linux"]
    },
    {
      title: "Software & Tools",
      skills: ["Microsoft Office", "Photoshop", "Illustrator", "Figma"]
    },
    {
      title: "Soft Skills",
      skills: ["Team Management", "Research", "Volunteering", "Helping Others", "Fast Typing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my education and professional experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-primary/20 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gradient">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className="bg-pastel-purple/20 hover:bg-pastel-purple/40 text-gray-800 hover:text-primary transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
