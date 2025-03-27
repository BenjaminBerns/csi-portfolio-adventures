
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = () => {
      if (titleRef.current) {
        titleRef.current.classList.add("animate-fade-in");
      }
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add("animate-fade-up");
        }
      }, 400);
      
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.classList.add("animate-fade-up");
        }
      }, 800);
    };
    
    timeline();
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative px-6"
    >
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-soft rounded-bl-full opacity-40 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-cool rounded-tr-full opacity-30 blur-3xl -z-10" />
      
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-sm md:text-base font-medium text-muted-foreground mb-4" ref={subtitleRef} style={{ opacity: 0 }}>
          <span className="bg-accent-teal px-3 py-1 rounded-full text-gray-700">Développeur Full Stack</span>
        </p>
        
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-6" 
          ref={titleRef}
          style={{ opacity: 0 }}
        >
          <span className="block">Bienvenue sur</span> 
          <span className="block relative inline-block">
            <span className="relative z-10">mon Portfolio</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-lavender opacity-40 -z-10 transform -rotate-1"></span>
          </span>
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8" 
          ref={subtitleRef}
          style={{ opacity: 0 }}
        >
          Étudiant en Bachelor CSI et diplômé d'un BTS SIO SLAM,
          <br />passionné par le développement web et les nouvelles technologies.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4" ref={ctaRef} style={{ opacity: 0 }}>
          <a 
            href="#projects" 
            className="bg-blue-deep text-primary-foreground px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-teal/20 to-accent-sky/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative">Voir mes projets</span>
          </a>
          <a 
            href="#contact" 
            className="bg-blue-light text-secondary-foreground px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-lavender/20 to-accent-mint/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative">Me contacter</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="bg-accent-teal/50 p-2 rounded-full hover:bg-accent-teal/70 transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-accent-sky/50 floating-element hidden md:block"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-accent-mint/50 floating-element hidden md:block" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-accent-lavender/50 floating-element hidden md:block" style={{ animationDelay: "1.5s" }}></div>
    </section>
  );
};

export default Hero;
