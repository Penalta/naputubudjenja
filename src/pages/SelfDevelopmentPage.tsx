import { useLanguage } from "@/contexts/LanguageContext";
import BackButton from "@/components/BackButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TechniqueCard from "@/components/TechniqueCard";
import selfDevImage from "@/assets/self-development.jpg";

const SelfDevelopmentPage = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('selfDevelopment.sections.blog.title'),
      description: t('selfDevelopment.sections.blog.description'),
      icon: '⛰️'
    },
    {
      title: t('selfDevelopment.sections.videos.title'),
      description: t('selfDevelopment.sections.videos.description'),
      icon: '▶️'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      <LanguageSwitcher />
      
      {/* Full Screen Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={selfDevImage} 
            alt="Self development journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white leading-tight tracking-wide">
            {t('selfDevelopment.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('selfDevelopment.subtitle')}
          </p>
        </div>

        {/* Section Cards at Bottom */}
        <div className="relative z-10 w-full px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section, index) => (
                <div 
                  key={section.title}
                  className="animate-in slide-in-from-bottom duration-700 bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-black/60 transition-all duration-300 text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl text-white">{section.icon}</span>
                  </div>
                  <h3 className="text-white font-bold mb-3 text-xl md:text-2xl">
                    {section.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfDevelopmentPage;