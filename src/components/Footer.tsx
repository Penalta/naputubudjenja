import { Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 bg-earth-deep/80 border-t border-border/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-earth-deep/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-foreground/80">
            <a 
              href="mailto:grubi94@gmail.com" 
              className="flex items-center gap-2 hover:text-sunset-primary transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base">grubi94@gmail.com</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/na_putu_budjenja/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border/30 hover:border-sunset-primary/50 hover:bg-sunset-primary/10 transition-all group"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-foreground/70 group-hover:text-sunset-primary group-hover:scale-110 transition-all" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border/30 hover:border-sunset-secondary/50 hover:bg-sunset-secondary/10 transition-all group"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-foreground/70 group-hover:text-sunset-secondary group-hover:scale-110 transition-all" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border/20 w-full">
            <p>© {new Date().getFullYear()} Na Putu Buđenja. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
