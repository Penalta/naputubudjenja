import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { translations } from '@/translations';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academy = () => {
  const [language, setLanguage] = useState('sk');
  const t = translations[language as keyof typeof translations];

  const techniques = [
    {
      id: 'usui',
      title: t.academy.techniques.usui.title,
      description: t.academy.techniques.usui.description,
      cta: t.academy.techniques.usui.cta,
      gradient: 'from-purple-600 via-fuchsia-500 to-pink-600',
      glowColor: 'shadow-[0_0_40px_rgba(192,38,211,0.4)]',
      link: '/academy/usui',
    },
    {
      id: 'kundalini',
      title: t.academy.techniques.kundalini.title,
      description: t.academy.techniques.kundalini.description,
      cta: t.academy.techniques.kundalini.cta,
      gradient: 'from-orange-600 via-orange-500 to-amber-600',
      glowColor: 'shadow-[0_0_40px_rgba(234,88,12,0.4)]',
      link: '/academy/kundalini',
    },
    {
      id: 'archangelic',
      title: t.academy.techniques.archangelic.title,
      description: t.academy.techniques.archangelic.description,
      cta: t.academy.techniques.archangelic.cta,
      gradient: 'from-blue-600 via-cyan-500 to-teal-600',
      glowColor: 'shadow-[0_0_40px_rgba(37,99,235,0.4)]',
      link: '#',
    },
    {
      id: 'ekorei',
      title: t.academy.techniques.ekorei.title,
      description: t.academy.techniques.ekorei.description,
      cta: t.academy.techniques.ekorei.cta,
      gradient: 'from-emerald-500 via-green-400 to-teal-500',
      glowColor: 'shadow-[0_0_40px_rgba(16,185,129,0.4)]',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <StarryBackground />
      <Header language={language} setLanguage={setLanguage} translations={t} />
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t.academy.title}
              </h1>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.academy.subtitle}
            </p>
          </div>

          {/* Description Section */}
          <div className="max-w-4xl mx-auto mb-16 px-4">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                {t.academy.description}
              </p>
            </div>
          </div>

          {/* Techniques Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {techniques.map((technique, index) => (
              <div
                key={technique.id}
                className={`group relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${technique.glowColor}`}
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${technique.gradient} rounded-2xl opacity-90`} />
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {technique.title}
                  </h2>
                  
                  <Link to={technique.link || '#'}>
                    <Button
                      className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      size="lg"
                    >
                      {technique.cta}
                    </Button>
                  </Link>
                </div>

                {/* Decorative glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${technique.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer translations={t} />
    </div>
  );
};

export default Academy;
