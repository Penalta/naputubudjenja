import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { translations } from '@/translations';
import { ArrowLeft, Leaf, Calendar, Clock } from 'lucide-react';

const EkoReiCourses = () => {
  const [language, setLanguage] = useState('sk');
  const t = translations[language as keyof typeof translations];

  const courses = [
    {
      id: 'foundation',
      title: 'EkoRei - Foundation Course',
      description: 'Learn ecological Reiki and connect with nature energy',
      duration: '2 days',
      price: 'Contact for pricing',
    },
    {
      id: 'practitioner',
      title: 'EkoRei - Practitioner',
      description: 'Advanced techniques for environmental and planetary healing',
      duration: '2 days',
      price: 'Contact for pricing',
    },
    {
      id: 'master',
      title: 'EkoRei - Master Teacher',
      description: 'Complete mastery and teaching certification for EkoRei',
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500 bg-clip-text text-transparent">
              EkoRei Courses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Heal the planet and yourself through ecological Reiki practice
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-[0_0_40px_rgba(16,185,129,0.4)]"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 opacity-90" />
                
                <div className="relative z-10 p-8 flex flex-col min-h-[300px]">
                  <Leaf className="w-10 h-10 text-white mb-4" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer translations={t} />
    </div>
  );
};

export default EkoReiCourses;
