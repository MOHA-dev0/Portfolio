import React from "react";
import { Github, Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h3 className="text-2xl font-bold text-gradient font-display">
            Mohammad Ramez
          </h3>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/MOHA-dev0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:Mohammad.uns.02@gmail.com"
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_86wo/#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Mohammad Ramez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
