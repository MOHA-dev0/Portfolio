import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import photo from "/Me.jpg";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-pastel-blue/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-display text-gray-800">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="relative group">
                  <div className="w-52 h-52 rounded-full bg-gradient-to-tr from-primary to-purple-400 p-1 shadow-lg transition-transform group-hover:rotate-1">
                    <img
                      src={photo}
                      alt="My profile"
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-md transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I'm a passionate full-stack developer who thrives on
                    building innovative web solutions and contributing to
                    meaningful change. I believe in lifelong learning and giving
                    back through volunteer work, always striving to stay current
                    with modern technologies while empowering others through
                    knowledge and support.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
