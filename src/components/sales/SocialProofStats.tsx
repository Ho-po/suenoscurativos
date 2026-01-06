import { Users, Star, Heart, ShieldCheck } from "lucide-react";

export const SocialProofStats = () => {
  const stats = [
    {
      icon: Users,
      value: "2.347+",
      label: "Alunos transformados"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Avaliação média"
    },
    {
      icon: Heart,
      value: "98%",
      label: "Taxa de satisfação"
    },
    {
      icon: ShieldCheck,
      value: "7 dias",
      label: "Garantia total"
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
