import { useState } from "react";
import { cn } from "../lib/utils";

const Skills = [
  // Frontend
  { name: "HTML", level: 95, category: "Frontend", description: "Used in multiple web projects to structure content efficiently." },
  { name: "CSS", level: 90, category: "Frontend", description: "Styled responsive layouts using modern CSS techniques." },
  { name: "JavaScript", level: 90, category: "Frontend", description: "Built interactive front-end features in ReactJS and Angular." },
  { name: "Tailwind CSS", level: 80, category: "Frontend", description: "Designed modern UI components quickly with utility-first styling." },
  { name: "ReactJS", level: 85, category: "Frontend", description: "Developed dynamic user interfaces for web applications." },
  { name: "Angular", level: 75, category: "Frontend", description: "Built single-page applications during academic projects." },
  { name: "Bootstrap", level: 85, category: "Frontend", description: "Implemented responsive designs in several projects." },
  { name: "JQuery", level: 80, category: "Frontend", description: "Handled DOM manipulation and AJAX calls in legacy projects." },
  { name: "Flutter (UI)", level: 70, category: "Frontend", description: "Created mobile app UIs for small projects." },

  // Backend
  { name: "NodeJS", level: 85, category: "Backend", description: "Developed backend APIs and server logic for projects." },
  { name: "ExpressJS", level: 80, category: "Backend", description: "Built REST APIs for web applications." },
  { name: "Java (JEE/Spring Boot)", level: 85, category: "Backend", description: "Created backend services and microservices in Java." },
  { name: "Symfony", level: 75, category: "Backend", description: "Developed PHP-based backend systems." },
  { name: "PHP", level: 75, category: "Backend", description: "Implemented backend functionality and database interactions." },
  { name: "C#", level: 80, category: "Backend", description: "Used for backend logic and small desktop projects." },
  { name: "C++", level: 80, category: "Backend", description: "Built algorithms and simulations for coursework and projects." },
  { name: "Python", level: 85, category: "Backend", description: "Developed scripts, AI pipelines, and backend logic." },

  // Databases
  { name: "SQL", level: 85, category: "Database", description: "Designed queries and database structures." },
  { name: "MySQL", level: 80, category: "Database", description: "Managed relational databases for web apps." },
  { name: "PostgreSQL", level: 75, category: "Database", description: "Worked with advanced SQL queries." },
  { name: "Oracle / PL/SQL", level: 75, category: "Database", description: "Implemented stored procedures and database logic." },
  { name: "Cassandra", level: 75, category: "Database", description: "Handled NoSQL database structures." },
  { name: "MongoDB", level: 75, category: "Database", description: "Created NoSQL database models for projects." },

  // AI / ML / DevOps
  { name: "TensorFlow", level: 70, category: "AI & ML", description: "Built and trained machine learning models." },
  { name: "PyTorch", level: 70, category: "AI & ML", description: "Implemented deep learning pipelines." },
  { name: "Deep Learning", level: 70, category: "AI & ML", description: "Worked on image recognition and NLP projects." },
  { name: "LLMs", level: 65, category: "AI & ML", description: "Fine-tuned large language models for Q&A tasks." },
  { name: "Docker", level: 80, category: "DevOps", description: "Containerized applications for consistent deployments." },
  { name: "Kubernetes", level: 70, category: "DevOps", description: "Deployed microservices using Kubernetes clusters." },
  { name: "Azure", level: 75, category: "DevOps", description: "Configured cloud infrastructure and services." },
  { name: "AWS", level: 70, category: "DevOps", description: "Used cloud services for deployment and storage." },
  { name: "Git / GitLab CI", level: 85, category: "DevOps", description: "Version control and CI/CD pipeline management." },

  // Tools
  { name: "VS Code", level: 90, category: "Tools", description: "Primary IDE for web and backend development." },
  { name: "IntelliJ IDEA", level: 85, category: "Tools", description: "Used for Java and Spring Boot projects." },
  { name: "Visual Studio", level: 80, category: "Tools", description: "Developed C# and desktop projects." },
  { name: "Android Studio", level: 75, category: "Tools", description: "Built Flutter and Android apps." }
];

const categories = ["all", "Frontend", "Backend", "Database", "AI & ML", "DevOps", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openSkill, setOpenSkill] = useState(null);

  const filteredSkills = Skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xscard-hover cursor-pointer"
              onClick={() => setOpenSkill(openSkill === skill.name ? null : skill.name)}
            >
              <div className="text-left mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-fill bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              {openSkill === skill.name && (
                <p className="mt-2 text-sm text-muted-foreground">{skill.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
