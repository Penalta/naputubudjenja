import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { translations } from '@/translations';
import { Card, CardContent } from '@/components/ui/card';

const Reiki = () => {
  const [language, setLanguage] = useState('sr');
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <StarryBackground />
      <Header language={language} setLanguage={setLanguage} translations={t} />
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            {t.reiki.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            {t.reiki.whatIsIntro}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          {/* What is Reiki Section */}
          <Card className="mb-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">{t.reiki.whatIsTitle}</h2>
              <p className="text-lg mb-6 text-foreground/90">{t.reiki.whatIsIntro}</p>
              
              <p className="text-md mb-4 text-foreground/80">{t.reiki.wordMeaning}</p>
              <ul className="list-none space-y-2 mb-6 ml-4">
                <li className="text-foreground/90">• {t.reiki.rei}</li>
                <li className="text-foreground/90">• {t.reiki.ki}</li>
              </ul>

              <p className="text-md mb-4 text-foreground/80">{t.reiki.description}</p>
              <ul className="list-none space-y-2 mb-6 ml-4">
                {t.reiki.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="text-foreground/90">• {benefit}</li>
                ))}
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg mb-6 border-l-4 border-primary">
                <p className="text-lg font-semibold mb-3 text-primary">{t.reiki.allyText}</p>
                <p className="text-foreground/90">{t.reiki.allyDescription}</p>
              </div>
            </CardContent>
          </Card>

          {/* Scientific Observations */}
          <Card className="mb-8 bg-card/50 backdrop-blur-sm border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">{t.reiki.scienceTitle}</h3>
              <p className="text-lg text-foreground/90">{t.reiki.scienceText}</p>
            </CardContent>
          </Card>

          {/* How Reiki Affects the Body */}
          <Card className="mb-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">{t.reiki.bodyTitle}</h3>
              <p className="text-md mb-4 text-foreground/80">{t.reiki.bodyIntro}</p>
              <ul className="list-none space-y-2 mb-6 ml-4">
                {t.reiki.bodyEffects.map((effect: string, index: number) => (
                  <li key={index} className="text-foreground/90">• {effect}</li>
                ))}
              </ul>
              <p className="text-lg text-foreground/90 font-medium">{t.reiki.bodyConclusion}</p>
            </CardContent>
          </Card>

          {/* Important Clarification */}
          <Card className="bg-card/50 backdrop-blur-sm border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">{t.reiki.importantTitle}</h3>
              <div className="space-y-4">
                {t.reiki.important.map((item: string, index: number) => (
                  <p key={index} className="text-lg text-foreground/90">{item}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer translations={t} />
    </div>
  );
};

export default Reiki;
