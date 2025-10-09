import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Award } from "lucide-react";
import teacherPhoto from "@/assets/teacher-nikola.jpg";

const AboutSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
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
          
          {/* Teacher Photo */}
          <div className="mt-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-sunset rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <img 
                src={teacherPhoto} 
                alt="Nikola - Reiki Master Teacher"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-card shadow-spiritual"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Content Layout */}
        <div className="relative space-y-12">
          {/* Decorative corner elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-sunset-primary/30 rounded-tl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-sunset-primary/30 rounded-br-3xl" />
          
          {/* Main Content with varied sections */}
          <div className="relative backdrop-blur-md bg-card/60 border border-border/50 rounded-2xl overflow-hidden shadow-spiritual">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-sunset-primary/5 via-transparent to-transparent" />
            
            <div className="relative p-8 md:p-12">
              {/* Introduction paragraphs - first two combined */}
              <div className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 text-center border-l-4 border-sunset-primary pl-6 space-y-6">
                <p className="italic">
                  {t('about.content').split('\n\n')[0]}
                </p>
                <p className="italic">
                  {t('about.content').split('\n\n')[1]}
                </p>
              </div>

              {/* Main content with consistent styling */}
              <div className="space-y-8">
                {t('about.content').split('\n\n').slice(2).map((paragraph, index) => (
                  <div key={index} className="bg-gradient-to-br from-sunset-primary/5 to-sunset-secondary/5 rounded-xl p-6 border border-sunset-primary/20">
                    <div className="space-y-3 text-base md:text-lg text-foreground/90 leading-relaxed">
                      {paragraph.split('\n').map((line, lineIndex) => (
                        line.trim() && (
                          <div key={lineIndex} className="flex items-start gap-3">
                            <span className="text-sunset-primary text-xl mt-1 flex-shrink-0">✦</span>
                            <span className="flex-1">{line.replace(/^[•✓]\s*/, '').trim()}</span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative divider */}
              <div className="mt-12 flex items-center justify-center gap-4">
                <div className="h-px bg-gradient-to-r from-transparent via-sunset-primary/50 to-transparent flex-1" />
                <span className="text-sunset-primary text-2xl">✦</span>
                <div className="h-px bg-gradient-to-r from-transparent via-sunset-primary/50 to-transparent flex-1" />
              </div>

              {/* Certificates Button */}
              <div className="mt-12 text-center">
                <Button
                  onClick={() => {
                    navigate('/certificates');
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                  size="lg"
                  className="bg-gradient-sunset text-white hover:shadow-glow transition-all duration-500 hover:scale-105 group"
                >
                  <Award className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  {t('certificates.viewButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;