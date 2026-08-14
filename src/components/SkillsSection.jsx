import { useState } from "react";
import { cn } from "../lib/utils";

const Skills = [
  // Frontend
  {
    name: "HTML",
    level: 95,
    category: "Frontend",
    description:
      "Used in multiple web projects to structure content efficiently.",
  },
  {
    name: "CSS",
    level: 90,
    category: "Frontend",
    description:
      "Styled responsive layouts using modern CSS techniques.",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "Frontend",
    description:
      "Built interactive front-end features in ReactJS and Angular.",
  },
  {
    name: "TypeScript",
    level: 80,
    category: "Frontend",
    description:
      "Used for type-safe frontend and full-stack development with modern JavaScript frameworks.",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "Frontend",
    description:
      "Designed modern UI components quickly with utility-first styling.",
  },
  {
    name: "ReactJS",
    level: 85,
    category: "Frontend",
    description:
      "Developed dynamic user interfaces for web applications.",
  },
  {
    name: "Angular",
    level: 75,
    category: "Frontend",
    description:
      "Built single-page applications during academic and professional projects.",
  },
  {
    name: "Bootstrap",
    level: 85,
    category: "Frontend",
    description:
      "Implemented responsive designs in several projects.",
  },
  {
    name: "JQuery",
    level: 80,
    category: "Frontend",
    description:
      "Handled DOM manipulation and AJAX calls in legacy projects.",
  },
  {
    name: "Flutter (UI)",
    level: 70,
    category: "Frontend",
    description:
      "Created mobile app UIs for small projects.",
  },

  // Backend
  {
    name: "NodeJS",
    level: 85,
    category: "Backend",
    description:
      "Developed backend APIs and server logic for projects.",
  },
  {
    name: "ExpressJS",
    level: 80,
    category: "Backend",
    description:
      "Built REST APIs for web applications.",
  },
  {
    name: "Java (JEE/Spring Boot)",
    level: 85,
    category: "Backend",
    description:
      "Created backend services, REST APIs, and microservices in Java.",
  },
  {
    name: "Spring Cloud",
    level: 80,
    category: "Backend",
    description:
      "Worked with Spring Cloud components including service discovery, API gateways, and distributed microservices.",
  },
  {
    name: "Spring Cloud Gateway",
    level: 80,
    category: "Backend",
    description:
      "Implemented API gateway routing and request filtering for microservices architectures.",
  },
  {
    name: "Kafka",
    level: 75,
    category: "Backend",
    description:
      "Developed event-driven applications and real-time messaging systems using Apache Kafka.",
  },
  {
    name: "REST APIs",
    level: 90,
    category: "Backend",
    description:
      "Designed and integrated RESTful APIs across frontend, backend, and microservice applications.",
  },
  {
    name: "Microservices",
    level: 85,
    category: "Backend",
    description:
      "Designed and developed distributed microservice architectures using Spring Boot, service discovery, API gateways, and Docker.",
  },
  {
    name: "Symfony",
    level: 75,
    category: "Backend",
    description:
      "Developed PHP-based backend systems.",
  },
  {
    name: "PHP",
    level: 75,
    category: "Backend",
    description:
      "Implemented backend functionality and database interactions.",
  },
  {
    name: "C#",
    level: 80,
    category: "Backend",
    description:
      "Used for backend logic and small desktop projects.",
  },
  {
    name: "C++",
    level: 80,
    category: "Backend",
    description:
      "Built algorithms and simulations for coursework and projects.",
  },
  {
    name: "Python",
    level: 85,
    category: "Backend",
    description:
      "Developed scripts, AI pipelines, automation tools, and backend logic.",
  },
  {
    name: "FastAPI",
    level: 70,
    category: "Backend",
    description:
      "Used Python FastAPI to build lightweight backend APIs and AI-powered applications.",
  },

  // Databases
  {
    name: "SQL",
    level: 85,
    category: "Database",
    description:
      "Designed queries, database structures, joins, aggregations, and data access logic.",
  },
  {
    name: "MySQL",
    level: 80,
    category: "Database",
    description:
      "Managed relational databases for web applications.",
  },
  {
    name: "PostgreSQL",
    level: 80,
    category: "Database",
    description:
      "Worked with PostgreSQL for backend applications, financial systems, and advanced SQL queries.",
  },
  {
    name: "Oracle / PL/SQL",
    level: 75,
    category: "Database",
    description:
      "Implemented stored procedures and database logic.",
  },
  {
    name: "Cassandra",
    level: 75,
    category: "Database",
    description:
      "Handled NoSQL database structures and worked with Cassandra data management.",
  },
  {
    name: "MongoDB",
    level: 75,
    category: "Database",
    description:
      "Created NoSQL database models for projects.",
  },
  {
    name: "Redis",
    level: 75,
    category: "Database",
    description:
      "Used Redis for caching, session-related data, and storing application security information.",
  },
  {
    name: "Elasticsearch",
    level: 65,
    category: "Database",
    description:
      "Worked with Elasticsearch for search and distributed data indexing use cases.",
  },

  // AI / ML
  {
    name: "TensorFlow",
    level: 70,
    category: "AI & ML",
    description:
      "Built and trained machine learning and deep learning models.",
  },
  {
    name: "PyTorch",
    level: 70,
    category: "AI & ML",
    description:
      "Implemented deep learning pipelines and experimented with neural network models.",
  },
  {
    name: "Scikit-learn",
    level: 75,
    category: "AI & ML",
    description:
      "Used for machine learning experiments, preprocessing, evaluation, and model development.",
  },
  {
    name: "Hugging Face",
    level: 70,
    category: "AI & ML",
    description:
      "Used transformer models and Hugging Face tooling for NLP and large language model projects.",
  },
  {
    name: "Deep Learning",
    level: 70,
    category: "AI & ML",
    description:
      "Worked on image recognition, NLP, and neural network-based projects.",
  },
  {
    name: "Computer Vision",
    level: 70,
    category: "AI & ML",
    description:
      "Developed computer vision solutions including facial recognition and AI-generated image detection.",
  },
  {
    name: "LLMs",
    level: 70,
    category: "AI & ML",
    description:
      "Worked with large language models for question answering, content generation, and AI-powered applications.",
  },
  {
    name: "LLM Fine-Tuning",
    level: 70,
    category: "AI & ML",
    description:
      "Fine-tuned Llama-3 8B for domain-specific question-answering using modern parameter-efficient techniques.",
  },
  {
    name: "AI Agents",
    level: 65,
    category: "AI & ML",
    description:
      "Built AI-powered agents for automation, research, content generation, and workflow orchestration.",
  },

  // DevOps
  {
    name: "Docker",
    level: 80,
    category: "DevOps",
    description:
      "Containerized applications and microservices for consistent development and deployment.",
  },
  {
    name: "Docker Compose",
    level: 80,
    category: "DevOps",
    description:
      "Orchestrated multi-container development environments and distributed applications.",
  },
  {
    name: "Kubernetes",
    level: 70,
    category: "DevOps",
    description:
      "Deployed and managed microservices using Kubernetes clusters.",
  },
  {
    name: "Azure",
    level: 75,
    category: "DevOps",
    description:
      "Configured cloud infrastructure and services.",
  },
  {
    name: "AWS",
    level: 70,
    category: "DevOps",
    description:
      "Used cloud services for deployment and storage.",
  },
  {
    name: "Git / GitLab CI",
    level: 85,
    category: "DevOps",
    description:
      "Version control and CI/CD pipeline management.",
  },
  {
    name: "CI/CD",
    level: 80,
    category: "DevOps",
    description:
      "Implemented automated build, test, and deployment workflows.",
  },
  {
    name: "Minikube",
    level: 70,
    category: "DevOps",
    description:
      "Used Minikube for local Kubernetes development and microservice deployments.",
  },

  // Tools
  {
    name: "VS Code",
    level: 90,
    category: "Tools",
    description:
      "Primary IDE for web, AI, and backend development.",
  },
  {
    name: "IntelliJ IDEA",
    level: 85,
    category: "Tools",
    description:
      "Used extensively for Java and Spring Boot projects.",
  },
  {
    name: "Visual Studio",
    level: 80,
    category: "Tools",
    description:
      "Developed C# and desktop projects.",
  },
  {
    name: "Android Studio",
    level: 75,
    category: "Tools",
    description:
      "Built Flutter and Android applications.",
  },
  {
    name: "Git",
    level: 90,
    category: "Tools",
    description:
      "Used Git extensively for version control, branching, collaboration, and project management.",
  },
  {
    name: "GitHub",
    level: 90,
    category: "Tools",
    description:
      "Used GitHub for source control, project collaboration, portfolio projects, and software development workflows.",
  },
];

const categories = [
  "all",
  "Frontend",
  "Backend",
  "Database",
  "AI & ML",
  "DevOps",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openSkill, setOpenSkill] = useState(null);

  const filteredSkills = Skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
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
              className="bg-card p-6 rounded-lg shadow-sm card-hover cursor-pointer"
              onClick={() =>
                setOpenSkill(
                  openSkill === skill.name ? null : skill.name
                )
              }
            >
              <div className="text-left mb-2">
                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              {openSkill === skill.name && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};