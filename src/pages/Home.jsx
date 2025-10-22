import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ExperienceSection } from "../components/ExperienceSection";
export const Home = () => {
    return ( <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
        {/* Theme Toggle*/ }
        <ThemeToggle />

        {/* Background Effects*/ }
        <StarBackground />

        {/* Navbar */ }
        <Navbar />

        {/* Main Contact */}
        <main>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <SkillsSection></SkillsSection>
            <ExperienceSection></ExperienceSection>
            <ProjectsSection></ProjectsSection>
            <ContactSection></ContactSection>
        </main>


        {/* Fouter */}
        <Footer />

    </div>
    );
};