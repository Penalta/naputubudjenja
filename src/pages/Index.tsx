import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { translations } from '@/translations';

const Index = () => {
  const [language, setLanguage] = useState('sr'); // Default to Serbian

  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen w-full">
      <Header language={language} setLanguage={setLanguage} translations={t} />
      <Hero translations={t} />
      <Footer translations={t} />
    </div>
  );
};

export default Index;
