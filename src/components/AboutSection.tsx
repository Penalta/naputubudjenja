import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-earth-deep via-background to-earth-deep" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-glow opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent tracking-wide">
            {t('about.title')}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-sunset mx-auto rounded-full shadow-glow" />
        </div>

        {/* Content Card with Enhanced Styling */}
        <div className="relative">
          {/* Decorative corner elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-sunset-primary/30 rounded-tl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-sunset-primary/30 rounded-br-3xl" />
          
          <div className="relative backdrop-blur-md bg-card/60 border border-border/50 rounded-2xl p-8 md:p-12 shadow-spiritual">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-sunset-primary/5 via-transparent to-transparent rounded-2xl" />
            
            <div className="relative space-y-6 text-base md:text-lg leading-relaxed">
              <div className="whitespace-pre-line text-foreground/95 text-left leading-loose">
                {t('about.content')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;