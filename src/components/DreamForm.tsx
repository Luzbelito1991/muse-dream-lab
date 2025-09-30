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
    <section id="dream-form" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Form Title */}
        <div className="text-center mb-10">
          <h2 className="font-logo text-4xl md:text-5xl font-bold text-white mb-3">
            Create Your Dream
          </h2>
          <p className="font-body text-base text-white/80">
            Describe your dream in detail and let AI bring it to life
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6">
          <div className="space-y-3">
            <label 
              htmlFor="dream-textarea" 
              className="font-body text-white font-medium block text-sm"
            >
              Your Dream
            </label>
            <Textarea
              id="dream-textarea"
              placeholder="I was walking through a garden filled with glowing flowers under a purple sky..."
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              className="min-h-40 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary resize-none font-body"
              disabled={isGenerating}
            />
          </div>

          {/* Submit Button - Terracotta */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isGenerating || !dreamText.trim()}
              className="btn-secondary inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Image
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DreamForm;