
import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "alternance" | "stage" | "education";
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Développeur Web",
      company: "Kubii",
      location: "Paris",
      period: "2022 - 2023",
      description: [
        "Développement et maintenance d'applications web avec React et Node.js",
        "Participation à l'intégration continue et au déploiement (CI/CD)",
        "Collaboration avec les équipes de design et de produit"
      ],
      type: "alternance"
    },
    {
      id: 2,
      role: "Développeur Full Stack",
      company: "Entreprise XYZ",
      location: "Lyon",
      period: "Mai - Août 2022",
      description: [
        "Création d'une application web de gestion de projets",
        "Utilisation de Vue.js pour le front-end et Laravel pour le back-end",
        "Mise en place d'une API RESTful"
      ],
      type: "stage"
    },
    {
      id: 3,
      role: "Développeur Front-End",
      company: "Startup ABC",
      location: "Marseille",
      period: "Janvier - Février 2021",
      description: [
        "Refonte de l'interface utilisateur du site web principal",
        "Intégration de maquettes Figma en HTML/CSS/JavaScript",
        "Optimisation des performances et de l'accessibilité"
      ],
      type: "stage"
    },
    {
      id: 4,
      role: "Bachelor CSI",
      company: "École Supérieure d'Informatique",
      location: "Paris",
      period: "2022 - Présent",
      description: [
        "Spécialisation en développement web et applications mobiles",
        "Projets pratiques en équipe sur des cas réels d'entreprise",
        "Étude des architectures cloud et DevOps"
      ],
      type: "education"
    },
    {
      id: 5,
      role: "BTS SIO SLAM",
      company: "Lycée Technique",
      location: "Paris",
      period: "2020 - 2022",
      description: [
        "Solutions Logicielles et Applications Métiers",
        "Développement d'applications, bases de données, programmation objet",
        "Projets professionnels et stages en entreprise"
      ],
      type: "education"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "alternance":
      case "stage":
        return <Briefcase className="w-5 h-5" />;
      case "education":
        return <Calendar className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "alternance":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "stage":
        return "bg-green-50 text-green-700 border-green-200";
      case "education":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <section id="experience" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-2">Mon parcours</p>
          <h2 className="section-title mb-6">Expérience professionnelle et formation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours combine formation académique en informatique et expériences professionnelles 
            en développement à travers stages et alternance.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-border -ml-px md:ml-0 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row gap-8 reveal ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-7 h-7 rounded-full bg-background border-2 border-primary -ml-3 md:-ml-3.5 hidden md:block"></div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12 md:text-right">
                  <div className="flex items-center md:justify-end mb-1 md:hidden">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(exp.type)} border`}>
                      {getTypeIcon(exp.type)}
                      <span className="ml-1">
                        {exp.type === "alternance" ? "Alternance" : exp.type === "stage" ? "Stage" : "Formation"}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="flex items-center md:justify-end space-x-2 text-muted-foreground">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" /> {exp.location}
                    </span>
                  </div>
                  <div className="mt-1 mb-4 flex items-center md:justify-end">
                    <div className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${getTypeColor(exp.type)} border">
                      {getTypeIcon(exp.type)}
                      <span className="ml-1">
                        {exp.type === "alternance" ? "Alternance" : exp.type === "stage" ? "Stage" : "Formation"}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 pl-10 md:pl-12">
                  <div className="text-sm text-muted-foreground mb-3">{exp.period}</div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
