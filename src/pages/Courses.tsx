import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { translations } from '@/translations';
import { Sparkles } from 'lucide-react';

const Courses = () => {
  const [language, setLanguage] = useState('sk');
  const t = translations[language as keyof typeof translations];

  const categories = [
    {
      id: 'usui',
      title: t.courses.categories.usui.title,
      gradient: 'from-purple-600 via-fuchsia-500 to-pink-600',
      glowColor: 'shadow-[0_0_40px_rgba(192,38,211,0.4)]',
      path: '/courses/usui',
    },
    {
      id: 'kundalini',
      title: t.courses.categories.kundalini.title,
      gradient: 'from-orange-600 via-orange-500 to-amber-600',
      glowColor: 'shadow-[0_0_40px_rgba(234,88,12,0.4)]',
      path: '/courses/kundalini',
    },
    {
      id: 'archangelic',
      title: t.courses.categories.archangelic.title,
      gradient: 'from-blue-600 via-cyan-500 to-teal-600',
      glowColor: 'shadow-[0_0_40px_rgba(37,99,235,0.4)]',
      path: '/courses/archangelic',
    },
    {
      id: 'ekorei',
      title: t.courses.categories.ekorei.title,
      gradient: 'from-emerald-500 via-green-400 to-teal-500',
      glowColor: 'shadow-[0_0_40px_rgba(16,185,129,0.4)]',
      path: '/courses/ekorei',
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
                {t.courses.title}
              </h1>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.courses.subtitle}
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={category.path}
                className={`group relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${category.glowColor} cursor-pointer block`}
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-90`} />
                
                <div className="relative z-10 flex items-center justify-center min-h-[200px]">
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    {category.title}
                  </h2>
                </div>

                {/* Decorative glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer translations={t} />
    </div>
  );
};

export default Courses;
