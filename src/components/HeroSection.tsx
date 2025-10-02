import heroImage from "@/assets/hero-meditation.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Spiritual meditation at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-spiritual" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Floating Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-spiritual-glow/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sunset-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sunset-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;