import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface MidPageCTAProps {
  onCTAClick: () => void;
}

export const MidPageCTA = ({ onCTAClick }: MidPageCTAProps) => {
  return (
    <section className="py-10 sm:py-14 px-4 gradient-hero">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Transformação garantida</span>
        </div>
        
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Pronta para começar sua jornada de cura?
        </h3>
        
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Milhares de mulheres já transformaram suas vidas com o Ho'oponopono. 
          Agora é a sua vez de liberar o passado e criar um novo futuro.
        </p>

        <Button
          onClick={onCTAClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base sm:text-lg group"
        >
          QUERO MINHA TRANSFORMAÇÃO
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="text-xs text-muted-foreground mt-4">
          ✓ Acesso imediato • ✓ Garantia de 7 dias • ✓ Pagamento seguro
        </p>
      </div>
    </section>
  );
};
