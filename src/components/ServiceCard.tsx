import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  image: string;
  description?: string;
  link: string;
}

const ServiceCard = ({ title, image, description, link }: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card backdrop-blur-sm border-earth-warm/30 hover:border-sunset-primary/50 transition-all duration-700 hover:shadow-spiritual hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2 tracking-wide">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;