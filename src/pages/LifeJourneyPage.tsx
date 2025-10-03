import { useLanguage } from "@/contexts/LanguageContext";
import BackButton from "@/components/BackButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import lifeJourneyImage from "@/assets/life-journey.jpg";

const LifeJourneyPage = () => {
  const { t } = useLanguage();

  // Video paths - replace these with your actual video file names
  const videos = [
    {
      title: t('lifeJourney.sections.story.title'),
      description: t('lifeJourney.sections.story.description'),
      videoSrc: "/src/assets/story-video.mp4" // Replace with actual video filename
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
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={lifeJourneyImage} 
            alt="Life journey path"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-800/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white leading-tight tracking-wide">
            {t('lifeJourney.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('lifeJourney.subtitle')}
          </p>
        </div>

        {/* Video Sections at Bottom */}
        <div className="relative z-10 w-full px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div 
                  key={video.title}
                  className="animate-in slide-in-from-bottom duration-700 bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative aspect-video">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-white font-semibold mb-2 text-base md:text-lg">
                      {video.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      {video.description}
                    </p>
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
