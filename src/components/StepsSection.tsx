import { Edit3, Palette, ImageIcon } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      icon: Edit3,
      title: "Contá tu sueño",
      description: "Escribí lo que recordás al despertar. Cada detalle, cada emoción, cada imagen que quedó en tu memoria.",
      color: "from-dream-violet to-dream-lavender"
    },
    {
      icon: Palette,
      title: "Lo interpretamos",
      description: "Nuestra IA traduce emociones y símbolos en arte visual. Cada sueño se convierte en una obra única.",
      color: "from-dream-turquoise to-dream-violet"
    },
    {
      icon: ImageIcon,
      title: "Recibí tu imagen",
      description: "Obtenés una representación visual única de tu sueño, lista para guardar, compartir o contemplar.",
      color: "from-dream-peach to-dream-turquoise"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Cómo funciona la magia?
          </h3>
          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
            En tres simples pasos transformamos tus experiencias oníricas en arte visual
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group glass-card p-8 text-center hover:scale-105 transition-all duration-500"
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${step.color} mb-6`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Step number */}
              <div className="text-sm font-heading font-semibold text-dream-lavender mb-2 tracking-wider">
                PASO {index + 1}
              </div>

              {/* Title */}
              <h4 className="font-heading text-xl font-bold text-white mb-4">
                {step.title}
              </h4>

              {/* Description */}
              <p className="font-body text-white/80 leading-relaxed">
                {step.description}
              </p>

              {/* Decorative line */}
              <div className={`w-12 h-1 bg-gradient-to-r ${step.color} mx-auto mt-6 rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;