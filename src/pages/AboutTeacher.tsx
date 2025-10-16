import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { translations } from '@/translations';
import teacherPhoto from '@/assets/teacher-photo.jpeg';
import usuiTeacherCert from '@/assets/certificates/usui-reiki-teacher.jpg';
import kundaliniReiki1 from '@/assets/certificates/kundalini-reiki-1.jpg';
import kundaliniReiki2 from '@/assets/certificates/kundalini-reiki-2.jpg';
import ecorei from '@/assets/certificates/ecorei.jpg';
import kundaliniMaster from '@/assets/certificates/kundalini-reiki-master.jpg';
import usuiReiki1 from '@/assets/certificates/usui-reiki-1.jpg';
import usuiReiki2 from '@/assets/certificates/usui-reiki-2.jpg';
import usuiMaster from '@/assets/certificates/usui-reiki-master.jpg';
import angelReiki from '@/assets/certificates/angel-reiki.jpg';

const AboutTeacher = () => {
  const [language, setLanguage] = useState('en');
  const t = translations[language as keyof typeof translations];
  const [selectedCert, setSelectedCert] = useState<{ img: string; title: string } | null>(null);

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <StarryBackground />
      <Header 
        translations={t} 
        language={language}
        setLanguage={setLanguage}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            {t.aboutTeacher.title}
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in">
            {/* Left: Teacher Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative w-full max-w-md aspect-[3/4] bg-card rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                  <img 
                    src={teacherPhoto} 
                    alt="Nikola Grubiša"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Bio Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t.aboutTeacher.bioTitle}
              </h2>
              <div className="prose prose-invert max-w-none space-y-4">
                {t.aboutTeacher.bioContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-foreground/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t.aboutTeacher.certificatesTitle}
          </h2>

          {/* Main Teaching Certificate - Standalone */}
          <div className="flex justify-center mb-16">
            <Card className="relative w-full max-w-md border border-accent/40 bg-card shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={() => setSelectedCert({ img: usuiTeacherCert, title: t.aboutTeacher.teachingCertificate })}>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded border border-accent/40">
                    {t.aboutTeacher.mainCertificate}
                  </div>
                </div>
                <div className="aspect-[3/4] bg-muted/30 rounded overflow-hidden border border-border/30">
                  <img 
                    src={usuiTeacherCert} 
                    alt="Usui Reiki Master Teacher Certificate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-foreground pt-2">
                  {t.aboutTeacher.teachingCertificate}
                </h3>
              </div>
            </Card>
          </div>

          {/* Additional Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: kundaliniReiki1, title: 'Kundalini Reiki I' },
              { img: kundaliniReiki2, title: 'Kundalini Reiki II' },
              { img: kundaliniMaster, title: 'Kundalini Reiki Master' },
              { img: usuiReiki1, title: 'Usui Reiki I' },
              { img: usuiReiki2, title: 'Usui Reiki II' },
              { img: usuiMaster, title: 'Usui Reiki Master' },
              { img: angelReiki, title: 'Rays of Archangels' },
              { img: ecorei, title: 'EcoRei Master' },
            ].map((cert, index) => (
              <Card key={index} className="relative border border-border/40 bg-card shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer" onClick={() => setSelectedCert(cert)}>
                <div className="p-4 space-y-3">
                  <div className="aspect-[3/4] bg-muted/30 rounded overflow-hidden border border-border/30">
                    <img 
                      src={cert.img} 
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-center text-foreground">
                    {cert.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer translations={t} />

      {/* Certificate Lightbox */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl w-full p-6">
          {selectedCert && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center text-foreground">
                {selectedCert.title}
              </h3>
              <div className="w-full">
                <img 
                  src={selectedCert.img} 
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain max-h-[80vh]"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AboutTeacher;
