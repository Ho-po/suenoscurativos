import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { trackButtonClick, trackCheckoutIntent } from "@/lib/gtm";

interface MidPageCTAProps {
  onCTAClick: () => void;
}

const handleMidPageCTAClick = (onCTAClick: () => void) => {
  trackButtonClick('quiero_transformacion', 'mid_page');
  trackCheckoutIntent('mid_page');
  onCTAClick();
};

export const MidPageCTA = ({ onCTAClick }: MidPageCTAProps) => {
  return (
    <section className="py-10 sm:py-14 px-4 gradient-hero">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Transformación garantizada</span>
        </div>
        
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          ¿Lista para comenzar tu viaje de sanación?
        </h3>
        
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Miles de mujeres ya transformaron sus vidas con el Ho'oponopono. 
          Ahora es tu turno de liberar el pasado y crear un nuevo futuro.
        </p>

        <Button
          onClick={() => handleMidPageCTAClick(onCTAClick)}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base sm:text-lg group"
        >
          QUIERO MI TRANSFORMACIÓN
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="text-xs text-muted-foreground mt-4">
          ✓ Acceso inmediato • ✓ Garantía de 7 días • ✓ Pago seguro
        </p>
      </div>
    </section>
  );
};
