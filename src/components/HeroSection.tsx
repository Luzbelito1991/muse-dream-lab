import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('dream-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Logo */}
        <div className="space-y-4">
          <h1 className="font-logo text-6xl md:text-8xl font-bold text-white tracking-wide">
            DreamFrame
          </h1>
          <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full"></div>
        </div>

        {/* Main Title */}
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
          Transforma tus sueños<br />
          <span className="bg-gradient-to-r from-dream-turquoise to-dream-peach bg-clip-text text-transparent">
            en imágenes
          </span>
        </h2>

        {/* Subtitle */}
        <p className="font-heading text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Escribí lo que soñaste. Nosotros lo convertimos en arte.
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <button 
            onClick={scrollToForm}
            className="btn-dream text-lg md:text-xl"
          >
            Visualizar mi sueño
          </button>
        </div>

        {/* Floating indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-white/30 rounded-full">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;