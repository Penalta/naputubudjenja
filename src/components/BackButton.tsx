import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="fixed top-6 left-6 z-50">
      <Button 
        onClick={() => navigate('/')}
        variant="outline"
        size="sm"
        className="bg-background/80 backdrop-blur-sm border-sunset-primary/30 hover:border-sunset-primary/60 hover:bg-sunset-primary/10 transition-all duration-300"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t('common.backToHome')}
      </Button>
    </div>
  );
};

export default BackButton;