
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
      icon: <Monitor className="w-6 h-6 mb-4" />,
      title: "Front-End", 
      items: ["HTML/CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"] 
    },
    { 
      icon: <Server className="w-6 h-6 mb-4" />,
      title: "Back-End", 
      items: ["Node.js", "PHP", "Python", "MySQL", "MongoDB"] 
    },
    { 
      icon: <Code className="w-6 h-6 mb-4" />,
      title: "Langages", 
      items: ["Java", "C#", "Python", "JavaScript", "PHP"] 
    },
    { 
      icon: <Book className="w-6 h-6 mb-4" />,
      title: "Formations", 
      items: ["Bachelor CSI (en cours)", "BTS SIO SLAM", "Certifications diverses"] 
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-2">Qui suis-je</p>
          <h2 className="section-title mb-6">À propos de moi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionné par l'informatique et le développement, je suis actuellement étudiant en Bachelor CSI après avoir obtenu un BTS SIO SLAM. 
            J'ai acquis de l'expérience professionnelle à travers deux stages et une alternance en tant que développeur chez Kubii.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="bg-background rounded-lg p-6 shadow-sm text-center reveal card-hover"
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
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mon parcours</h3>
            <p className="text-muted-foreground mb-6">
              Après mon BTS SIO SLAM (Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers), 
              j'ai choisi de poursuivre mes études avec un Bachelor CSI pour approfondir mes connaissances et compétences dans le domaine de l'informatique.
            </p>
            <p className="text-muted-foreground">
              Mon expérience professionnelle, notamment lors de mon alternance chez Kubii, m'a permis d'appliquer mes connaissances 
              théoriques dans un contexte réel et de développer mes compétences en travaillant sur des projets concrets.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mes objectifs</h3>
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
