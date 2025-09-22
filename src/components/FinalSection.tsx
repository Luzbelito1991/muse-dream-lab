const FinalSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote */}
        <blockquote className="space-y-6">
          <p className="font-quote text-2xl md:text-3xl text-white italic leading-relaxed">
            "Los sueños no se explican.<br />
            Se sienten.<br />
            Y ahora, también se ven."
          </p>
          
          {/* Decorative element */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-dream-lavender to-transparent"></div>
            <div className="w-2 h-2 bg-dream-star rounded-full animate-pulse"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-dream-lavender to-transparent"></div>
          </div>
        </blockquote>

        {/* CTA Section */}
        <div className="mt-16 glass-card p-8 space-y-6">
          <h4 className="font-heading text-2xl font-bold text-white">
            ¿Listo para ver tus sueños?
          </h4>
          <p className="font-body text-white/80 max-w-2xl mx-auto">
            Únete a miles de soñadores que ya han transformado sus experiencias nocturnas 
            en arte visual único y personal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const formElement = document.getElementById('dream-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-dream"
            >
              Comenzar ahora
            </button>
            <p className="text-sm text-white/60">
              Sin compromisos • 5 creaciones gratuitas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;