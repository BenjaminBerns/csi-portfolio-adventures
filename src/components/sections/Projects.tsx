
import React, { useState } from "react";
import { Github, ExternalLink, Tag } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
  accentColor: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Aide à la création d'un site web sur CMS",
      description: "Un site proposant du contenu en lien avec la profession de psychologue.",
      tags: ["Stage", "HTML/CSS", "PHP", "SQL", "BDD"],
      image: "../../public/code-1839406_1280.jpg",
      links: {
        github: "",
        live: "https://www.fabienneballet-psychologue.fr/"
      },
      accentColor: "bg-accent-sky/20 border-accent-sky/40"
    },
    {
      id: 2,
      title: "Projet FSI",
      description: "Application C# développé avec une interface WinForm permettant la gestion d'un tutorat",
      tags: ["BTS", "C#", "PLpgSQL"],
      image: "../../FSI_logo.png",
      links: {
        github: "https://github.com/BenjaminBerns/FSI_Administration"
      },
      accentColor: "bg-accent-mint/20 border-accent-mint/40"
    },
    {
      id: 3,
      title: "Jeu de GO",
      description: "Développement d'un Jeu de go fonctionnant avec Angular et enregistrer par localStorage",
      tags: ["Bachelor", "Node.js", "Angular", "TypeScript"],
      image: "../../go.png",
      links: {
        github: "https://github.com/BenjaminBerns/Go",
        live: ""
      },
      accentColor: "bg-accent-lavender/20 border-accent-lavender/40"
    },
    {
      id: 4,
      title: "Application Web MVC ",
      description: "Application web développée avec PHP basé sur un model MVC. Ce projet m'a permis d'apprendre a utiliser la librairie de google fullcalendar mais aussi la librairie d'alertes Sweet2Alert et GSAP",
      tags: ["Bachelor", "PHP", "MVC", "PLpgSQL"],
      image: "../../calendar.png",
      links: {
        github: "https://github.com/RomainBAU/TeamKinderPingouinsDispOLEN"
      },
      accentColor: "bg-accent-teal/20 border-accent-teal/40"
    },
    {
      id: 5,
      title: "Site référentiel produits",
      description: "Dans le cadre de mon alternance, j'ai été ammené à proposer des solutions pour améliorer le SAV. Le site que j'ai proposé réperiore tout les produits que nous proposons dans notre boutique accompagné de message de procédure de tests à distance à effectuer avant renvoie de produit",
      tags: ["Alternance", "???", "???", "???"],
      image: "../../kubiii.png",
      links: {
        github: "https://github.com/RomainBAU/TeamKinderPingouinsDispOLEN",
        live: "https://www.figma.com/design/XGP7iFSa2oMIQZNf0hcJmt/Untitled?node-id=0-1&p=f&t=8mXw7NaSOZiXmZOi-0"
      },
      accentColor: "bg-accent-teal/20 border-accent-teal/40"
    },
  ];

  const filters = ["Tous", "BTS", "Bachelor", "Stage", "Alternance"];
  
  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
    
  const getFilterColor = (filter: string) => {
    if (filter === activeFilter) {
      return "bg-primary text-primary-foreground";
    }
    
    switch (filter) {
      case "BTS":
        return "bg-accent-sky/20 text-gray-700 hover:bg-accent-sky/40";
      case "Bachelor":
        return "bg-accent-mint/20 text-gray-700 hover:bg-accent-mint/40";
      case "Stage":
        return "bg-accent-teal/20 text-gray-700 hover:bg-accent-teal/40";
      case "Alternance":
        return "bg-accent-lavender/20 text-gray-700 hover:bg-accent-lavender/40";
      default:
        return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
    }
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-2">Mon travail</p>
          <h2 className="section-title mb-6">
            <span className="relative inline-block">
              Projets réalisés
              <span className="absolute bottom-1 left-0 w-full h-2 bg-accent-lavender/40 -z-10"></span>
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes projets scolaires et professionnels réalisés entre 2022 et 2025.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${getFilterColor(filter)}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-1 reveal ${project.accentColor} border`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-sky/10 text-blue-deep"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center space-x-4">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-deep hover:text-blue-deep/80 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code source
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-deep hover:text-blue-deep/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le projet
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
