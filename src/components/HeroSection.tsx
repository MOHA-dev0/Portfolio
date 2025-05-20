import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Instagram } from "lucide-react";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  const roles = ["Designer", "Computer Engineer", "Full-stack Developer"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <p className="text-gray-600 mb-2">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display">
              Mohammad <span className="text-gradient">Ramez</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 flex flex-wrap justify-center items-center gap-2">
              I'm a <AnimatedText texts={roles} />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about technology and driven to create a better future
              through innovative ideas that support positive change. I stay
              up-to-date with the latest advancements to develop and protect
              websites.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button className="bg-primary hover:bg-primary/90">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              View Portfolio
            </Button>
          </div>

          <div
            className="flex items-center gap-4 mt-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/MOHAADEV"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:Mohammad.uns.02@gmail.com"
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/moharam/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_86wo/#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
