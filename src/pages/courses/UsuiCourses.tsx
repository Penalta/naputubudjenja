import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { translations } from '@/translations';
import { ArrowLeft, GraduationCap } from 'lucide-react';

const UsuiCourses = () => {
  const [language, setLanguage] = useState('sk');
  const t = translations[language as keyof typeof translations];

  const levels = [
    {
      id: 'level1',
      title: t.usui.levels.level1.title,
      description: t.usui.levels.level1.description,
    },
    {
      id: 'level2',
      title: t.usui.levels.level2.title,
      description: t.usui.levels.level2.description,
    },
    {
      id: 'master',
      title: t.usui.levels.master.title,
      description: t.usui.levels.master.description,
    },
    {
      id: 'teacher',
      title: t.usui.levels.teacher.title,
      description: t.usui.levels.teacher.description,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent">
              {t.usui.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.usui.subtitle}
            </p>
          </div>

          {/* Levels Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {levels.map((level, index) => (
              <div
                key={level.id}
                className="group relative rounded-2xl p-8 md:p-12 transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(192,38,211,0.3)] cursor-pointer"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-600 rounded-2xl opacity-90" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-white flex-shrink-0 mt-1" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {level.title}
                    </h2>
                  </div>
                  <p className="text-white/95 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {level.description}
                  </p>
                </div>

                {/* Decorative glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer translations={t} />
    </div>
  );
};

export default UsuiCourses;
