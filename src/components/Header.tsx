import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
  translations: any;
}

const Header = ({ language, setLanguage, translations }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: 'aboutTeacher', label: translations.nav.aboutTeacher, path: '/about-teacher' },
    { key: 'reiki', label: translations.nav.reiki, path: '/reiki' },
    { key: 'academy', label: translations.nav.academy, path: '/academy' },
    { key: 'courses', label: translations.nav.courses, path: '/courses' },
    { key: 'therapy', label: translations.nav.therapy, path: '#therapy' },
    { key: 'ekorei', label: translations.nav.ekorei, path: '#ekorei' },
    { key: 'blog', label: translations.nav.blog, path: '#blog' },
  ];

  const languages = [
    { code: 'sk', label: '🇸🇰 SK', fullLabel: 'Slovenčina' },
    { code: 'en', label: '🇬🇧 EN', fullLabel: 'English' },
    { code: 'sr', label: '🇷🇸 SR', fullLabel: 'Srpski' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Na putu buđenja
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 ml-16">
            {menuItems.map((item) => {
              const isExternal = item.path.startsWith('#');
              return isExternal ? (
                <a
                  key={item.key}
                  href={item.path}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={item.key}
                  to={item.path}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </div>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center space-x-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 text-sm rounded-md transition-all duration-300 ${
                  language === lang.code
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/60 hover:text-foreground hover:bg-secondary'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {menuItems.map((item) => {
              const isExternal = item.path.startsWith('#');
              return isExternal ? (
                <a
                  key={item.key}
                  href={item.path}
                  className="block text-foreground/80 hover:text-accent transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.key}
                  to={item.path}
                  className="block text-foreground/80 hover:text-accent transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center space-x-2 pt-4 border-t border-border">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 text-sm rounded-md transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/60 hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
