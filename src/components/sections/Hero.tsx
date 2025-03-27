
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
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-accent/30 to-transparent rounded-bl-full opacity-30 blur-3xl -z-10" />
      
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-sm md:text-base font-medium text-muted-foreground mb-4" ref={subtitleRef} style={{ opacity: 0 }}>
          Développeur Full Stack
        </p>
        
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-6" 
          ref={titleRef}
          style={{ opacity: 0 }}
        >
          <span className="block">Bienvenue sur</span> 
          <span className="block">mon Portfolio</span>
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
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Voir mes projets
          </a>
          <a 
            href="#contact" 
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Me contacter
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
