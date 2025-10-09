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
          whatIsReiki: '✨ What is Reiki?\n\nReiki is an ancient method of energy work, based on channeling universal cosmic energy (known as Prana) for healing, harmonization, and raising the life energy of humans.\n\nThe word Reiki comes from Japanese and consists of two parts:\n• REI – Universal, Divine or Cosmic\n• KI – Life energy\n\nTherefore, Reiki is a natural method through which cosmic energy is transmitted through the practitioner\'s energy channel and used for:\n• strengthening the immune system\n• improving physical and mental health\n• increasing inner strength and vitality\n• improving quality of life\n\n💫 Imagine Reiki as something of yours — as an allied force with its own intelligence.\n\n• It is available to you at every moment: to support you, heal you, guide you, and illuminate every segment of your life and every situation you go through. Reiki works with love, quietly and wisely — precisely when you need it most.\n\n🔬 Scientific Observations:\n\nResearch has shown that the average person receives only 5–10% of cosmic energy from space, while with Reiki methods, this capacity increases to 90–100%. The body then functions better, and the energy deficit is compensated at subtle and physical levels.\n\n🧬 How Reiki Affects the Body:\n\nThrough the action of Reiki, there is:\n• cell renewal\n• balancing of DNA and RNA function\n• harmonization of hormones and the endocrine system\n• improvement of gland and tissue function\n\nWhen a person is energetically fulfilled, their Prana is strong and synchronized – then natural balance occurs in all layers of existence.\n\n➕ IMPORTANT CLARIFICATION:\n\n🏥 Reiki is a Japanese energy therapy technique recognized by numerous health ministries around the world.\n\n🙏 It has nothing to do with religion, magic, esotericism, or anything similar.\n\n💚 Reiki is not a religious movement – it is a natural, simple method for raising life energy and achieving inner balance.',
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
          content: 'USUI REIKI – THE PATH OF ENERGY AWAKENING (LEVELS I–IV)\n\nUsui Reiki is a traditional Japanese system of healing and spiritual development, channeled by Mikao Usui in the early 20th century.\nThrough four levels, the practitioner gradually opens energy channels, learns to direct Universal Life Force Energy (Prana), and deepens understanding of self and the world.\nEach level brings new awareness, stronger connection with energy, and inner peace — healing on all six levels of the being.\n\nLevel I – Beginning the Journey and Self-Healing\n\nThe first level introduces Reiki energy and the foundation of the entire system.\nEnergy channels and chakras are activated, and the student learns how to guide energy through the palms.\nThe practitioner becomes a channel of Universal Life Force and learns self-healing and emotional balance techniques.\nThis level focuses on personal growth, cleansing, and awakening of inner awareness.\nEnergy flow expands from 5% to 100%, awakening the ability to consciously channel Prana.\nThis degree is dedicated exclusively to self-work, without the use of symbols or treatments for others.\n\nLevel II – Symbols, Therapeutic Work and Distance Healing\n\nThe second level introduces sacred Reiki symbols that enable deeper healing on mental, emotional, and energetic levels.\nThe student learns how to send energy across distance, time, and situations, and how to harmonize thoughts and emotions.\nEnergy channels expand, intuition strengthens, and awareness deepens.\nThis level prepares the practitioner for therapeutic work, new symbols, and advanced Reiki techniques.\n\nLevel III – Master Level and Inner Transformation\n\nThe third level brings the Master symbol, representing enlightenment and unity with the Source.\nIt opens the practitioner to higher vibrations and teaches advanced energy healing methods, meditation, crystal grids, Antahkarana symbols, and etheric surgery.\nThis degree deepens self-awareness, strengthens intuition, and opens the heart to divine guidance.\nThe Master level is a stage of powerful Prana flow and conscious service to others through healing.\n\nLevel IV – Teacher Level and Transmission of Knowledge\n\nThe fourth level represents the teacher\'s path — the moment when one becomes ready to initiate and train others.\nIt includes learning to prepare the space, open initiation channels, and guide students through attunements.\nThis level carries responsibility, humility, and grace — through sharing energy and wisdom, the teacher continues personal growth.\nIt is a stage of full unity with Reiki — living in the flow of light, love, and healing.\nThis level introduces additional symbols and represents the highest degree of Usui Reiki.'
        },
        kundaliniReiki: {
          title: 'Kundalini Reiki',
          subtitle: 'Awakening Inner Power',
          content: 'KUNDALINI REIKI – AWAKENING INNER POWER (LEVELS I–III)\n\nKundalini Reiki is a powerful yet simple system of energy healing that connects universal energy with the energy of the Earth and the awakening of the inner life force – Kundalini energy.\nUnlike traditional Usui Reiki, Kundalini Reiki works through the natural flow of energy that rises spontaneously from the root chakra to the crown, opening the main energy channel and balancing all levels of the body.\nKundalini energy lies dormant in the root chakra, awakening gradually through practice, releasing blockages and restoring balance to the flow of life.\nThrough three levels, the practitioner clears blockages, activates full energy flow, and learns to use Kundalini\'s power for healing, harmony, and spiritual growth.\n\nLevel I – Opening Energy Channels and Activating the Base Energy\n\nThe first level marks the beginning of Kundalini awakening.\nEnergy channels are cleansed, and the connection between the root and crown chakras begins to open.\nThe practitioner learns to direct energy through the hands, perform self-healing, and sense the flow of life within.\nEmotional purification begins, fear dissolves, and connection with nature deepens.\nEnergy rises naturally to the heart chakra, bringing balance and inner peace.\nAt this level, the focus is entirely on self-work, preparation, and the awakening of Kundalini.\n\nLevel II – Flow of Energy and Awakening of Kundalini\n\nThe second level deepens the flow of energy and activates the Kundalini flame within the root chakra.\nEnergy ascends to the solar plexus, bringing strength, vitality, and balance between the spiritual and physical realms.\nThe practitioner learns advanced healing methods, including the balance of the five elements, karmic cleansing, and energetic purification of spaces.\nKundalini Reiki at this stage dissolves deeper blockages and allows life force to circulate freely through all chakras.\nAwareness expands, and the energy becomes a bridge between the Earth and higher consciousness.\n\nLevel III (Master Level) – Complete Awakening and Spiritual Mastery\n\nThe Master level brings complete activation of Kundalini energy – a full flow from the root to the crown chakra.\nEnergy rises through the heart, where it unites with Prana, creating a continuous circulation between Earth and Source.\nThe practitioner gains deep understanding of energy, learns to initiate others, and practices distant healing beyond space and time.\nThe Master becomes a conscious channel of divine energy that heals, balances, and uplifts.\nThis level represents unity between the Earth and Heaven – where energy and spirit merge in perfect harmony.'
        },
        ecoRei: {
          title: 'Eco Rei',
          subtitle: 'Energy of the Earth and Light of Nature',
          content: 'EKO REI – ENERGY OF THE EARTH AND LIGHT OF NATURE\n\nEko Rei is a powerful and complex energy system designed exclusively for space cleansing and restoration of energetic harmony in the environment we live in.\nThis method connects humans deeply with nature, the Earth, and all living beings. It includes several sub-techniques that allow precise work on different types of spaces and energetic imbalances.\nEko Rei is based on the harmony between humans and the natural energies surrounding us – the elements of earth, water, fire, air, and ether.\nIt brings awareness of the interconnectedness of all existence and reminds us that we are part of one living ecosystem.\nEko Rei energy acts not only on people but also on animals, plants, objects, and the Earth itself.\nIt is used for cleansing spaces from negative vibrations, stagnant energy, geopathic zones, and emotional imprints.\nEko Rei is a one-time-in-a-lifetime technique – once performed, it permanently harmonizes the energy of the space.\n\nConnection with Nature and Elements\n\nEko Rei activates a deep connection with nature and the pure power of its elements:\n• Earth – stability, grounding, and strength.\n• Water – purification and emotional flow.\n• Fire – transformation and release.\n• Air – clarity, freedom, and inspiration.\n• Ether – divine connection and unity with universal consciousness.\nDuring practice, it includes the violet flame, unified light energy, placement of the crystal plate, work with crystals and natural elements, and communication with the space as a living being.\nThe practitioner becomes a channel of Earth and Light energy, restoring balance and life force within the environment.\n\nPractice and Application\n\nEko Rei uses simple yet powerful techniques of working with natural forces.\nThe energy is activated through intention, symbols, and connection with Mother Earth.\nSessions can be performed directly or remotely on spaces, homes, or nature.\nThrough Eko Rei practice:\n• Spaces are cleared of negative and stagnant energies.\n• Energetic imprints of illness or emotions are removed.\n• The natural vibration of the place and its inhabitants is restored.\n• A light grid of protection and harmony is activated.\nEko Rei is especially effective in neutralizing geopathic zones and strengthening the energetic protection of homes, workplaces, and meditation areas.\nThis technique is performed only once in life, and upon completion, the practitioner becomes an EkoReikologist – certified to cleanse spaces and maintain their energetic purity.\nThe prerequisite for learning Eko Rei is Usui Reiki Level I.\n\nBenefits of Eko Rei\n\n• Cleansing and harmonizing energy of spaces.\n• Neutralizing geopathic and low-frequency zones.\n• Increasing vitality, stability, and peace.\n• Deep connection with nature and the elements.\n• Activation of light protection and energy balance.\n• Healing of space, body, and spirit through unity with the Earth.'
        },
        angelicReiki: {
          title: 'Angelic Reiki',
          subtitle: 'The Path of Light and Divine Healing',
          content: 'ANGELIC REIKI – THE PATH OF LIGHT AND DIVINE HEALING\n\nAngelic Reiki is a high spiritual healing system that connects humans with the energies of angels, archangels, and divine beings of light residing on the seventh level of existence.\nThis system transmits pure energy of love and light, restoring balance on the physical, emotional, mental, and spiritual levels – in every aspect of life.\nThrough initiations and connection with archangels, the practitioner opens the energy channel and becomes an instrument of divine force that heals, protects, and uplifts consciousness.\n\nRole of Archangels and Their Symbols\n\nEach Archangel in Angelic Reiki carries a unique symbol and a specific frequency of divine light.\nThese symbols are keys that open gateways to different dimensions of divine energy and love vibration.\n• Archangel Michael – blue ray of protection and power; cuts all negative cords and brings strength and courage.\n• Archangel Gabriel – white ray of purity and truth; inspires clarity, insight, and divine communication.\n• Archangel Raphael – green ray of healing; restores the body, emotions, and spirit.\n• Archangel Uriel – golden ray of wisdom; brings clarity, stability, and enlightenment.\n• Archangel Zadkiel – violet ray of transformation and forgiveness; transmutes negativity into light.\n• Archangel Chamuel – pink ray of divine love; opens the heart and brings harmony.\n• Archangel Metatron – highest frequency of divine geometry; activates the light body and connects to the Source.\n• Archangel Jophiel – golden-pink ray of beauty and joy; raises vibration and brings inner light.\nThrough these energies, the practitioner experiences deep transformation, expansion of awareness, and unity with the Divine.\n\nHealing and Practice\n\nAngelic Reiki treatments are unique and profoundly healing.\nDuring a session, angels and archangels direct the energy exactly where it is needed most.\nThe practitioner works with symbols, invites their presence, and allows the energy to flow freely.\nThe experience may bring warmth, light, tingling sensations, or deep peace.\nThis energy acts only in alignment with divine will and can never cause harm.\n\nInitiation and Spiritual Growth\n\nThrough initiations, the practitioner connects with angelic hierarchies and opens channels for angelic energy.\nEach archangel is invoked through a sacred symbol, bringing a specific vibration of divine light.\nEvery initiation brings greater awareness, stronger intuition, and a deeper connection to the soul and divine essence.\n\nBenefits of Angelic Reiki\n\n• Deep healing on all levels of being.\n• Connection with archangels, guides, and divine Source.\n• Aura cleansing and energetic alignment.\n• Strengthened intuition and inner guidance.\n• Transformation of lower energies into light and love.\n• Sense of peace, protection, and divine harmony.\n• Activation of the light body and awakening of divine potential.'
        },
        certificates: {
          title: 'MY CERTIFICATES',
          subtitle: 'Professional certifications and qualifications in energy healing and spiritual development',
          viewButton: 'View My Certificates',
          clickToView: 'Click to enlarge'
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
            title: 'MOJA ŽIVOTNÁ CESTA',
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
          whatIsReiki: '✨ Čo je to Reiki?\n\nReiki je starodávna metóda energetickej práce, ktorá je založená na prenose univerzálnej kozmickej energie (tzv. Prány) za účelom liečenia, harmonizácie a zvýšenia životnej energie človeka.\n\nSlovo Reiki pochádza z japončiny a skladá sa z dvoch častí:\n• REI – Univerzálna, Božská alebo Kozmická\n• KI – Životná energia\n\nReiki je teda prirodzená metóda, pomocou ktorej sa kozmická energia prenáša cez energetický kanál praktizujúceho a využíva sa na:\n• posilnenie imunitného systému\n• zlepšenie fyzického a psychického zdravia\n• zvýšenie vnútornej sily a vitality\n• zlepšenie kvality života\n\n💫 Predstavte si Reiki ako niečo vaše — ako sprievodnú silu s vlastnou inteligenciou.\n\n• Je vám k dispozícii v každom okamihu: aby vás podporila, uzdravila, viedla a osvetlila každý aspekt vášho života a každú situáciu, ktorou prechádzate. Reiki pôsobí s láskou, ticho a múdro — práve vtedy, keď to najviac potrebujete.\n\n🔬 Vedecké pozorovania:\n\nVýskumy ukázali, že priemerný človek prijíma len 5–10 % kozmickej energie z priestoru, zatiaľ čo pri Reiki metódach sa táto kapacita môže zvýšiť až na 90–100 %. Telo potom funguje lepšie a energetický deficit sa dopĺňa na jemnohmotnej aj fyzickej úrovni.\n\n🧬 Ako Reiki pôsobí na telo:\n\nPôsobením Reiki dochádza k:\n• obnove buniek\n• vyváženiu činnosti DNA a RNA\n• harmonizácii hormónov a endokrinného systému\n• zlepšeniu činnosti žliaz a tkanív\n\nKeď je človek energeticky naplnený, jeho Prána je silná a synchronizovaná – vtedy nastáva prirodzená rovnováha vo všetkých vrstvách existencie.\n\n➕ DÔLEŽITÉ UPOZORNENIE:\n\n🏥 Reiki je japonská technika energetickej terapie, ktorú uznalo viacero ministerstiev zdravotníctva po celom svete.\n\n🙏 Nemá nič spoločné s náboženstvom, mágiou, ezoterikou ani s ničím podobným.\n\n💚 Reiki nie je náboženský smer – je to prirodzená, jednoduchá metóda na zvýšenie životnej energie a dosiahnutie vnútornej rovnováhy.',
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
          title: 'RAD NA SEBI',
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
          content: 'USUI REIKI – CESTA ENERGETICKÉHO PREBUDENIA (I–IV STUPEŇ)\n\nUsui Reiki je tradičný japonský systém liečenia a duchovného rozvoja, ktorý kanalisoval Mikao Usui na začiatku 20. storočia.\nProstredníctvom štyroch stupňov praktik postupne otvára energetické kanály, učí sa smerovať Univerzálnu životnú energiu (Pranu) a prehlbuje pochopenie seba a sveta.\nKaždý stupeň prináša novú úroveň vedomia, silnejšie spojenie s energiou a vnútorný pokoj – liečenie na všetkých šesťoch úrovniach bytia.\n\nI. stupeň – Začiatok cesty a samočistenie\n\nPrvý stupeň uvádza praktikanta do Reiki energie a základov celého systému.\nAktivujú sa energetické kanály a čakry a učí sa, ako smerovať energiu cez dlane.\nPraktik sa stáva kanálom Univerzálnej životnej energie a učí sa technikám samoliečenia a emocionálnej rovnováhy.\nTento stupeň je zameraný na prácu na sebe, očistu a prebudenie vnútorného vedomia.\nEnergia sa rozširuje z 5 % na 100 % kapacity a aktivuje sa vedomé kanalisovanie Prány.\n\nII. stupeň – Symboly, terapeutická práca a práca na diaľku\n\nDruhý stupeň prináša prácu so svätými Reiki symbolmi, ktoré umožňujú hlbšie liečenie na mentálnej, emocionálnej a energetickej úrovni.\nUčí sa, ako posielať energiu cez čas a priestor, harmonizovať myšlienky a pocity.\nRozširuje sa intuícia a silnejší prietok energie.\nTento stupeň pripravuje na terapeutickú prax, nové symboly a pokročilé Reiki techniky.\n\nIII. stupeň – Majstrovský stupeň a vnútorná transformácia\n\nTretí stupeň prináša Majstrovský symbol, ktorý predstavuje osvietenie a spojenie so Zdrojom.\nUčí pokročilé techniky liečenia, meditácie, prácu s kryštálovými sieťami, Antahkarana symbolmi a éterickou chirurgiou.\nRozvíja sa intuícia, vnútorná harmónia a hlbšie pochopenie energie.\nMajstrovský stupeň je fázou silného prietoku Prány a vedomej služby iným.\n\nIV. stupeň – Učiteľský stupeň a odovzdávanie poznania\n\nŠtvrtý stupeň predstavuje cestu učiteľa – okamih, keď je praktik pripravený iniciovať a vyučovať druhých.\nZahŕňa prípravu priestoru, otvorenie kanálu iniciacie a energetické vedenie žiakov.\nPrináša zodpovednosť, pokoru a milosť – učiteľ prostredníctvom odovzdávania Reiki ďalej rastie aj sám.\nPredstavuje jednotu so svetlom, láskou a energiou – najvyšší stupeň Usui Reiki.'
        },
        kundaliniReiki: {
          title: 'Kundalini Reiki',
          subtitle: 'Prebudenie vnútornej sily',
          content: 'KUNDALINI REIKI – PREBUDENIE VNÚTORNEJ SILY (I–III STUPEŇ)\n\nKundalini Reiki je silný, ale jednoduchý systém energetického liečenia, ktorý spája univerzálnu energiu s energiou Zeme a prebudzá vnútornú životnú silu – energiu Kundalini.\nNa rozdiel od tradičného Usui Reikija, Kundalini Reiki pracuje s prirodzeným tokom energie, ktorá sa spontánne dvíha z koreňovej čakry k korunnej, otvára energetický kanál a vyvažuje všetky úrovne tela.\nKundalini energia sa nachádza v koreňovej čakre, kde spí, a postupne sa prebúdza cez prax, čím sa čistí, uvoľňuje a obnovuje tok života.\nCez tri stupne praktik oslobodzuje blokády, aktivuje plný tok energie a učí sa využívať silu Kundalini na liečenie, rovnováhu a duchovný rast.\n\nI. stupeň – Otvorenie energetických kanálov a aktivácia základnej energie\n\nPrvý stupeň je začiatok prebudenia Kundalini energie.\nEnergetické kanály sa čistia a otvára sa spojenie medzi koreňovou a korunou čakrou.\nPraktik sa učí usmerňovať energiu cez dlane, vykonávať autotretmany a cítiť vnútorný tok života.\nEmocionálne telo sa očisťuje, strach mizne a rastie vnútorný pokoj.\nEnergia sa prirodzene dvíha k srdcovej čakre, prináša harmóniu a stabilitu.\n\nII. stupeň – Tok energie a prebudenie Kundalini\n\nDruhý stupeň prináša silnejší tok energie a aktivuje Kundalini plameň v koreňovej čakre.\nEnergia sa dvíha k solárnej čakre, prináša vitalitu, silu a rovnováhu medzi duchovným a fyzickým svetom.\nPraktik sa učí pokročilé techniky liečenia, čistenia priestoru, harmonizácie elementov a karmy.\nKundalini Reiki v tejto fáze rozpúšťa hlboké blokády a aktivuje tok života cez všetky čakry.\n\nIII. stupeň (Majstrovský)\n\nTento stupeň prináša úplné otvorenie energetického kanála a slobodný tok Kundalini energie od koreňa k korune.\nEnergia stúpa cez srdcovú čakru, kde sa spája s Pránou – univerzálnou životnou silou.\nPraktik získava schopnosť iniciovať druhých, liečiť na diaľku a vedome pracovať s vyššími vibráciami.\nMajster Kundalini Reiki sa stáva kanálom čistej energie, ktorá liečí, vyvažuje a prebúdza.'
        },
        ecoRei: {
          title: 'Eco Rei',
          subtitle: 'Energia Zeme a svetlo prírody',
          content: 'EKO REI – ENERGIA ZEME A SVETLO PRÍRODY\n\nEko Rei je silná a komplexná technika, ktorá sa zameriava výhradne na čistenie priestoru a obnovu energetickej rovnováhy v prostredí, kde žijeme.\nSpojuje človeka s prírodou, Zemou a všetkými životnými formami. Obsahuje viac pod-techník, ktoré umožňujú presnú prácu s rôzličnými druhmi priestoru a energetickými disharmoniami.\nZákladom Eko Rei je harmónia medzi človekom a prírodnými energiami – elementmi zeme, vody, ohňa, vzduchu a éteru.\nPrináša vedomie spojenia všetkého, čo existuje, a pripomína, že sme súčasťou jedného živého ekosystému.\nEko Rei energia pôsobí nielen na ľudí, ale aj na zvieratá, rastliny, predmety a samotnú Zem.\nPoužíva sa na čistenie priestoru od negatívnych vibrácií, stagnujúcej energie, geopatogénnych zón a emocionálnych odtlačkov.\nTáto technika sa vykonáva iba raz za život, pretože jej účinky sú trvalé a hlboké.\n\nSpojenie s prírodou a elementmi\n\nEko Rei aktivuje hlboké spojenie s prírodou a jej elementmi:\n• Zem – stabilita, sila, ukotvenie.\n• Voda – čistenie a plynúťie emócií.\n• Oheň – transformácia a oslobodenie.\n• Vzduch – jasnosť a sloboda ducha.\n• Éter – spojenie s božským zdrojom a univerzálnym vedomím.\nPri praxi sa pracuje s fialovým plameňom, zjednotenou energiou svetla, kryštalickou doskou, prírodnými prvkami a kryštálmi, ako aj komunikáciou s priestorom ako živým organizmom.\nPraktik sa stáva kanálom Zeme a Svetla, ktorý obnovuje rovnováhu a vitalitu priestoru.\n\nPoužitie a prax Eko Rei\n\nEko Rei využíva jednoduché, no silné techniky práce s energiami prírody.\nEnergie sa aktivujú cez zámer, symboly a spojenie s energiou Matky Zeme.\nTerapie môžu prebiehať priamo alebo na diaľku – na domoch, pracovných miestach alebo v prírode.\nPomocou Eko Rei sa:\n• Čistí priestor od negatívnych a stagnujúcich energií.\n• Odstraňujú sa energetické stopy chorôb a emócií.\n• Obnovuje sa prirodzená vibrácia miesta.\n• Aktivuje sa sieť svetla a ochrany.\nEko Rei sa používa najmä na neutralizáciu geopatogénnych zón a posilnenie energetickej ochrany domova, práce a meditačných priestorov.\nPo dokončení iniciacie sa praktik stáva EkoReikológom – osobou, ktorá je schopná energeticky čistiť a harmonizovať priestor.\nPredpokladom pre prijatie tejto techniky je Usui Reiki 1. stupeň.'
        },
        angelicReiki: {
          title: 'Anjelský Reiki',
          subtitle: 'Cesta svetla a božanského uzdravenia',
          content: 'ANJELSKÝ REIKI – CESTA SVETLA A BOŽANSKÉHO UZDRAVENIA\n\nAnjelský Reiki je vysoká duchovná technika uzdravenia, ktorá spája človeka s energiami anjelov, archanjelov a božských bytostí svetla na siedmej úrovni bytia.\nTento systém prenáša čistú energiu lásky a svetla, obnovujúc rovnováhu na fyzickej, emocionálnej, mentálnej a duchovnej úrovni – v každej oblasti života.\nProstredníctvom iniciácií a práce s archanjelmi sa praktik otvára ako kanál božskej sily, ktorá lieči, chráni a povyšuje vedomie.\n\nÚloha Archanjelov a ich symbolov\n\nKaždý Archanjel v Anjelskom Reikii má svoj symbol a špecifickú frekvenciu svetla, ktorou pôsobí počas liečenia.\nTieto symboly sú kľúče, ktoré otvárajú priechody k rozličným dimenziám božskej energie.\n• Archanjel Michal – modrý lúč ochrany a sily; pretína všetky negatívne väzby a prináša odvahu.\n• Archanjel Gabriel – biely lúč čistoty a pravdy; prináša inšpiráciu a jasné vedenie.\n• Archanjel Rafael – zelený lúč uzdravenia; obnovuje telo, ducha a emócie.\n• Archanjel Uriel – zlatý lúč múdrosti; prináša stabilitu a osvietenie.\n• Archanjel Zadkiel – fialový lúč transformácie; mení negatívne energie na svetlo.\n• Archanjel Chamuel – ružový lúč božskej lásky; otvára srdce a prináša harmóniu.\n• Archanjel Metatron – najvyššia frekvencia svetla; aktivuje svetelné telo a spája so zdrojom.\n• Archanjel Jofiel – zlatoružový lúč radosti a krásy; zvyšuje vibráciu a prináša svetlo do života.\n\nLiečenie a účinky\n\nAnjelský Reiki prináša hlboké uzdravenie a mier.\nAnjeli a archanjeli počas liečenia posielajú energiu presne tam, kde je potrebná.\nPraktik používa symboly a umožňuje, aby energia prúdila slobodne, bez kontroly ega.\nLiečenie prebieha v súlade s božským plánom a nemôže ublížiť, pretože pochádza z čistej lásky.\n\nIniciácia a duchovný rast\n\nProstredníctvom iniciacie sa praktik spája s anjelskými hierarchiami a otvára kanály pre tok svetla.\nKaždý archanjel sa privoláva pomocou svojho symbolu, ktorý prenáša špecifickú frekvenciu svetla.\nTento proces prináša rozšírenie vedomia, silnejšiu intuíciu a hlbšiu jednotu s dušou.\n\nVýhody Anjelského Reikii\n\n• Hlboké uzdravenie na všetkých úrovniach.\n• Spojenie s archanjelmi a duchovnými vodcami.\n• Čistenie aury a energetická rovnováha.\n• Zvýšená intuícia a vnútorné vedenie.\n• Transformácia nízkych energií na svetlo a lásku.\n• Pocit ochrany, pokoja a harmónie.\n• Aktivácia svetelného tela a prebudenie božského potenciálu.'
        },
        certificates: {
          title: 'MOJE CERTIFIKÁTY',
          subtitle: 'Profesionálne certifikácie a kvalifikácie v oblasti energetického liečenia a duchovného rozvoja',
          viewButton: 'Zobraziť Moje Certifikáty',
          clickToView: 'Klikni pre zväčšenie'
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
          whatIsReiki: '✨ Šta je Reiki?\n\nReiki je drevni metod energetskog rada, koji se zasniva na kanalisanju univerzalne kosmičke energije (tzv. Prane) radi isceljenja, harmonizacije i podizanja životne energije čoveka.\n\nReč Reiki potiče iz japanskog jezika i sastoji se iz dva dela:\n• REI – Univerzalna, Božanska ili Kosmička\n• KI – Životna energija\n\nDakle, Reiki je prirodna metoda uz pomoć koje se kosmička energija prenosi kroz energetski kanal praktičara i koristi za:\n• jačanje imunog sistema\n• unapređenje fizičkog i psihičkog zdravlja\n• povećanje unutrašnje snage i vitalnosti\n• poboljšanje kvaliteta života\n\n💫 Zamislite Reiki kao nešto vaše — kao savezničku silu koja poseduje sopstvenu inteligenciju.\n\n• U svakom trenutku vam je na raspolaganju: da vas podrži, isceli, vodi i osvetli svaki segment vašeg života i svaku situaciju kroz koju prolazite. Reiki deluje sa ljubavlju, tiho i mudro — baš kada vam je najpotrebnije.\n\n🔬 Naučna zapažanja:\n\nIstraživanja su pokazala da prosečan čovek prima svega 5–10% kosmičke energije iz prostora, dok se uz Reiki metode taj kapacitet povećava i do 90–100%. Telo tada bolje funkcioniše, a deficit energije se nadoknađuje na suptilnim i fizičkim nivoima.\n\n🧬 Kako Reiki utiče na telo:\n\nDelovanjem Reikija dolazi do:\n• obnove ćelija\n• uravnoteženja rada DNK i RNK\n• harmonizacije hormona i endokrinog sistema\n• poboljšanja rada žlezda i tkiva\n\nKada je čovek energetski ispunjen, njegova Prana je snažna i sinhronizovana – tada dolazi do prirodnog balansa u svim slojevima postojanja.\n\n➕ VAŽNO POJAŠNJENJE:\n\n🏥 Reiki je japanska tehnika energetske terapije koju su priznala brojna ministarstva zdravlja širom sveta.\n\n🙏 Nema nikakve veze sa religijom, magijom, ezoterijom niti bilo čim sličnim.\n\n💚 Reiki nije verski pravac – to je prirodna, jednostavna metoda za podizanje životne energije i postizanje unutrašnje ravnoteže.',
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
          content: 'USUI REIKI – PUT ENERGETSKOG BUĐENJA (I–IV STEPEN)\n\nUsui Reiki je tradicionalni japanski sistem isceljenja i duhovnog razvoja koji je iskanalisao Mikao Usui početkom 20. veka.\nKroz četiri stepena, praktičar postepeno otvara energetske kanale, uči da usmerava Univerzalnu životnu energiju (Pranu) i produbljuje razumevanje sebe i sveta.\nSvaki stepen donosi novu svest, jaču povezanost sa energijom i dublji unutrašnji mir — isceljenje na svih šest nivoa tela.\n\nI stepen – Početak puta i samoisceljenje\n\nPrvi stepen je uvod u Reiki energiju i osnovu celog sistema.\nTokom ovog nivoa aktiviraju se energetski kanali i čakre, i uči se kako energiju usmeriti kroz dlanove.\nPraktičar postaje kanal Univerzalne životne energije i uči osnovne tehnike autotretmana, isceljenja tela i balansa emocija.\nOvo je stepen samopoznavanja, čišćenja i buđenja unutrašnje svesnosti.\nMnogi osete povećanu vitalnost, mir i jasnoću uma, kao i proširivanje energetskog kanala sa 5% na 100% kapaciteta i svesno kanalisanje Prane energije.\nOvaj nivo je posvećen radu na sebi, bez primene na drugima – bez simbola, fokusiran na samoisceljenje i uvod u Reiki tehniku.\n\nII stepen – Simboli, terapeutski rad i rad na daljinu\n\nDrugi stepen donosi rad sa svetim Reiki simbolima koji omogućavaju dublje isceljenje na mentalnom, emocionalnom i energetskom nivou.\nUči se kako energija može da se prenosi kroz vreme i prostor, kao i kako da se balansiraju osećanja i misli.\nOvaj nivo produbljuje intuiciju i pojačava energetski protok, proširujući energetski kanal.\nPraktičar postaje svesniji svojih misli, uči da koristi Reiki u terapijskom radu i primenjuje dodatne tehnike i nove simbole.\n\nIII stepen – Majstorski nivo i unutrašnja transformacija\n\nTreći stepen donosi Majstorski simbol koji predstavlja prosvetljenje i povezanost sa izvorom svega.\nOvaj nivo donosi dublje razumevanje duhovne strane Reikija i razvija sposobnost rada sa višim vibracijama.\nUči se naprednim tehnikama isceljenja, meditacijama, kristalnim mrežama, eteričnim tretmanima, radom sa Antahkarana simbolima i eteričnom hirurgijom.\nMajstorski stepen donosi širenje svesti, jaču intuiciju, poverenje u unutrašnje vođstvo i dublji osećaj svrhe, uz jači protok Prane energije i mogućnost rada sa drugima.\n\nIV stepen – Učititeljski nivo i prenos znanja\n\nČetvrti stepen predstavlja nivo učitelja – trenutak kada praktičar postaje spreman da inicira i obučava druge.\nOvaj stepen donosi znanje o pripremi prostora, otvaranju kanala inicijacije i energetskom vođenju učenika.\nUčititeljski nivo nosi odgovornost i milost, jer kroz prenos energije i znanja, učitelj istovremeno nastavlja sopstveno duhovno uzdizanje.\nTo je stepen potpunog jedinstva sa Reiki energijom – život u svesnom protoku svetlosti, ljubavi i isceljenja.\nOvaj nivo donosi dodatne simbole i predstavlja najviši stepen Usui Reikija.'
        },
        kundaliniReiki: {
          title: 'Kundalini Reiki',
          subtitle: 'Buđenje unutrašnje moći',
          content: 'KUNDALINI REIKI – BUĐENJE UNUTRAŠNJE MOĆI (I–III STEPEN)\n\nKundalini Reiki je moćan, ali jednostavan sistem energetskog isceljenja koji povezuje univerzalnu energiju sa energijom zemlje i buđenjem unutrašnje životne sile – Kundalini energije.\nZa razliku od tradicionalnog Usui sistema, Kundalini Reiki koristi prirodan tok energije koji se spontano uzdiže od korenske čakre ka krunskoj, otvarajući energetski kanal i balansirajući sve nivoe tela.\nKundalini energija se nalazi u korenskoj čakri, gde prirodno "spava", i kroz praksu se postepeno budi. Ovo buđenje donosi proces čišćenja, snažne transformacije i oslobađanja od blokada koje sputavaju protok energije.\nKroz tri stepena, praktičar se oslobađa energetskih i emocionalnih blokada, aktivira pun protok energije i stiče sposobnost da koristi snagu Kundalinija za isceljenje, balans i duhovni rast.\n\nI stepen – Otvaranje energetskih kanala i aktivacija osnovne energije\n\nPrvi stepen predstavlja početak procesa buđenja Kundalini energije i čišćenja energetskih kanala.\nU ovom nivou energija zemlje počinje da se uzdiže, otvarajući kanal između korenske i krunske čakre.\nPraktičar uči da usmerava Reiki energiju kroz dlanove, radi autotretmane i počinje da prepoznaje sopstveni energetski ritam.\nOvaj stepen donosi mir, stabilnost i povezivanje sa prirodom. Čisti se emocionalno telo, oslobađa se strah, a poverenje u intuiciju raste.\nEnergija Kundalinija se postepeno podiže do srčane čakre, stvarajući balans između zemlje i duhovne energije.\nNa ovom nivou radi se isključivo na sebi – buđenje, balans i priprema za viši protok energije.\n\nII stepen – Protok energije i buđenje Kundalinija\n\nDrugi stepen donosi jači protok energije i aktivaciju Kundalini plamena u korenskoj čakri.\nEnergija se spontano uzdiže do solarnog pleksusa, donoseći vitalnost, snagu i balans između duhovnog i fizičkog sveta.\nU ovom nivou dolazi do dubljeg otvaranja čakri i proboja blokada koje su do sada ograničavale energetski tok.\nPraktičar stiče sposobnost da radi tretmane na drugima, koristi dodatne Reiki tehnike i povezuje se sa specifičnim energijama – balans pet elemenata, isceljenje karmičkih obrazaca, čišćenje prostora i podizanje vibracije.\nKundalini Reiki na ovom nivou otklanja duboke blokade i pokreće snažno strujanje života kroz sve čakre.\n\nIII stepen (Master nivo) – Potpuno buđenje i duhovno majstorstvo\n\nMaster stepen donosi potpuno otvaranje energetskog kanala i slobodan tok Kundalini energije od korena do krune.\nEnergija se penje kroz srčanu čakru, gde se spaja sa Pranom – univerzalnom životnom silom – stvarajući ciklično kruženje između zemlje i neba.\nPraktičar sada stiče punu svesnost energetskog toka i može da inicira druge u Kundalini Reiki.\nNa ovom nivou uče se napredne tehnike rada na daljinu, isceljenja bez ograničenja prostora i vremena, kao i rad sa višim vibracijama.\nMajstor Kundalini Reikija postaje kanal čiste, svesne energije koja isceljuje, balansira i uzdiže svest.\nOvaj stepen donosi duboku povezanost sa božanskom energijom, razumevanje jedinstva duha i materije, i stanje unutrašnjeg mira i prosvetljenja.'
        },
        ecoRei: {
          title: 'Eko Rei',
          subtitle: 'Energija Zemlje i svetlosti prirode',
          content: 'EKO REI – ENERGIJA ZEMLJE I SVETLOSTI PRIRODE\n\nEko Rei je moćna, kompleksna i jedinstvena tehnika koja se isključivo bavi čišćenjem prostora i obnavljanjem energetskog balansa u okruženju u kojem živimo.\nOva metoda donosi duboku povezanost sa prirodom, Zemljom i svim životnim oblicima. U samoj tehnici postoje pod-tehnike koje omogućavaju precizno delovanje na različite vrste prostora i energetskih nepravilnosti.\nEko Rei počiva na harmoniji između čoveka i prirodnih energija koje nas okružuju – elemenata zemlje, vode, vatre, vazduha i etra.\nOva tehnika donosi svesnost o povezanosti svega što postoji i podsećа da smo deo jedinstvenog ekosistema života.\nEnergija Eko Reija deluje ne samo na ljude, već i na životinje, biljke, objekte i samu Zemlju.\nPrimenjuje se za čišćenje životnog prostora od negativnih vibracija, stagnirajuće energije, geopatogenih zona i emocionalnih otisaka.\nJedan tretman Eko Reija dovoljan je za trajnu harmonizaciju prostora – jer se ova tehnika radi samo jednom u životu.\n\nPovezanost sa prirodom i elementima\n\nEko Rei aktivira duboku povezanost sa elementima prirode i njihovu čistu, izvorni snagu:\n• Zemlja – donosi stabilnost, snagu i utemeljenje.\n• Voda – čisti i omogućava slobodan protok emocija.\n• Vatra – transformiše i oslobađa.\n• Vazduh – donosi jasnoću, prosvetljenje i slobodu duha.\n• Eter – povezuje sa božanskim izvorom i univerzalnom svešću.\nU radu sa ovom tehnikom koristi se ljubičast plamen zraka, ujedinjena energija svetlosti, postavljanje kristalne ploče, rad sa kristalima i elementima prirode, kao i komunikacija sa prostorom kao živim organizmom.\nPraktičar kroz taj proces postaje kanal energije Zemlje i Svetlosti koji aktivira balans i obnavlja vitalnost prostora.\n\nRad i primena Eko Reija\n\nEko Rei koristi jednostavne, ali izuzetno moćne metode rada sa prirodnim silama.\nEnergija se aktivira kroz nameru, simbole i povezivanje sa energijom Majke Zemlje.\nTretmani se mogu raditi direktno na prostoru ili na daljinu.\nKroz rad sa Eko Rei energijom:\n• Čisti se prostor od negativnih i stagnirajućih energija.\n• Uklanjaju se energetski otisci bolesti, emocija i prošlih događaja.\n• Obnavlja se prirodna vibracija mesta i životnog okruženja.\n• Aktivira se svetlosna mreža zaštite i ravnoteže.\nEko Rei se posebno koristi za neutralizaciju geopatogenih zona i jačanje energetske zaštite doma, prostora rada i meditacije.\nOva tehnika se prenosi samo jednom, a po završetku obuke praktičar postaje EkoReikolog – osoba osposobljena da sprovodi energetsko čišćenje prostora i održava vibracionu čistotu okoline.\nPreduslov za primanje ove tehnike je Usui Reiki I stepen.\n\nBlagodeti Eko Reija\n\n• Čišćenje i harmonizacija prostora i energije.\n• Neutralizacija geopatogenih zona i niskih vibracija.\n• Povećana vitalnost, stabilnost i osećaj mira.\n• Dublja povezanost sa prirodom i elementima.\n• Aktivacija svetlosne zaštite i energetskog balansa.\n• Isceljenje prostora, tela i duha kroz jedinstvo sa Zemljom.'
        },
        angelicReiki: {
          title: 'Anđeosko Reiki',
          subtitle: 'Put svetlosti i božanskog isceljenja',
          content: 'ANĐEOSKI REIKI – PUT SVETLOSTI I BOŽANSKOG ISCELJENJA\n\nAnđeoski Reiki je visoka duhovna tehnika isceljenja koja povezuje čoveka sa energijama anđela, arhanđela i božanskih svetlosnih bića koja obitavaju na sedmom nivou postojanja.\nOvaj sistem prenosi čistu energiju ljubavi i svetlosti, obnavljajući ravnotežu na fizičkom, emocionalnom, mentalnom i duhovnom nivou – bukvalno u svim segmentima života\nKroz inicijacije i rad sa arhanđelima, praktičar otvara svoj energetski kanal i postaje instrument božanske sile koja isceljuje, štiti i uzdiže svest čoveka.\n\nUloga Arhanđela i njihovih simbola\n\nU Anđeoskom Reikiju svaki Arhanđel poseduje svoj simbol i specifičnu frekvenciju svetlosti kojom deluje tokom tretmana.\nTi simboli predstavljaju ključeve koji otvaraju prolaze ka različitim dimenzijama božanske energije i vibracijama ljubavi.\n• Arhanđel Mihajlo – plavi zrak zaštite i snage; preseca sve negativne veze i donosi sigurnost i hrabrost.\n• Arhanđel Gavrilo – beli zrak čistote i istine; donosi inspiraciju, jasno viđenje i božansko vođstvo.\n• Arhanđel Rafailo – zeleni zrak isceljenja; obnavlja telo, duh i emocije, donosi mir i regeneraciju.\n• Arhanđel Urijel – zlatni zrak mudrosti; donosi jasno razumevanje, stabilnost i prosvetljenje.\n• Arhanđel Zadkijel – ljubičast zrak transformacije i oprosta; pretvara negativne obrasce u svetlost.\n• Arhanđel Camujil – ružičasti zrak božanske ljubavi; otvara srce i donosi harmoniju u odnosima.\n• Arhanđel Metatron – nosilac najviše svetlosti i duhovne geometrije; povezuje sa izvorom i aktivira svetlosno telo.\n• Arhanđel Jofijil – zlatno-ružičasti zrak unutrašnje lepote i radosti; podiže vibraciju i donosi jasno viđenje života.\nKroz rad sa ovim energijama, praktičar doživljava unutrašnju transformaciju, proširenje svesti i povratak božanskom jedinstvu.\n\nTretman i delovanje\n\nTretmani Anđeoskog Reikija su jedinstveni i duboko isceljujući.\nTokom rada, anđeli i arhanđeli pristupaju osobi, prenoseći energiju tamo gde je najpotrebnija.\nPraktičar koristi simbole, poziva njihovu prisutnost i dozvoljava energiji da teče slobodno, bez kontrole ega.\nOsobe tokom tretmana najčešće osećaju toplotu, bljесак svetlosti, mirise, trnce ili duboki unutrašnji mir.\nEnergija deluje u skladu sa božanskim planom, bez mogućnosti da naškodi, jer potiče iz samog izvora čiste ljubavi.\n\nInicijacija i duhovni rast\n\nKroz inicijaciju, praktičar se povezuje sa svetlosnim hijerarhijama i otvara kanale za prenos anđeoske energije.\nDobija pristup segmentima božanske frekvencije, u zavisnosti od arhanđela kojeg priziva putem specifičnog simbola.\nSvaka inicijacija donosi proširenje svesti, jaču intuiciju i dublju povezanost sa sopstvenom dušom i božanskim bićem.\nPraktičar postaje kanal kroz koji anđeli deluju u miru, ljubavi i svetlosti.\n\nBlagodeti Anđeoskog Reikija\n\n• Duboko isceljenje na svim nivoima postojanja.\n• Povezivanje sa arhanđelima, duhovnim vodičima i božanskim izvorom.\n• Čišćenje aure i uspostavljanje energetskog balansa.\n• Pojačana intuicija, jasno viđenje i unutrašnje vođstvo.\n• Transformacija negativnih energija u svetlost i ljubav.\n• Osećaj unutrašnjeg mira, zaštite i harmonije.\n• Aktivacija svetlosnog tela i buđenje božanskog potencijala u čoveku.'
        },
        certificates: {
          title: 'MOJI SERTIFIKATI',
          subtitle: 'Profesionalne sertifikacije i kvalifikacije u oblasti energetskog isceljenja i duhovnog razvoja',
          viewButton: 'Pogledaj Moje Sertifikate',
          clickToView: 'Klikni za uvećanje'
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
