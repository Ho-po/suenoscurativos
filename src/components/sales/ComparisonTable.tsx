import { Check, X } from "lucide-react";

export const ComparisonTable = () => {
  const comparisons = [
    {
      without: "Carrega culpas e mágoas do passado",
      with: "Liberta-se de memórias dolorosas"
    },
    {
      without: "Repete padrões tóxicos em relacionamentos",
      with: "Atrai vínculos saudáveis e amorosos"
    },
    {
      without: "Sente bloqueios com dinheiro e abundância",
      with: "Abre-se para prosperidade e fluxo"
    },
    {
      without: "Vive ansiosa e desconectada de si",
      with: "Encontra paz interior e clareza mental"
    },
    {
      without: "Critica-se constantemente",
      with: "Desenvolve amor próprio genuíno"
    },
    {
      without: "Sente-se presa ao passado familiar",
      with: "Cura o linaje e quebra ciclos"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            A diferença que o <span className="text-gradient-gold">Ho'oponopono</span> faz
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* SEM o Cuaderno */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Sem o Cuaderno
              </h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm sm:text-base text-muted-foreground">
                    {item.without}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* COM o Cuaderno */}
          <div className="bg-primary/5 border border-primary/30 rounded-2xl p-5 sm:p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
              RECOMENDADO
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Com o Cuaderno
              </h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    {item.with}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg sm:text-xl font-serif italic text-foreground">
            "A escolha é sua: continuar carregando o peso do passado ou libertar-se agora."
          </p>
        </div>
      </div>
    </section>
  );
};
