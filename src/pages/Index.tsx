
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { setupRevealAnimations } from "@/lib/animations";

const Index = () => {
  useEffect(() => {
    // Setup reveal animations
    const cleanupAnimations = setupRevealAnimations();
    
    // Cleanup event listeners on unmount
    return () => {
      cleanupAnimations();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
