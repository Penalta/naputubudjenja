import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import BackButton from "@/components/BackButton";

import ecoReiCert from "@/assets/certificates/eco-rei.jpg";
import kundaliniReikiMasterCert from "@/assets/certificates/kundalini-reiki-master.jpg";
import usuiReiki1Cert from "@/assets/certificates/usui-reiki-1.jpg";
import usuiReiki2Cert from "@/assets/certificates/usui-reiki-2.jpg";
import usuiReikiMasterCert from "@/assets/certificates/usui-reiki-master.jpg";
import angelicReikiCert from "@/assets/certificates/angelic-reiki.jpg";
import usuiReikiTeacherCert from "@/assets/certificates/usui-reiki-teacher.jpg";
import kundaliniReiki1Cert from "@/assets/certificates/kundalini-reiki-1.jpg";
import kundaliniReiki2Cert from "@/assets/certificates/kundalini-reiki-2.jpg";

const certificates = [
  {
    id: 0,
    image: usuiReikiTeacherCert,
    title: "Usui Reiki Master - Teacher (IV Degree)",
    date: "September 2025",
    featured: true,
  },
  {
    id: 1,
    image: usuiReiki1Cert,
    title: "Usui Reiki I Degree",
    date: "May 2022",
  },
  {
    id: 2,
    image: usuiReiki2Cert,
    title: "Usui Reiki II Degree",
    date: "September 2022",
  },
  {
    id: 3,
    image: usuiReikiMasterCert,
    title: "Usui Reiki Master (III Degree)",
    date: "January 2025",
  },
  {
    id: 4,
    image: kundaliniReiki1Cert,
    title: "Kundalini Reiki I Degree",
    date: "March 2025",
  },
  {
    id: 5,
    image: kundaliniReiki2Cert,
    title: "Kundalini Reiki II Degree",
    date: "March 2025",
  },
  {
    id: 6,
    image: kundaliniReikiMasterCert,
    title: "Kundalini Reiki Master (III Degree)",
    date: "June 2025",
  },
  {
    id: 7,
    image: angelicReikiCert,
    title: "Rays of Archangels",
    date: "May 2022",
  },
  {
    id: 8,
    image: ecoReiCert,
    title: "Master of Energy Ecology - Eco Rei",
    date: "July 2025",
  },
];

const CertificatesPage = () => {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-earth-deep/20 to-background">
      <BackButton />
      
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent tracking-wide">
            {t('certificates.title')}
          </h1>
          <div className="w-32 h-1.5 bg-gradient-sunset mx-auto rounded-full shadow-glow mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('certificates.subtitle')}
          </p>
        </div>

        {/* Featured Teacher Certificate */}
        <div className="max-w-2xl mx-auto mb-20">
          <div
            className="group relative overflow-hidden rounded-2xl bg-gradient-card backdrop-blur-sm border-2 border-sunset-primary/50 hover:border-sunset-primary transition-all duration-700 hover:shadow-spiritual hover:scale-105 cursor-pointer"
            onClick={() => setSelectedCert(certificates[0])}
          >
            <div className="absolute top-6 left-6 z-10 bg-gradient-sunset rounded-full px-6 py-3 text-white font-bold text-sm shadow-glow flex items-center gap-2">
              <span className="text-xl">🎓</span>
              <span>Teacher Certificate</span>
            </div>
            
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={certificates[0].image}
                alt={certificates[0].title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3 line-clamp-2">
                {certificates[0].title}
              </h3>
              <p className="text-muted-foreground text-base">{certificates[0].date}</p>
            </div>

            <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="absolute top-6 right-6 bg-sunset-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {t('certificates.clickToView')}
            </div>
          </div>
        </div>

        {/* Other Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1600px] mx-auto">
          {certificates.slice(1).map((cert) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card backdrop-blur-sm border border-earth-warm/30 hover:border-sunset-primary/50 transition-all duration-700 hover:shadow-spiritual hover:scale-105 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm">{cert.date}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="absolute top-4 right-4 bg-sunset-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t('certificates.clickToView')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Certificate Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-transparent border-none">
          <div className="relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-sunset-primary/90 text-white hover:bg-sunset-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedCert && (
              <div className="bg-background/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-sunset-primary/30 shadow-spiritual">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                />
                <div className="p-6 border-t border-sunset-primary/20">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {selectedCert.title}
                  </h3>
                  <p className="text-muted-foreground">{selectedCert.date}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CertificatesPage;
