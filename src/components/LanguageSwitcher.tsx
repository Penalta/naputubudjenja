import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
    { code: 'sr', name: 'Српски', flag: '🇷🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="fixed top-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-background/80 backdrop-blur-sm border-sunset-primary/30 hover:border-sunset-primary/60 hover:bg-sunset-primary/10 transition-all duration-300"
          >
            <Globe className="h-4 w-4 mr-2" />
            <span className="mr-1">{currentLanguage?.flag}</span>
            {currentLanguage?.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="bg-background/95 backdrop-blur-sm border-sunset-primary/30"
        >
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`cursor-pointer hover:bg-sunset-primary/10 ${
                language === lang.code ? 'bg-sunset-primary/20' : ''
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;