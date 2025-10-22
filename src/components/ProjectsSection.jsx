import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Monolith-to-Microservices Migration",
    description:
      "Migrated a legacy monolithic HMI into a modular microservices architecture using Spring Boot, Docker, and Kubernetes, improving scalability and maintainability.",
    image: "/projects/IhmMicroservices.png",
    tags: ["Spring Boot", "Microservices", "Docker", "Kubernetes"],
    github: "https://github.com/NibrasAmmar01/",
  },
  {
    id: 2,
    title: "Kafka Messaging App",
    description:
      "Developed a real-time messaging application with Spring Boot, Kafka, and Vite for fast and scalable message delivery between users.",
    image: "/projects/Messaging.jpg",
    tags: ["Spring Boot", "Kafka", "Vite", "WebSocket"],
    github: "https://github.com/NibrasAmmar01/Kafka-Messaging-App",
  },
  {
    id: 3,
    title: "Microservices with Dapr & Kubernetes",
    description:
      "Built distributed microservices with TypeScript, Vue.js, and .NET, orchestrated via Kubernetes with Dapr for inter-service communication.",
    image: "/projects/Deployments.jpg",
    tags: ["TypeScript", "Vue.js", ".NET", "Dapr", "Kubernetes"],
    github:
      "https://github.com/haroun08/Project-administration-r-seaux-et-services",
  },
  {
    id: 4,
    title: "Order Microservice",
    description:
      "Implemented a Spring Boot microservice for order processing and management, communicating with other services via REST APIs and secured with Docker containers.",
    image: "/projects/Order.jpg",
    tags: ["Spring Boot", "Java", "PostgreSQL", "Docker"],
    github:
      "https://github.com/RamziHaddad/projet-soa-ecommerce-enit-2024-3AINFO2/tree/order",
  },
  {
    id: 5,
    title: "Medical Q&A AI Assistant",
    description:
      "Fine-tuned the Llama-3 8B model to create a medical chatbot capable of answering healthcare questions accurately using domain-specific datasets.",
    image: "/projects/RagSystem.png",
    tags: ["Python", "LLM", "Llama-3", "Docker"],
    github: "https://github.com/NibrasAmmar01/Finetuning_LLM",
  },
  {
    id: 6,
    title: "Multi-Tier Security Infrastructure",
    description:
      "Designed and implemented a multi-layered security system on Microsoft Azure to protect application, data, and network layers.",
    image: "/projects/azureArchitecture.jpg",
    tags: ["Azure", "NGINX", "Firewall"],
    github: "https://github.com/NibrasAmmar01/",
  },
  {
    id: 7,
    title: "Facial Recognition System",
    description:
      "Developed a facial detection and recognition system using deep learning models and ESP32-CAM for real-time recognition.",
    image: "/projects/FacialRecognition.png",
    tags: ["Python", "Deep Learning", "ESP32-CAM"],
    github:
      "https://drive.google.com/file/d/1tqM0VGHcV6HX2_2aW8Agb-D5Ufk_tBJF/view?usp=sharing",
  },
  {
    id: 8,
    title: "Project Management System",
    description:
      "Created a web-based system for task management and team collaboration using Java EE and MySQL.",
    image: "/projects/JEE.jpg",
    tags: ["JEE", "MySQL", "Bootstrap"],
    github: "https://github.com/NibrasAmmar01/J2EE",
  },
  {
    id: 9,
    title: "Stock Trading Simulator",
    description:
      "Built a C++ simulator to allow users to test trading strategies with real-time market simulations.",
    image: "/projects/stock.jpg",
    tags: ["C++", "Simulation", "Finance"],
    github: "https://github.com/achrefGT/TradingSimulator",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my most impactful projects showcasing my experience in
          full-stack development, cloud infrastructure, and AI-driven solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* GitHub Icon Overlay */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-black/70 hover:bg-primary/80 p-2 rounded-full transition-all duration-300"
                  title="View on GitHub"
                >
                  <Github className="h-4 w-4 text-white" />
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full 
                      bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10 
                      text-primary border border-primary/20 
                      shadow-sm hover:shadow-md hover:from-primary/20 hover:to-secondary/30
                      transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/NibrasAmmar01/">
                Check My Github <ArrowRight size={16}></ArrowRight>
            </a>
        </div>
      </div>
    </section>
  );
};
