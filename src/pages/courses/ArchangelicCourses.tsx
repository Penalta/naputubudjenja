import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { translations } from '@/translations';
import { ArrowLeft, Sparkles, Calendar, Clock } from 'lucide-react';

const ArchangelicCourses = () => {
  const [language, setLanguage] = useState('sk');
  const t = translations[language as keyof typeof translations];

  const courses = [
    {
      id: 'beginner',
      title: 'Archangelic Reiki - Beginner',
      description: 'Connect with archangels and learn foundational healing techniques',
      duration: '2 days',
      price: 'Contact for pricing',
    },
    {
      id: 'advanced',
      title: 'Archangelic Reiki - Advanced',
      description: 'Deepen your connection and master advanced angelic healing',
      duration: '2 days',
      price: 'Contact for pricing',
    },
    {
      id: 'master',
      title: 'Archangelic Reiki - Master',
      description: 'Complete mastery and teaching certification',
      duration: '3 days',
      price: 'Contact for pricing',
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
              Archangelic Reiki Courses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with archangels and enhance your healing abilities
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 opacity-90" />
                
                <div className="relative z-10 p-8 flex flex-col min-h-[300px]">
                  <Sparkles className="w-10 h-10 text-white mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {course.title}
                  </h2>
                  <p className="text-white/90 mb-6 flex-grow">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2 text-white/80">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{course.price}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer translations={t} />
    </div>
  );
};

export default ArchangelicCourses;
