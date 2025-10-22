import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Migration and Evolution of a Human-Machine Interface Project towards a Microservices Architecture",
      role: "Intern – Sofrecom Tunisia",
      company: "Tunis, Tunisia",
      period: "February 2024 – July 2024",
      description:
        "Migrated a monolithic HMI application to a microservices architecture using Spring Boot, Spring Cloud, and centralized security. Deployed services through Docker, Kubernetes, and GitLab CI/CD while ensuring scalability and maintainability.",
      technologies: [
        "Spring Boot",
        "Spring Security",
        "Spring Cloud",
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
        "WebClient",
        "Cassandra",
      ],
    },
    {
      title: "Fine-Tuning an Online LLM and Integrating a Local LLM with RAG for Document Interaction",
      role: "Intern – Vermeg",
      company: "Tunis, Tunisia",
      period: "July 2024 – August 2024",
      description:
        "Fine-tuned the Llama-3 8B model for medical Q&A tasks and built an interactive local UI. Designed and automated a response scoring pipeline based on user feedback ratings, improving model accuracy and usability.",
      technologies: [
        "Python",
        "LLM Fine-Tuning",
        "LoRA",
        "Interactive UI",
        "Docker",
      ],
    },
    {
      title: "Facial Recognition with Siamese Network and ESP32-CAM Implementation",
      role: "Intern – TAC TIC",
      company: "Ariana, Tunisia",
      period: "June 2023 – July 2023",
      description:
        "Developed a deep learning facial recognition algorithm using a Siamese model and implemented a real-time facial detection system with ESP32-CAM and Arduino. Gained experience with the ReactJS framework for UI development.",
      technologies: [
        "Python",
        "Arduino IDE",
        "ESP32-CAM",
        "ReactJS",
        "Deep Learning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here’s a look at my professional journey, exploring AI, software engineering, and system architecture through hands-on professional projects.
        </p>

        {/* Timeline */}
        <div className="relative border-l-2 border-primary/30 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              {/* Timeline Dot above the card */}
              <div className="absolute -top-6 left-0 -translate-x-1/2 flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full shadow-md">
               <Briefcase className="h-3.5 w-3.5" />
              </div>


              {/* Card */}
              <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/30">
                {/* Role & Company */}
                <h3 className="text-lg font-semibold text-primary mb-1">{exp.role}</h3>
                <h4 className="text-md font-medium text-foreground mb-1">{exp.company}</h4>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>

                {/* Experience Title */}
                <h5 className="text-md font-bold mb-2 text-primary/90 border-l-4 border-primary pl-2">
                  {exp.title}
                </h5>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
