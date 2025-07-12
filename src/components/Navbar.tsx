import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scroll
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className={`text-2xl font-display font-bold text-gradient ${
            scroll ? "text-primary" : "text-primary"
          } hover-lift`}
        >
          Mohammad Ramez
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-all duration-300 relative ${
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              } after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-0.5 after:bg-primary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${
                activeSection === link.href.substring(1)
                  ? "after:scale-x-100"
                  : ""
              } hover:after:scale-x-100`}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
            <a
              href="/Mohammad-Ramez-CV.pdf"
              download
              className="bg-primary hover:bg-primary/90 w-full text-white text-center text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              Resume
            </a>
          </Button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-primary p-2 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-4 px-8 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium py-2 transition-colors ${
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 w-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
            <a
              href="/Mohammad-Ramez-CV.pdf"
              download
              className="bg-primary hover:bg-primary/90 w-full text-white text-center text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
