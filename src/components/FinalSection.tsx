const FinalSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Elegant Quote */}
        <blockquote className="space-y-4">
          <p className="font-logo text-3xl md:text-4xl text-white leading-relaxed">
            "Every dream is a window<br />
            to your inner universe"
          </p>
        </blockquote>

        {/* Footer text */}
        <p className="font-body text-sm text-white/60 pt-8">
          DreamFrame © 2024 • Transforming dreams into art
        </p>
      </div>
    </section>
  );
};

export default FinalSection;