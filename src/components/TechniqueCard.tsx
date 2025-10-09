import { Card, CardContent } from "@/components/ui/card";

interface TechniqueCardProps {
  title: string;
  description: string;
  icon: string;
}

const TechniqueCard = ({ title, description, icon }: TechniqueCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card backdrop-blur-sm border-earth-warm/30 hover:border-sunset-primary/50 transition-all duration-700 hover:shadow-spiritual hover:scale-105">
      <CardContent className="p-6 text-center">
        <div className="mb-4">
          <div className="w-16 h-16 bg-gradient-sunset rounded-full mx-auto flex items-center justify-center shadow-spiritual group-hover:shadow-glow transition-all duration-500">
            <span className="text-2xl">{icon}</span>
          </div>
        </div>
        <h3 className="text-lg font-heading font-semibold text-sunset-secondary mb-3 tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </CardContent>
    </Card>
  );
};

export default TechniqueCard;