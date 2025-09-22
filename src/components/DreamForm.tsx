import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const DreamForm = () => {
  const [dreamText, setDreamText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!dreamText.trim()) {
      toast({
        title: "¿Tu sueño está vacío?",
        description: "Contanos qué soñaste para poder crear tu imagen.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // TODO: Integrate with AI API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast({
        title: "¡Tu sueño se está convirtiendo en arte!",
        description: "En unos momentos tendrás tu imagen única.",
      });
    } catch (error) {
      toast({
        title: "Algo salió mal",
        description: "No pudimos procesar tu sueño. Intentá de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="dream-form" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Form Title */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Qué soñaste?
          </h3>
          <p className="font-body text-lg text-white/80">
            Compartí tu experiencia onírica con nosotros. No te preocupes por los detalles perfectos, 
            cada fragmento de memoria es valioso.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
          <div className="space-y-3">
            <label 
              htmlFor="dream-textarea" 
              className="font-heading text-white font-medium block"
            >
              Escribí tu sueño
            </label>
            <Textarea
              id="dream-textarea"
              placeholder="Ej. Estaba en una ciudad flotante con luces verdes que danzaban en el cielo. Las calles eran de cristal y reflejaban mis pasos. Había una música muy suave que venía de todas partes..."
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              className="min-h-32 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-dream-lavender focus:ring-dream-lavender resize-none"
              disabled={isGenerating}
            />
            <div className="text-right text-sm text-white/60">
              {dreamText.length} caracteres
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <Button
              type="submit"
              disabled={isGenerating || !dreamText.trim()}
              className="btn-dream inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creando tu sueño...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generar imagen
                </>
              )}
            </Button>
          </div>

          {/* Helper text */}
          <div className="text-center text-sm text-white/60 pt-2">
            <p>
              ✨ Cada usuario registrado recibe <strong>5 creaciones gratuitas</strong> por mes
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DreamForm;