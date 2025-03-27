
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Portfolio professionnel d'un développeur spécialisé en CSI et SIO SLAM.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Expérience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Réseaux</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/BenjaminBerns" 
                aria-label="GitHub"
                className="bg-background p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/benjamin-berns-076445262/" 
                aria-label="LinkedIn"
                className="bg-background p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="benjiberns@mail.fr" 
                aria-label="Email"
                className="bg-background p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Portfolio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
