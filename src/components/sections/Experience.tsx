
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
  accentColor: string;
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "MBA Développeur Ful-Stack",
      company: "MyDigitalSchool",
      location: "Lyon, Dauphiné",
      period: "2025 - 2027",
      description: [
        "Approfondissement des connaissannces étudier en BTS et découverte de nouvelles technologies - Angular, Symphony, React, ... ",
        "Aspect Gestion de projet approfondi avec un projet fil rouge basée autour de la création d'une entreprise fictive répondant à des besoins réel en association avec d'autres filiaires",
        "Poste en alternance chez ???"
      ],
      type: "education",
      accentColor: "bg-accent-teal/50"
    },
    {
      id: 2,
      role: "Technicien",
      company: "Kubii",
      location: "Dardilly",
      period: "2024 - 2025",
      description: [
        "Développement de nouveaux Kit et Tests de différents produits proposé par la boutique en ligne Kubii",
        "Usage fréquent des différents OS tel que Unbuntu, Raspberry pi OS, Windows, Home Assistant OS, RecalBox, ...",
        "--Service après vente--"
      ],
      type: "alternance",
      accentColor: "bg-accent-lavender/50"
    },
    {
      id: 3,
      role: "Bachelor CSI",
      company: "École ORT",
      location: "Lyon, Bachut",
      period: "2024 - 2025",
      description: [
        "Approfondissement des connaissannces étudier en BTS et découverte de nouvelles technologies - Angular, Symphony, React, ... ",
        "Projets en équipe sur des enjeux fictifs permettant de mettre en pratique la théorie étudier en cours",
        "Poste en alternance chez Kubii"
      ],
      type: "education",
      accentColor: "bg-accent-mint/50"
    },
    {
      id: 4,
      role: "Développeur VBA",
      company: "Grand Lyon",
      location: "Lyon",
      period: "janvier - février 2024",
      description: [
        "Améliorations de fichier excel avec ajouts de fonctionnalitées poussé en VBA",
        "Développement des connaissances et compétences avec la suite Office et en Visual Basic",
        "--Service Comptable--"
      ],
      type: "stage",
      accentColor: "bg-accent-teal/50"
    },
    {
      id: 5,
      role: "Développeur Back-end",
      company: "Decelo",
      location: "Meyzieux",
      period: "Mai - juin 2023",
      description: [
        "Modification de contenu sur le CMS SPIP, création de formulaire PHP implémenter sur le site, création de charte graphique",
        "Développement des compétences en HTML / CSS / PHP",
        "--Aide à la reconvertion professionnel--"
      ],
      type: "stage",
      accentColor: "bg-accent-teal/50"
    },
    {
      id: 6,
      role: "BTS SIO SLAM",
      company: "École ORT",
      location: "Lyon, Bachut",
      period: "2022 - 2024",
      description: [
        "Apprentissage de différents langages de programmation tel que C#, Java, PHP, Python, Laravel, ... Et également de base de donnée avec SQL sur MySql et PgAdmin",
        "Développement d'applications Web & Mobile, bases de données, programmation orienté objet, MVC",
        "Deux stages effectué en entreprise d'une période de 6 semaines chacuns"
      ],
      type: "education",
      accentColor: "bg-accent-sky/50"
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
        return "bg-accent-lavender/20 text-gray-700 border-accent-lavender/30";
      case "stage":
        return "bg-accent-teal/20 text-gray-700 border-accent-teal/30";
      case "education":
        return "bg-accent-mint/20 text-gray-700 border-accent-mint/30";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <section id="experience" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-2">Mon parcours</p>
          <h2 className="section-title mb-6">
            <span className="relative inline-block">
              Expérience professionnelle et formation
              <span className="absolute bottom-1 left-0 w-full h-2 bg-accent-mint/40 -z-10"></span>
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours combine formation académique en informatique et expériences professionnelles 
            en développement à travers stages et alternance.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="bg-blue-soft absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-accent-sky via-accent-lavender to-accent-mint transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row gap-8 reveal ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className={`bg-blue-deep absolute left-0 md:left-1/2 top-0 w-7 h-7 rounded-full ${exp.accentColor} border-2 border-white shadow-md transform -translate-x-1/2 hidden md:block pulse-element z-10`}></div>
                
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
                  <h3 className="text-xl font-semibold text-blue-deep">{exp.role}</h3>
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
                  <div className="text-sm text-blue-medium font-medium mb-3">{exp.period}</div>
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
