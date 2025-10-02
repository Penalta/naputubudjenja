import ServiceCard from "./ServiceCard";
import reikiImage from "@/assets/reiki-hands.jpg";
import selfDevImage from "@/assets/self-development.jpg";
import lifeJourneyImage from "@/assets/life-journey.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.reiki.title'),
      image: reikiImage,
      description: t('services.reiki.description'),
      link: '/reiki'
    },
    {
      title: t('services.selfDevelopment.title'),
      image: selfDevImage,
      description: t('services.selfDevelopment.description'),
      link: '/self-development'
    },
    {
      title: t('services.lifeJourney.title'),
      image: lifeJourneyImage,
      description: t('services.lifeJourney.description'),
      link: '/life-journey'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-spiritual" />
      <div className="absolute top-1/2 left-0 w-1/3 h-64 bg-gradient-glow opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/4 h-48 bg-sunset-secondary/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;