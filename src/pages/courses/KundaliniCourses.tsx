import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { translations } from '@/translations';
import { ArrowLeft, GraduationCap } from 'lucide-react';

const KundaliniCourses = () => {
  const [language, setLanguage] = useState('sk');
  const t = translations[language as keyof typeof translations];

  const levels = [
    {
      id: 'level-1',
      title: 'Level 1 - Practitioner',
      description: 'Awakening Kundalini energy, basic techniques and healing',
    },
    {
      id: 'level-2',
      title: 'Level 2 - Advanced',
      description: 'Advanced energy work, chakra healing, and deeper practice',
    },
    {
      id: 'level-3',
      title: 'Level 3 - Master',
      description: 'Master level attunement and teaching abilities',
    },
  ];

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <StarryBackground />
      <Header language={language} setLanguage={setLanguage} translations={t} />
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Courses</span>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Kundalini Reiki Courses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your level and awaken your Kundalini energy
            </p>
          </div>

          {/* Levels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {levels.map((level, index) => (
              <div
                key={level.id}
                className="group relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-[0_0_40px_rgba(234,88,12,0.4)] cursor-pointer"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 rounded-2xl opacity-90" />
                
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[200px] gap-4">
                  <GraduationCap className="w-12 h-12 text-white" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                    {level.title}
                  </h2>
                  <p className="text-white/90 text-center">
                    {level.description}
                  </p>
                </div>

                {/* Decorative glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer translations={t} />
    </div>
  );
};

export default KundaliniCourses;
