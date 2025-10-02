import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'sk' | 'sr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('spiritual-language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('spiritual-language', lang);
  };

  const t = (key: string): string => {
    const translations = getTranslations(language);
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getTranslations = (lang: Language) => {
  switch (lang) {
    case 'en':
      return {
        hero: {
          title: 'Naputu Budjenja',
          subtitle: 'Journey into inner peace, healing, and personal transformation through ancient wisdom and modern practices'
        },
        services: {
          title: 'Naputu Budjenja',
          subtitle: 'Discover transformative healing modalities designed to nurture your soul and guide you toward inner peace',
          reiki: {
            title: 'REIKI',
            description: 'Ancient healing energy practice for physical and emotional wellbeing'
          },
          selfDevelopment: {
            title: 'SELF DEVELOPMENT',
            description: 'Personal growth and transformation through mindful practices'
          },
          lifeJourney: {
            title: 'LIFE JOURNEY',
            description: 'Guidance on your path to spiritual awakening and inner wisdom'
          }
        },
        about: {
          title: 'ABOUT ME',
          content: '🌟 About Me – On the Path of Awakening\nMy name is Nikola, and I\'ve dedicated my life to awakening the soul, healing, light, and love.\nSince childhood, I\'ve been deeply connected to the world of energy, esotericism, sacred geometry, universal laws, and collective consciousness. I studied energetic flows, Earth\'s transformation, and always felt that I was here with a purpose.\nI was born with gifts – bioenergy, channeling, intuitive visions – which have evolved over time. I\'ve gone through intense spiritual experiences, touching pure darkness and also pure light. As the saying goes: if you don\'t feel the darkness, you won\'t know the light. Everything I do is based entirely on personal experience.\nThrough years of dedication and inner work, and with the help of my spiritual guides, I\'ve found my true self. It took great effort, but I have now connected with myself and my inner guidance, and I live in truth, presence, and love.\nI chose to systematize my abilities through powerful methods like Reiki (USUI, Angel Reiki, Kundalini Reiki, EcoRei), while also developing my own authentic energetic and practical techniques to help others.\nI also study energetic psychology, because I believe humans are not just physical beings – we are composed of six layers, and the true cause of imbalance often lies deeper than the body.\n\n🌟 On this website, you can:\n✓ Learn about all Reiki branches, including EcoRei\n✓ Explore powerful self-development tools for daily life\n✓ Read my life story and awakening journey\n✓ Book a personal consultation\n✓ Join my courses\n✓ Take the first step toward your transformation and leave your comfort zone\n\nMy soul came to support the awakening of collective consciousness. If you\'re reading this – it\'s no coincidence. Welcome On the Path of Awakening.'
        },
        reiki: {
          title: 'REIKI',
          subtitle: 'Ancient Japanese healing technique using universal life energy',
          description: 'Reiki is a holistic healing method that helps establish balance between body, mind, and spirit. Through gentle touch or distance work, this practice helps remove energetic blockages and stimulates natural self-healing processes.',
          whatIsReiki: '✨ What is Reiki?\nReiki is an ancient method of energy work, based on channeling universal cosmic energy (known as Prana) for the purpose of healing, harmonization, and boosting a person\'s life force.\nThe word Reiki comes from Japanese and consists of two parts:\nREI – Universal, Divine or Cosmic\nKI – Life energy\nSo, Reiki is a natural method through which cosmic energy is transmitted via the practitioner\'s energy channel and used for:\n• strengthening the immune system\n• improving physical and mental health\n• increasing inner strength and vitality\n• enhancing overall quality of life\n\n💫 Imagine Reiki as something deeply personal — an ally with its own intelligence.\n💫 It is always available to you: to support you, heal you, guide you, and illuminate every aspect of your life and every situation you go through. Reiki works with love, quietly and wisely — exactly when you need it most.\n\n🔬 Scientific observations:\nResearch has shown that the average person receives only 5–10% of cosmic energy from the environment, while with Reiki methods, this capacity can increase up to 90–100%. The body then functions better, and the energy deficit is replenished on both subtle and physical levels.\n🔬 How Reiki affects the body:\nReiki\'s influence leads to:\n• cell regeneration\n• balance of DNA and RNA activity\n• harmonization of hormones and the endocrine system\n• improved function of glands and tissues\nWhen a person is energetically full, their Prana is strong and synchronized – this brings about natural balance on all levels of being.\n➕ IMPORTANT CLARIFICATION:\n📋 Reiki is a Japanese energy healing technique, recognized by many Ministries of Health worldwide.\n📋 It has no connection to religion, magic, esotericism, or anything similar.\n📋 Reiki is not a religious path – it is a natural, simple method for increasing life energy and achieving inner balance.',
          techniques: {
            title: 'Reiki Techniques',
            usuiReiki: {
              title: 'Usui Reiki',
              description: 'Traditional form of Reiki founded by Dr. Mikao Usui'
            },
            kundaliniReiki: {
              title: 'Kundalini Reiki',
              description: 'Combination of Reiki with Kundalini energy for deeper healing'
            },
            ecoRei: {
              title: 'Eco Rei',
              description: 'Advanced form of Reiki with emphasis on compassion and kindness'
            },
            angelicReiki: {
              title: 'Angelic Reiki',
              description: 'Healing with the assistance of angelic energy and guidance'
            }
          }
        },
        selfDevelopment: {
          title: 'SELF DEVELOPMENT',
          subtitle: 'This category is for anyone who has decided to take the first step toward personal change and take responsibility for their inner growth. Here you will find various techniques, methods, articles, videos, and advice to help you better understand yourself, your emotions, your body, and your spiritual path. Self-work is a journey of awakening, discovering your worth, and finding your inner power. The topics range from energy practices and meditations to practical advice for everyday life, relationships, emotional healing, and mindset. This page is your safe space for exploration, growth, and transformation. Self-development here includes work on 6 levels of the human system.',
          description: 'Self development is a process of continuous growth and learning that helps you discover your true potential. Through various techniques and practices, you develop greater self-awareness, build positive habits, and create a life aligned with your deepest values.',
          sections: {
            blog: {
              title: 'Blog',
              description: 'Articles and inspiration for your personal growth and spiritual development'
            },
            videos: {
              title: 'Videos',
              description: 'Video guides and meditations for practical application'
            }
          }
        },
        lifeJourney: {
          title: 'LIFE JOURNEY',
          subtitle: 'Guide through deeper understanding of life purpose and meaning',
          description: 'Life journey represents your unique path of self-discovery and spiritual growth. Through understanding your experiences, values, and aspirations, you discover deeper meaning of existence and find peace with yourself and the world around you.'
        },
        usuiReiki: {
          title: 'Traditional Usui Reiki',
          subtitle: 'The original Japanese energy healing method founded by Dr. Mikao Usui',
          content: 'Traditional Usui Reiki content coming soon...'
        },
        common: {
          backToHome: 'Back to Home',
          learnMore: 'Learn More'
        }
      };
    case 'sk':
      return {
        hero: {
          title: 'Naputu Budjenja',
          subtitle: 'Cesta k vnútornému pokoju, uzdraveniu a osobnej transformácii prostredníctvom starovekej múdrosti a moderných praktík'
        },
        services: {
          title: 'Naputu Budjenja',
          subtitle: 'Objavte transformačné uzdravovacie metódy navrhnuté na vyživovanie vašej duše a vedenie k vnútornému pokoju',
          reiki: {
            title: 'REIKI',
            description: 'Starodávna praktika uzdravovacej energie pre fyzické a emocionálne blaho'
          },
          selfDevelopment: {
            title: 'PRÁCA NA SEBE',
            description: 'Osobný rast a transformácia prostredníctvom uvedomelých praktík'
          },
          lifeJourney: {
            title: 'ŽIVOTNÁ CESTA',
            description: 'Vedenie na vašej ceste k duchovnému prebúdzaniu a vnútornej múdrosti'
          }
        },
        about: {
          title: 'O MNE',
          content: '🌟 O mne – Na Ceste Prebudenia\nVolám sa Nikola a svoj život som zasvätil prebudeniu duše, uzdraveniu, svetlu a láske.\nOd útleho detstva ma priťahoval svet energií, ezoteriky, posvätnej geometrie, zákonov vesmíru a kolektívneho vedomia. Vždy som cítil hlboké spojenie so Zemou a jej premenami.\nNarodil som sa s darom – bioenergiou, kanálovaním, intuitívnymi víziami – ktoré sa postupne rozvíjali. Zažil som intenzívne duchovné procesy – od čistej temnoty až po čisté svetlo. Ako sa hovorí: kto neokúsil tmu, nevie, čo je svetlo. Všetko, čo dnes robím, odovzdávam výlučne z osobnej skúsenosti.\nVďaka rokom vnútornej práce a vytrvalosti, a hlavne s pomocou svojich duchovných sprievodcov, som dokázal nájsť seba. Bol to hlboký proces, ale dnes som napojený na svoje vnútro a vedenie, ktoré ma sprevádza v mojom poslaní.\n\nRozhodol som sa systémovo rozvíjať svoje schopnosti cez rôzne techniky ako je Reiki (USUI, Angel, Kundalini, EcoRei) a vytváram aj vlastné energetické a praktické metódy, ktoré prinášajú zmenu.\nŠtudujem aj energetickú psychológiu, pretože verím, že človek nie je len fyzické telo – ale bytosť zložená zo šiestich úrovní, a príčina problémov sa často ukrýva hlbšie.\n\n🌟 Na tejto stránke môžeš:\n✓ Prečítať si o všetkých druhoch Reiki, vrátane EcoRei\n✓ Objaviť techniky práce na sebe a ich praktické využitie\n✓ Spoznaj môj životný príbeh a moju cestu duchovného rastu\n✓ Objednať si konzultácie\n✓ Prihlásiť sa na kurzy\n✓ Urobiť prvý krok k zmene svojho života a vykročiť mimo zónu komfortu\n\nMoja duša je tu, aby podporila prebudenie kolektívneho vedomia. Tvoje prebudenie je súčasťou väčšej zmeny. Vitaj Na Ceste Prebudenia.'
        },
        reiki: {
          title: 'REIKI',
          subtitle: 'Starodávna japonská technika uzdravovania pomocou univerzálnej životnej energie',
          description: 'Reiki je holistická metóda uzdravovania, ktorá pomáha ustanoviť rovnováhu medzi telom, mysľou a duchom. Prostredníctvom jemných dotykoch alebo práce na diaľku táto prax pomáha odstraňovať energetické blokády a stimuluje prirodzené procesy samoliečenia.',
          whatIsReiki: '✨ Čo je to Reiki?\nReiki je starodávna metóda energetickej práce, ktorá je založená na prenose univerzálnej kozmickej energie (tzv. Prány) za účelom liečenia, harmonizácie a zvýšenia životnej energie človeka.\nSlovo Reiki pochádza z japončiny a skladá sa z dvoch častí:\nREI – Univerzálna, Božská alebo Kozmická\nKI – Životná energia',
          techniques: {
            title: 'Reiki Techniky',
            usuiReiki: {
              title: 'Usui Reiki',
              description: 'Tradičná forma Reiki založená Dr. Mikao Usuim'
            },
            kundaliniReiki: {
              title: 'Kundalini Reiki',
              description: 'Kombinácia Reiki s energiou Kundalini pre hlbšie uzdravenie'
            },
            ecoRei: {
              title: 'Eco Rei',
              description: 'Pokročilá forma Reiki s dôrazom na súcit a láskavosť'
            },
            angelicReiki: {
              title: 'Angelické Reiki',
              description: 'Uzdravenie s pomocou anjelskej energie a vedenia'
            }
          }
        },
        selfDevelopment: {
          title: 'PRÁCA NA SEBE',
          subtitle: 'Táto kategória je určená pre každého, kto sa rozhodol urobiť prvý krok k zmene a prevziať zodpovednosť za svoj osobný a duchovný rast.',
          description: 'Osobný rozvoj je proces kontinuálneho rastu a učenia, ktorý vám pomáha objaviť váš skutočný potenciál.',
          sections: {
            blog: {
              title: 'Blog',
              description: 'Články a inšpirácie pre váš osobný rast a duchovný rozvoj'
            },
            videos: {
              title: 'Video',
              description: 'Videonávody a meditácie pre praktickú aplikáciu'
            }
          }
        },
        lifeJourney: {
          title: 'ŽIVOTNÁ CESTA',
          subtitle: 'Sprievodca hlbším porozumením účelu a zmyslu života',
          description: 'Životná cesta predstavuje vašu jedinečnú cestu sebaobjavu a duchovného rastu.'
        },
        usuiReiki: {
          title: 'Tradičný Usui Reiki',
          subtitle: 'Pôvodná japonská energetická liečebná metóda založená Dr. Mikao Usuim',
          content: 'Tradičný Usui Reiki obsah už čoskoro...'
        },
        common: {
          backToHome: 'Späť na Domov',
          learnMore: 'Dozvedieť Sa Viac'
        }
      };
    case 'sr':
      return {
        hero: {
          title: 'Naputu Budjenja',
          subtitle: 'Put ka unutrašnjem miru, isceljenju i ličnoj transformaciji kroz drevnu mudrost i moderne prakse'
        },
        services: {
          title: 'Naputu Budjenja',
          subtitle: 'Otkrijte transformativne metode isceljenja dizajnirane da neguju vašu dušu i vode vas ka unutrašnjem miru',
          reiki: {
            title: 'REIKI',
            description: 'Drevna praksa isceljujuće energije za fizičko i emocionalno blagostanje'
          },
          selfDevelopment: {
            title: 'RAD NA SEBI',
            description: 'Lični rast i transformacija kroz svesne prakse'
          },
          lifeJourney: {
            title: 'MOJA ŽIVOTNA PRIČA',
            description: 'Vođenje na vašem putu ka duhovnom buđenju i unutrašnjoj mudrosti'
          }
        },
        about: {
          title: 'O MENI',
          content: '🌟 O meni – Na Putu Buđenja\nZovem se Nikola i svoj život sam posvetio buđenju duše, isceljenju, svetlosti i ljubavi.\nJoš od malih nogu bio sam duboko povezan sa svetom energije, ezoterije, svete geometrije, univerzalnih zakona i kolektivne svesti. Proučavao sam energetske tokove, procese kroz koje prolazi planeta Zemlja, i oduvek sam osećao da nisam ovde slučajno.\nRođen sam sa izraženim sposobnostima – bioenergija, kanalisanje, intuitivne vizije – koje su se godinama razvijale. Prošao sam kroz intenzivna duhovna iskustva: kroz čisti mrak, ali i čistu svetlost. Kako se kaže: ako ne osetiš mrak, ne znaš ni šta je svetlo. Sve što danas radim i prenosim – dolazi isključivo iz ličnog iskustva.\nKroz godine unutrašnjeg rada i predanosti, uz pomoć svojih duhovnih vodiča, uspeo sam da pronađem sebe. Trud je bio ogroman, ali sam se spojio sa sobom i svojim unutrašnjim vodstvom, i danas živim ono što jesam – u istini, prisutnosti i ljubavi.\nOdlučio sam da sistematizujem svoja znanja i sposobnosti kroz metode kao što su Reiki (USUI, Angel Reiki, Kundalini Reiki, EcoRei), kao i kroz sopstvene tehnike koje razvijam na osnovu unutrašnjeg vođstva.\nProučavam i energetsku psihologiju, jer verujem da čovek nije samo fizičko telo – već biće sastavljeno od šest nivoa postojanja, i uzrok tegoba često leži dublje nego što mislimo.\n\n🌟 Na ovoj stranici možeš:\n✓ Pročitati o svim granama Reiki sistema, uključujući EcoRei\n✓ Upoznati se sa tehnikama rada na sebi i njihovim praktičnim primenama\n✓ Pročitati moju životnu priču i korake mog duhovnog buđenja\n✓ Zakažeš konsultacije sa mnom\n✓ Prijaviš se na kurseve\n✓ Napraviš prvi korak ka svojoj životnoj promeni i izađeš iz zone komfora\n\nMoja duša je ovde da podrži buđenje kolektivne svesti. Ako si ovde – to nije slučajno. Dobrodošao/la Na Putu Buđenja.'
        },
        reiki: {
          title: 'REJKI',
          subtitle: 'Drevna japanska tehnika isceljenja koja koristi univerzalnu životnu energiju',
          description: 'Rejki je holistička metoda isceljenja koja pomaže u uspostavljanju ravnoteže između tela, uma i duha.',
          whatIsReiki: '✨ Šta je Reiki?\nReiki je drevni metod energetskog rada, koji se zasniva na kanalisanju univerzalne kosmičke energije (tzv. Prane) radi isceljenja, harmonizacije i podizanja životne energije čoveka.\nReč Reiki potiče iz japanskog jezika i sastoji se iz dva dela:\nREI – Univerzalna, Božanska ili Kosmička\nKI – Životna energija',
          techniques: {
            title: 'Rejki Tehnike',
            usuiReiki: {
              title: 'Usui Reiki',
              description: 'Tradicionalna forma Reiki osnovana od strane Dr. Mikao Usuija'
            },
            kundaliniReiki: {
              title: 'Kundalini Reiki',
              description: 'Kombinacija Reiki sa Kundalini energijom za dublje isceljenje'
            },
            ecoRei: {
              title: 'Eco Rei',
              description: 'Napredna forma Reiki sa akcentom na saosećanje i ljubaznost'
            },
            angelicReiki: {
              title: 'Anđeosko Reiki',
              description: 'Isceljenje uz pomoć anđeoske energije i vođenja'
            }
          }
        },
        selfDevelopment: {
          title: 'RAD NA SEBI',
          subtitle: 'Ova kategorija je namenjena svakome ko je odlučio da napravi prvi korak ka promenama i preuzme odgovornost za svoj lični i duhovni rast.',
          description: 'Lični razvoj je proces kontinuiranog rasta i učenja koji vam pomaže da otkrijete svoj istinski potencijal.',
          sections: {
            blog: {
              title: 'Blog',
              description: 'Članci i inspiracija za vaš lični rast i duhovni razvoj'
            },
            videos: {
              title: 'Video',
              description: 'Video vodiči i meditacije za praktičnu primenu'
            }
          }
        },
        lifeJourney: {
          title: 'MOJA ŽIVOTNA PRIČA',
          subtitle: 'Vodič kroz dublje razumevanje životnog cilja i smisla',
          description: 'Životna priča predstavlja vašu jedinstvenu putanju samootkrivanja i duhovnog rasta.'
        },
        usuiReiki: {
          title: 'Tradicionalni Usui Reiki',
          subtitle: 'Originalna japanska energetska lečilačka metoda koju je osnovao Dr. Mikao Usui',
          content: 'TRADICIONALNI USUI REIKI\nTradicionalni Usui Reiki je metoda tradicionalne medicine – tačnije, tradicionalna Reiki tehnika, jednostavna tehnika prenošenja i primene veštine kanalisanja univerzalne energije, koja je početkom 20. veka zasnovana u Japanu od strane dr Mikaa Usuija.\n\nDr Mikao Usui je proveo 10 godina u istraživanjima i duhovnim putovanjima, istražujući sve moguće izvore koji su ukazivali na to kako ljudi mogu bez poteškoća da kanališu Univerzalnu energiju na jednostavan i sistematizovan način.\nDanas u svetu postoji više od 30 grana Reikija, a sve potiču iz izvornog, tradicionalnog Usui Reikija.'
        },
        common: {
          backToHome: 'Nazad na Početnu',
          learnMore: 'Saznajte Više'
        }
      };
    default:
      return {};
  }
};
