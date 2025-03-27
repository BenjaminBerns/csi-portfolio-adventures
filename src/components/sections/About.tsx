
import React, { useEffect } from "react";
import { Monitor, Code, Server, Book } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      icon: <Monitor className="w-6 h-6 mb-4 text-white" />,
      title: "Front-End", 
      items: ["HTML/CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
      bgClass: "bg-blue-500 border-blue-600 shadow-md shadow-blue-300/30"
    },
    { 
      icon: <Server className="w-6 h-6 mb-4 text-white" />,
      title: "Back-End", 
      items: ["Node.js", "PHP", "Python", "MySQL", "MongoDB"],
      bgClass: "bg-emerald-500 border-emerald-600 shadow-md shadow-emerald-300/30" 
    },
    { 
      icon: <Code className="w-6 h-6 mb-4 text-white" />,
      title: "Langages", 
      items: ["Java", "C#", "Python", "JavaScript", "PHP"],
      bgClass: "bg-violet-500 border-violet-600 shadow-md shadow-violet-300/30"
    },
    { 
      icon: <Book className="w-6 h-6 mb-4 text-white" />,
      title: "Formations", 
      items: ["Bachelor CSI (en cours)", "BTS SIO SLAM", "Certifications diverses"],
      bgClass: "bg-teal-500 border-teal-600 shadow-md shadow-teal-300/30"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-2">Qui suis-je</p>
          <h2 className="section-title mb-6">
            <span className="relative inline-block">
              À propos de moi
              <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-300 -z-10"></span>
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionné par l'informatique et le développement, je suis actuellement étudiant en Bachelor CSI après avoir obtenu un BTS SIO SLAM. 
            J'ai acquis de l'expérience professionnelle à travers deux stages et une alternance en tant que développeur chez Kubii.
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
              <h3 className="text-xl font-semibold mb-4 text-white">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-white/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <Tabs defaultValue="parcours" className="w-full reveal">
            <TabsList className="w-full bg-white/60 backdrop-blur-sm mb-8">
              <TabsTrigger value="parcours" className="flex-1 text-blue-800">Mon parcours</TabsTrigger>
              <TabsTrigger value="objectifs" className="flex-1 text-blue-800">Mes objectifs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="parcours" className="p-6 rounded-lg border-2 border-blue-300 bg-blue-100/70 reveal">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Mon parcours</h3>
              <p className="text-blue-900 mb-6">
                Après mon BTS SIO SLAM (Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers), 
                j'ai choisi de poursuivre mes études avec un Bachelor CSI pour approfondir mes connaissances et compétences dans le domaine de l'informatique.
              </p>
              <p className="text-blue-900">
                Mon expérience professionnelle, notamment lors de mon alternance chez Kubii, m'a permis d'appliquer mes connaissances 
                théoriques dans un contexte réel et de développer mes compétences en travaillant sur des projets concrets.
              </p>
            </TabsContent>
            
            <TabsContent value="objectifs" className="p-6 rounded-lg border-2 border-purple-300 bg-purple-100/70 reveal">
              <h3 className="text-2xl font-semibold mb-4 text-purple-800">Mes objectifs</h3>
              <p className="text-purple-900 mb-6">
                Mon objectif principal est de continuer à me développer en tant que développeur full stack, en restant à jour
                avec les dernières technologies et les meilleures pratiques du secteur.
              </p>
              <p className="text-purple-900">
                Je suis particulièrement intéressé par les projets qui présentent des défis techniques et qui me permettent 
                d'apprendre de nouvelles compétences, tout en contribuant à créer des solutions innovantes et efficaces.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
