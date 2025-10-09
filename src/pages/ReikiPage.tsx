import { Link } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";
import BackButton from "@/components/BackButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import reikiImage from "@/assets/reiki-hands.jpg";

const ReikiPage = () => {
  const { t } = useLanguage();

  const techniques = [
    {
      title: t('reiki.techniques.usuiReiki.title'),
      description: t('reiki.techniques.usuiReiki.description'),
      icon: '🌿',
      link: '/reiki/usui'
    },
    {
      title: t('reiki.techniques.kundaliniReiki.title'),
      description: t('reiki.techniques.kundaliniReiki.description'),
      icon: '🌀',
      link: '/reiki/kundalini'
    },
    {
      title: t('reiki.techniques.ecoRei.title'),
      description: t('reiki.techniques.ecoRei.description'),
      icon: '🤍',
      link: '/reiki/eco-rei'
    },
    {
      title: t('reiki.techniques.angelicReiki.title'),
      description: t('reiki.techniques.angelicReiki.description'),
      icon: '👼',
      link: '/reiki/angelic'
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
            src={reikiImage} 
            alt="Reiki healing hands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent" />
        </div>

        {/* Central glow effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-gradient-radial from-yellow-400/30 via-orange-500/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white leading-tight tracking-wide">
            {t('reiki.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('reiki.subtitle')}
          </p>
          
          {/* What is Reiki Description */}
          <div className="mt-8 max-w-5xl mx-auto perspective-1000">
            {/* Traditional Japanese aged paper background */}
            <div className="relative" style={{
              background: 'linear-gradient(135deg, #f7f3e9 0%, #f0e6d2 25%, #ede0c8 50%, #f2e7d5 75%, #f5f0e4 100%)',
              boxShadow: '0 20px 40px rgba(139, 69, 19, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            }}>
              
              {/* Aged paper texture overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, #8B4513 1px, transparent 1px),
                  radial-gradient(circle at 75% 75%, #A0522D 1px, transparent 1px),
                  radial-gradient(circle at 15% 85%, rgba(139, 69, 19, 0.3) 2px, transparent 2px),
                  radial-gradient(circle at 85% 15%, rgba(160, 82, 45, 0.2) 1px, transparent 1px),
                  linear-gradient(45deg, transparent 48%, rgba(139, 69, 19, 0.05) 50%, transparent 52%)
                `,
                backgroundSize: '120px 120px, 80px 80px, 200px 200px, 150px 150px, 60px 60px'
              }} />

              {/* Cherry blossom branch - top left */}
              <div className="absolute -top-2 -left-2 w-32 h-32 pointer-events-none">
                <svg viewBox="0 0 120 120" className="w-full h-full opacity-40">
                  <path d="M10 110 Q30 80 60 60 Q80 40 100 20" stroke="#8B4513" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <circle cx="25" cy="95" r="8" fill="#FFB6C1" opacity="0.7"/>
                  <circle cx="45" cy="75" r="6" fill="#FFC0CB" opacity="0.8"/>
                  <circle cx="65" cy="55" r="7" fill="#FFB6C1" opacity="0.6"/>
                  <circle cx="85" cy="35" r="5" fill="#FFC0CB" opacity="0.9"/>
                </svg>
              </div>

              {/* Cherry blossom branch - bottom right */}
              <div className="absolute -bottom-2 -right-2 w-28 h-28 pointer-events-none rotate-180">
                <svg viewBox="0 0 120 120" className="w-full h-full opacity-35">
                  <path d="M10 110 Q35 85 65 65 Q85 45 105 25" stroke="#8B4513" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <circle cx="30" cy="90" r="6" fill="#FFB6C1" opacity="0.8"/>
                  <circle cx="50" cy="75" r="5" fill="#FFC0CB" opacity="0.7"/>
                  <circle cx="75" cy="55" r="6" fill="#FFB6C1" opacity="0.6"/>
                </svg>
              </div>

              {/* Scattered cherry blossom petals */}
              <div className="absolute top-8 left-16 transform rotate-12 opacity-25">
                <div className="text-pink-300 text-lg">🌸</div>
              </div>
              <div className="absolute top-20 right-20 transform -rotate-25 opacity-20">
                <div className="text-pink-400 text-sm">🌸</div>
              </div>
              <div className="absolute bottom-16 left-12 transform rotate-45 opacity-30">
                <div className="text-pink-300 text-base">🌸</div>
              </div>
              <div className="absolute bottom-8 right-24 transform -rotate-15 opacity-25">
                <div className="text-pink-400 text-sm">🌸</div>
              </div>

              {/* Central content card */}
              <div className="relative mx-8 md:mx-16 py-12">
                
                {/* Top bamboo decoration */}
                <div className="flex justify-center mb-8">
                  <div className="flex space-x-1">
                    {Array.from({length: 24}).map((_, i) => (
                      <div key={i} className="w-1 h-8 bg-gradient-to-b from-amber-600 to-amber-800 opacity-60 rounded-sm" />
                    ))}
                  </div>
                </div>

                {/* Traditional red seal */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center" style={{
                  background: 'radial-gradient(circle, #DC2626 0%, #B91C1C 70%, #7F1D1D 100%)',
                  border: '2px solid #7F1D1D',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 8px rgba(220, 38, 38, 0.4)'
                }}>
                  <span className="text-white text-lg font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>氣</span>
                </div>

                {/* Main text content */}
                <div className="px-6 md:px-12">
                  <div className="whitespace-pre-line text-amber-900 leading-relaxed text-base md:text-lg font-zen font-medium tracking-wide max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-400/40 scrollbar-track-transparent" style={{
                    textShadow: '0 1px 2px rgba(139, 69, 19, 0.1)',
                    lineHeight: '1.8'
                  }}>
                    {t('reiki.whatIsReiki')}
                  </div>
                </div>

                {/* Bottom bamboo decoration */}
                <div className="flex justify-center mt-8">
                  <div className="flex space-x-1">
                    {Array.from({length: 24}).map((_, i) => (
                      <div key={i} className="w-1 h-8 bg-gradient-to-t from-amber-600 to-amber-800 opacity-60 rounded-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technique Cards at Bottom */}
        <div className="relative z-10 w-full px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {techniques.map((technique, index) => {
                const getCardColors = (title: string) => {
                  if (title.includes('Usui')) return 'bg-purple-700';
                  if (title.includes('Kundalini')) return 'bg-orange-600';
                  if (title.includes('Eco') || title.includes('eco')) return 'bg-purple-800';
                  if (title.includes('Angelic') || title.includes('Anđeosko') || title.includes('Angelické')) return 'bg-slate-600';
                  return 'bg-purple-700';
                };
                
                return (
                  <Link 
                    to={technique.link}
                    key={technique.title}
                    className="animate-in slide-in-from-bottom duration-700 bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-black/50 transition-all duration-300 text-center group block"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-16 h-16 ${getCardColors(technique.title)} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl text-white">{technique.icon}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-sm md:text-base">
                      {technique.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      {technique.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReikiPage;