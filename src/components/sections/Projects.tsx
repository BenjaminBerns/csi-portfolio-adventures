
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
      title: "Application de Gestion",
      description: "Une application complète de gestion de stocks avec interface utilisateur réactive développée pendant mon BTS SIO SLAM.",
      tags: ["BTS", "React", "Node.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      links: {
        github: "#",
        live: "#"
      },
      accentColor: "bg-accent-sky/20 border-accent-sky/40"
    },
    {
      id: 2,
      title: "Portfolio E-commerce",
      description: "Site e-commerce développé dans le cadre de mon parcours en Bachelor CSI, incluant panier, paiement et gestion des commandes.",
      tags: ["Bachelor", "Vue.js", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=2070",
      links: {
        github: "#"
      },
      accentColor: "bg-accent-mint/20 border-accent-mint/40"
    },
    {
      id: 3,
      title: "API RESTful",
      description: "Développement d'une API RESTful pour un système de réservation, projet réalisé lors de mon alternance chez Kubii.",
      tags: ["Alternance", "Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070",
      links: {
        github: "#",
        live: "#"
      },
      accentColor: "bg-accent-lavender/20 border-accent-lavender/40"
    },
    {
      id: 4,
      title: "Application Mobile",
      description: "Application mobile développée pendant mon stage, permettant aux utilisateurs de consulter et gérer leurs rendez-vous.",
      tags: ["Stage", "React Native", "Firebase"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
      links: {
        github: "#"
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
            Découvrez mes projets scolaires et professionnels réalisés pendant mon BTS SIO SLAM, mon Bachelor CSI, 
            mes stages et mon alternance chez Kubii.
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
