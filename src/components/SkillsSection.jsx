import { useState } from "react";
import { cn } from "../lib/utils";

const Skills = [
  // Frontend
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "ReactJS", level: 85, category: "Frontend" },
  { name: "Angular", level: 75, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "JQuery", level: 80, category: "Frontend" },
  { name: "Flutter (UI)", level: 70, category: "Frontend" },

  // Backend
  { name: "NodeJS", level: 85, category: "Backend" },
  { name: "ExpressJS", level: 80, category: "Backend" },
  { name: "Java (JEE/Spring Boot)", level: 85, category: "Backend" },
  { name: "Symfony", level: 75, category: "Backend" },
  { name: "PHP", level: 75, category: "Backend" },
  { name: "C#", level: 80, category: "Backend" },
  {name: "C++", level: 80, category: "Backend"},
  { name: "Python", level: 85, category: "Backend" },

  // Databases
  { name: "SQL", level: 85, category: "Database" },
  { name: "MySQL", level: 80, category: "Database" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "Oracle / PL/SQL", level: 75, category: "Database" },
  { name: "Cassandra", level: 75, category: "Database" },
  { name: "MongoDB", level: 75, category: "Database" },


  // AI / Data / DevOps
  { name: "TensorFlow", level: 70, category: "AI & ML" },
  { name: "PyTorch", level: 70, category: "AI & ML" },
  { name: "Deep Learning", level: 70, category: "AI & ML" },
  { name: "LLMs", level: 65, category: "AI & ML" },
  { name: "Docker", level: 80, category: "DevOps" },
  { name: "Kubernetes", level: 70, category: "DevOps" },
  { name: "Azure", level: 75, category: "DevOps" },
  { name: "AWS", level: 70, category: "DevOps" },
  { name: "Git / GitLab CI", level: 85, category: "DevOps" },

  // Development Tools
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "IntelliJ IDEA", level: 85, category: "Tools" },
  { name: "Visual Studio", level: 80, category: "Tools" },
  { name: "Android Studio", level: 75, category: "Tools" }
];

const categories = ["all", "Frontend", "Backend", "Database", "AI & ML", "DevOps", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = Skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span> 
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} 
                    onClick={() => setActiveCategory(category)} 
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xscard-hover ">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-fill bg-secondary/50 h-2 rounded-full overflow-hidden">
                          <div 
                              className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                              style={{width:skill.level + "%"}}
                          />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
}