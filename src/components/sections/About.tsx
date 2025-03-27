
import React, { useEffect } from "react";
import { Monitor, Code, Server, Book } from "lucide-react";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    { 
      icon: <Monitor className="w-6 h-6 mb-4 text-accent-sky" />,
      title: "Front-End", 
      items: ["HTML/CSS", "JavaScript", "React", "Angular", "Tailwind CSS", "GSAP"],
      bgClass: "bg-accent-sky/20 border-accent-sky/40 shadow-sm shadow-accent-sky/20"
    },
    { 
      icon: <Server className="w-6 h-6 mb-4 text-accent-mint" />,
      title: "Back-End", 
      items: ["Node.js", "PHP", "Python", "MySQL", "PgAdmin", "Laravel", "Symphony"],
      bgClass: "bg-accent-mint/20 border-accent-mint/40 shadow-sm shadow-accent-mint/20" 
    },
    { 
      icon: <Code className="w-6 h-6 mb-4 text-accent-lavender" />,
      title: "Compétences", 
      items: ["Java", "C#", "SQL", "Figma", "Adobe XD", "Gestion de projet", "UML"],
      bgClass: "bg-accent-lavender/20 border-accent-lavender/40 shadow-sm shadow-accent-lavender/20"
    },
    { 
      icon: <Book className="w-6 h-6 mb-4 text-accent-teal" />,
      title: "Formations", 
      items: ["MBA Développeur Full-Stack 2025 - 2027", "Bachelor CSI (en cours)", "BTS SIO SLAM | 2022 - 2024", "BAC STI2D SIN | 2021"],
      bgClass: "bg-accent-teal/20 border-accent-teal/40 shadow-sm shadow-accent-teal/20"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-2">Qui suis-je</p>
          <h2 className="section-title mb-6">
            <span className="relative inline-block">
              À propos de moi
              <span className="absolute bottom-1 left-0 w-full h-2 bg-accent-teal/40 -z-10"></span>
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionné par l'informatique et le développement, je suis actuellement étudiant en Bachelor CSI après avoir obtenu un BTS SIO SLAM. 
            J'ai acquis une certaine expérience professionnelle à travers deux stages et une alternance en tant que développeur et également grâce à mes études.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className={`${skill.bgClass} rounded-lg p-6 border text-center reveal card-hover`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
          <div className="p-6 rounded-lg border border-accent-sky/20 bg-accent-sky/5">
            <h3 className="text-2xl font-semibold mb-4 text-blue-deep">Mon parcours</h3>
            <p className="text-muted-foreground mb-6">
              Après mon BTS SIO SLAM (Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers), 
              j'ai choisi de poursuivre mes études avec un Bachelor CSI pour approfondir mes connaissances et compétences dans le domaine de l'informatique.
            </p>
            <p className="text-muted-foreground">
              Mon expérience professionnelle, notamment lors de mon alternance chez Kubii, m'a permis d'appliquer mes connaissances 
              théoriques dans un contexte réel et de développer mes compétences en travaillant sur des projets concrets.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-accent-lavender/20 bg-accent-lavender/5">
            <h3 className="text-2xl font-semibold mb-4 text-blue-deep">Mes objectifs</h3>
            <p className="text-muted-foreground mb-6">
              Mon objectif principal est de continuer à me développer en tant que développeur full stack, en restant à jour
              avec les dernières technologies et les meilleures pratiques du secteur.
            </p>
            <p className="text-muted-foreground">
              Je suis particulièrement intéressé par les projets qui présentent des défis techniques et qui me permettent 
              d'apprendre de nouvelles compétences, tout en contribuant à créer des solutions innovantes et efficaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
