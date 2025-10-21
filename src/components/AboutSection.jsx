import { useState, useEffect, useRef } from "react";
import { Briefcase, ChevronDown, Code, User } from "lucide-react";

export const AboutSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Engineer | Turning Challenges Into Code
            </h3>

            <p className="text-muted-foreground">
              I’m a junior software engineer and recent ENIT graduate passionate about creating scalable, efficient, and user-focused solutions. My interests lie in software architecture, cloud technologies, and AI development, where I enjoy turning complex ideas into clean, impactful systems.
            </p>

            <p className="text-muted-foreground">
              Through my academic and internship experiences, I’ve built a strong foundation in full-stack development, modern frameworks, and cloud-based deployment. I’m now looking for my first professional opportunity to grow as a software engineer, contribute to innovative projects, and keep learning in a dynamic and collaborative environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* CV Download Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Download CV <ChevronDown className="h-4 w-4" />
                </button>

                {showDropdown && (
                  <div className="absolute mt-2 w-48 bg-card border border-border rounded-lg shadow-lg right-0 z-10 animate-fade-in">
                    <a
                      href="/CV_Nebras_Ammar_ENG.pdf"
                      download
                      className="block px-4 py-2 hover:bg-primary hover:text-primary-foreground rounded-t-lg transition-colors"
                    >
                      English CV
                    </a>
                    <a
                      href="/CV_Nebras_Ammar_FR.pdf"
                      download
                      className="block px-4 py-2 hover:bg-primary hover:text-primary-foreground rounded-b-lg transition-colors"
                    >
                      French CV
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Optional Visual or Illustration */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Code className="h-6 w-6 text-primary"></Code>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">Experienced in creating responsive, high-performance web applications with modern frameworks and best development practices.</p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                        <p>Passionate about crafting user-friendly and visually appealing interfaces, ensuring smooth and impactful user experiences.</p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Professional Experience</h4>
                        <p className="text-muted-foreground">  Junior software engineer with hands-on experience from internships in full-stack development, cloud, and AI projects.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
