import { Edit3, Palette, ImageIcon } from "lucide-react";

const StepsSection = () => {
  const features = [
    {
      icon: Edit3,
      title: "Describe",
      description: "Write down what you dreamed"
    },
    {
      icon: Palette,
      title: "Generate",
      description: "AI interprets your vision"
    },
    {
      icon: ImageIcon,
      title: "Receive",
      description: "Get your unique dream art"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Three Column Feature Icons */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4"
            >
              {/* Minimalist Icon */}
              <div className="inline-flex p-4 mb-2">
                <feature.icon className="w-12 h-12 text-white stroke-[1.5]" />
              </div>

              {/* Title */}
              <h3 className="font-logo text-2xl font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-white/80 text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;