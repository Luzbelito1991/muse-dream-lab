import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('dream-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Logo / Brand */}
        <div className="space-y-2">
          <h1 className="font-logo text-7xl md:text-8xl font-bold text-white tracking-tight">
            DreamFrame
          </h1>
          <div className="w-20 h-0.5 bg-white/40 mx-auto rounded-full"></div>
        </div>

        {/* Main Tagline */}
        <p className="font-body text-xl md:text-2xl text-white/95 max-w-xl mx-auto leading-relaxed">
          Transform your dreams into visual art with AI
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <button 
            onClick={scrollToForm}
            className="btn-dream text-lg"
          >
            Create Your Dream
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;