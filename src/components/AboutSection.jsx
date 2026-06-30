import { useState, useEffect, useRef } from "react";
import { Code, Server, Brain, ChevronDown } from "lucide-react";

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

  const stats = [
    { value: "4+", label: "Professional Experiences" },
    { value: "10+", label: "Projects" },
    { value: "20+", label: "Technologies" },
    { value: "3", label: "Production Applications" },
  ];

  const stack = [
    "Java", "React", "Spring Boot", "ASP.NET", "Node.js",
    "Docker", "Kubernetes", "PostgreSQL", "Azure", "LLMs",
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Available for Full-Time Opportunities
            </div>

            <h3 className="text-2xl font-semibold">
              Software Engineer | Full-Stack, Cloud &amp; AI
            </h3>

            <p className="text-muted-foreground">
              I'm a Software Engineer and recent ENIT graduate with hands-on experience developing production backend services, scalable microservices, full-stack web applications, and AI-powered solutions.
            </p>

            <p className="text-muted-foreground">
              Through professional experiences at Auvelisse, Sofrecom, VERMEG, and freelance projects, I've worked with technologies including Java, Spring Boot, React, Docker, Kubernetes, PostgreSQL, and Large Language Models to build software that solves real business problems.
            </p>

            <p className="text-muted-foreground">
              I enjoy designing clean software architectures, building modern user interfaces, and developing cloud-native applications. Whether it's implementing REST APIs, deploying microservices, integrating AI capabilities, or optimizing existing systems, I enjoy tackling challenging technical problems while continuously learning new technologies.
            </p>

            <p className="text-muted-foreground">
              I'm currently looking for opportunities where I can contribute to impactful products while continuing to grow as a full-stack software engineer.
            </p>

            {/* Currently working badge */}
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Currently:</span>{" "}
              Backend Software Engineer @ Auvelisse
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gradient-border p-3 text-center card-hover"
                >
                  <div className="text-xl md:text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full border border-border bg-card text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                      href="/CV_Nebras_Ammar_new_ENG.pdf"
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

            {/* Social links */}
            <div className="flex gap-4 pt-2 text-sm">
              <a
                href="https://github.com/NibrasAmmar01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://nebrasammar.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/nebras-ammar-193036260/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable web applications using React, Spring Boot, ASP.NET, Node.js and modern software architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud &amp; DevOps</h4>
                  <p className="text-muted-foreground">
                    Experience deploying containerized applications with Docker, Kubernetes, GitLab CI/CD, Azure and cloud-native microservices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI &amp; Intelligent Systems</h4>
                  <p className="text-muted-foreground">
                    Developing LLM-powered applications, RAG systems, AI automation workflows and computer vision solutions using Python and modern AI frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};