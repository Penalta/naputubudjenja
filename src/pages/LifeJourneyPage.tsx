import { useLanguage } from "@/contexts/LanguageContext";
import BackButton from "@/components/BackButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import lifeJourneyImage from "@/assets/life-journey.jpg";

const LifeJourneyPage = () => {
  const { t } = useLanguage();

  const videos = [
    {
      title: t('lifeJourney.sections.story.title'),
      description: t('lifeJourney.sections.story.description'),
      videoSrc: "/videos/video1.mp4"
    },
    {
      title: t('lifeJourney.sections.guidance.title'),
      description: t('lifeJourney.sections.guidance.description'),
      videoSrc: "/src/assets/guidance-video.mp4" // Replace with actual video filename
    },
    {
      title: t('lifeJourney.sections.community.title'),
      description: t('lifeJourney.sections.community.description'),
      videoSrc: "/src/assets/community-video.mp4" // Replace with actual video filename
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      <LanguageSwitcher />
      
      {/* Full Screen Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-background via-background to-sunset-primary/10">
        <div className="absolute inset-0 z-0">
          <img 
            src={lifeJourneyImage} 
            alt="Life journey path"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          <div className="absolute inset-0 bg-gradient-radial from-sunset-primary/20 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 py-20 md:py-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 text-white leading-tight tracking-wide animate-fade-in">
            {t('lifeJourney.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t('lifeJourney.subtitle')}
          </p>
        </div>

        {/* Video Gallery */}
        <div className="relative z-10 w-full px-4 md:px-8 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div 
                  key={video.title}
                  className="group animate-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative bg-gradient-to-br from-sunset-primary/10 to-sunset-secondary/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,138,0,0.3)] hover:border-sunset-primary/50 hover:scale-[1.02]">
                    {/* Video Container */}
                    <div className="relative aspect-video bg-black/50">
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                      >
                        <source src={video.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 text-center bg-gradient-to-b from-transparent to-black/20">
                      <div className="mb-4">
                        <span className="inline-block w-12 h-1 bg-gradient-to-r from-sunset-primary to-sunset-secondary rounded-full" />
                      </div>
                      <h3 className="text-white font-heading font-bold mb-3 text-xl md:text-2xl leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed">
                        {video.description}
                      </p>
                    </div>

                    {/* Decorative corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-sunset-primary/50 rounded-tl-lg" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-sunset-primary/50 rounded-br-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeJourneyPage;