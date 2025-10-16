import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { translations } from '@/translations';
import { Flame } from 'lucide-react';

const Kundalini = () => {
  const [language, setLanguage] = useState('sk');
  const t = translations[language as keyof typeof translations];

  const levels = [
    {
      id: 'level1',
      title: t.kundalini.levels.level1.title,
      description: t.kundalini.levels.level1.description,
    },
    {
      id: 'level2',
      title: t.kundalini.levels.level2.title,
      description: t.kundalini.levels.level2.description,
    },
    {
      id: 'master',
      title: t.kundalini.levels.master.title,
      description: t.kundalini.levels.master.description,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header language={language} setLanguage={setLanguage} translations={t} />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-orange-500 animate-pulse" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                {t.kundalini.title}
              </h1>
              <Flame className="w-6 h-6 text-orange-500 animate-pulse" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.kundalini.subtitle}
            </p>
          </div>

          {/* Levels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {levels.map((level, index) => (
              <div
                key={level.id}
                className="group relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-[0_0_40px_rgba(234,88,12,0.4)]"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 rounded-2xl opacity-90" />
                
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {level.title}
                  </h2>
                  
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
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

export default Kundalini;
