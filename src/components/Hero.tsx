import logo from '@/assets/logo-reiki-academy.png';
import StarryBackground from '@/components/StarryBackground';

interface HeroProps {
  translations: any;
}

const Hero = ({ translations }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <StarryBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {/* Logo with Glow */}
          <div className="relative z-10 animate-float">
            <img
              src={logo}
              alt="Na putu buđenja Logo"
              className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Company Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Na putu buđenja
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
