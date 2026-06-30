import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center opacity-0 animate-fade-in">
            <div className="relative">
              {/* Outer glow, breathing */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl scale-125 animate-pulse" />
              {/* Inner glow, tighter */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110" />

              <img
                src="/Professional.png"
                alt="Nebras Ammar"
                className="relative h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-primary/40 ring-offset-4 ring-offset-background border-2 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nebras</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Ammar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build web applications, intelligent systems, and software that
            solves real problems <br className="sm:block hidden" />
            — combining clean architecture with practical engineering.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};