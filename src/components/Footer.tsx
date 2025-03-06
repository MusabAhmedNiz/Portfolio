
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-xl font-display font-medium mb-2">
              Musab<span className="text-foreground/60">.dev</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Full Stack Developer, creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://x.com/MusabAhmedNiz" 
              className="h-10 w-10 rounded-full bg-accent/50 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://github.com/MusabAhmedNiz" 
              className="h-10 w-10 rounded-full bg-accent/50 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/musab-nizamani-1167a5261/" 
              className="h-10 w-10 rounded-full bg-accent/50 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/20 text-sm text-foreground/60 text-center">
          <p>© {currentYear} Musab Nizamani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}