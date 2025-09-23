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
          <h1 className="font-logo text-5xl md:text-7xl font-semibold text-foreground tracking-tight">
            DreamFrame
          </h1>
          <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full"></div>
        </div>

        {/* Main Title */}
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight">
          Transforma tus sueños<br />
          <span className="bg-gradient-to-r from-dream-turquoise to-dream-peach bg-clip-text text-transparent">
            en imágenes
          </span>
        </h2>

        {/* Subtitle */}
        <p className="font-heading text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">
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

      </div>
    </section>
  );
};

export default HeroSection;