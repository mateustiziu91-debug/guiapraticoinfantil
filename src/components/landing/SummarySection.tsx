import { Check, Gift, FileText, Shield, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  {
    icon: FileText,
    title: "Guia Digital Principal",
    description: "Atividades educativas prontas para 3 a 5 anos",
  },
  {
    icon: Gift,
    title: "Brinde: Caderno de Alfabetização",
    description: "+150 atividades de aprendizado incluídas",
  },
  {
    icon: Clock,
    title: "Acesso Imediato",
    description: "Receba tudo no seu e-mail em minutos",
  },
  {
    icon: Shield,
    title: "Garantia de 7 Dias",
    description: "Satisfação garantida ou seu dinheiro de volta",
  },
];

const SummarySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-8 md:py-20 px-3 sm:px-4 bg-secondary/30">
      <div className="container max-w-3xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 md:mb-2">
              Tudo o que você recebe hoje
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Por apenas <span className="text-primary font-bold text-base md:text-lg">R$ 14,90</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl md:rounded-2xl p-3.5 md:p-5 border border-border/50 flex items-start gap-3 md:gap-4"
              >
                <div className="bg-primary/10 rounded-lg md:rounded-xl p-2 md:p-2.5 shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                    <h3 className="font-semibold text-foreground text-xs md:text-sm leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
