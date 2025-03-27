
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Téléphone",
      value: "07 68 72 32 10",
      color: "bg-accent-teal"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "Benjiberns@mail.fr",
      color: "bg-accent-lavender"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresse",
      value: "Lyon, Marcy l'étoile",
      color: "bg-accent-mint"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-2">Me contacter</p>
          <h2 className="section-title mb-6">
            <span className="relative inline-block">
              Travaillons ensemble
              <span className="absolute bottom-1 left-0 w-full h-2 bg-accent-sky/40 -z-10"></span>
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de projets, d'opportunités professionnelles 
            ou simplement pour échanger avec moi !
          </p>
        </div>
        
        <div className="flex justify-center reveal">
          <div className="gradient-border rounded-lg">
            <div className="bg-card rounded-lg shadow-sm p-8 max-w-2xl w-full">
              <h3 className="text-xl font-semibold mb-6 text-blue-deep">Informations de contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start group hover:-translate-y-1 transition-all duration-300">
                    <div className={`${info.color} p-3 rounded-full mr-4 text-gray-700 group-hover:shadow-md transition-all`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-deep">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4 text-blue-deep">Suivez-moi</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/benjamin-berns-076445262/" 
                    className="bg-accent-sky p-3 rounded-full transition-all hover:bg-accent-sky/80 hover:-translate-y-1 text-gray-700"
                    aria-label="LinkedIn"
                    target="_BLANK"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/BenjaminBerns" 
                    className="bg-accent-lavender p-3 rounded-full transition-all hover:bg-accent-lavender/80 hover:-translate-y-1 text-gray-700"
                    aria-label="GitHub"
                    target="_BLANK"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-accent-mint p-3 rounded-full transition-all hover:bg-accent-mint/80 hover:-translate-y-1 text-gray-700"
                    aria-label="Twitter"
                    target="_BLANK"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
