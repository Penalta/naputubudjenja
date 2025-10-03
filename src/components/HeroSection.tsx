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
          className="w-full h-full object-cover scale-110 animate-[scale-in_20s_ease-in-out_infinite_alternate]"
        />
        {/* Multi-layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-orange-900/30" />
        <div className="absolute inset-0 bg-gradient-spiritual" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60" />
      </div>

      {/* Mystical Floating Orbs - Multiple Layers */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-40 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-spiritual-glow/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-[pulse_7s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
      
      {/* Animated Light Rays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-sunset-primary/50 via-transparent to-transparent animate-[fade-in_3s_ease-in-out_infinite_alternate]" />
        <div className="absolute top-0 left-2/4 w-1 h-full bg-gradient-to-b from-yellow-400/40 via-transparent to-transparent animate-[fade-in_4s_ease-in-out_infinite_alternate]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-orange-400/40 via-transparent to-transparent animate-[fade-in_3.5s_ease-in-out_infinite_alternate]" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Mystical Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 text-4xl text-sunset-primary/30 animate-[fade-in_8s_ease-in-out_infinite_alternate]">✦</div>
        <div className="absolute top-1/3 right-1/4 text-5xl text-yellow-500/20 animate-[fade-in_10s_ease-in-out_infinite_alternate]" style={{ animationDelay: '2s' }}>✧</div>
        <div className="absolute bottom-1/3 left-1/3 text-3xl text-orange-400/25 animate-[fade-in_9s_ease-in-out_infinite_alternate]" style={{ animationDelay: '4s' }}>❂</div>
        <div className="absolute top-2/3 right-1/3 text-4xl text-purple-400/20 animate-[fade-in_7s_ease-in-out_infinite_alternate]" style={{ animationDelay: '1s' }}>✵</div>
        <div className="absolute bottom-1/4 right-1/5 text-3xl text-pink-400/25 animate-[fade-in_11s_ease-in-out_infinite_alternate]" style={{ animationDelay: '3s' }}>✺</div>
      </div>

      {/* Particle Effect Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-30 animate-[fade-in_5s_ease-in-out_infinite_alternate]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent leading-tight drop-shadow-[0_0_30px_rgba(255,165,0,0.5)] animate-[fade-in_1.5s_ease-out]">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-background/30 rounded-2xl p-6 border border-sunset-primary/20 shadow-spiritual animate-[fade-in_2s_ease-out]">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sunset-primary/70 rounded-full flex justify-center shadow-glow">
          <div className="w-1 h-3 bg-sunset-primary rounded-full mt-2 animate-pulse shadow-[0_0_10px_currentColor]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
