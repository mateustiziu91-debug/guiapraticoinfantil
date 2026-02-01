import { Tv, Heart, Sparkles, Shield, Feather } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Tv,
    title: "Menos Tempo de Tela",
    description: "Seu filho vai pedir menos celular e tablet naturalmente",
  },
  {
    icon: Heart,
    title: "Mais Tranquilidade",
    description: "Casa mais calma, menos birras e mais harmonia familiar",
  },
  {
    icon: Sparkles,
    title: "Criança Mais Engajada",
    description: "Atividades que prendem a atenção e estimulam a criatividade",
  },
  {
    icon: Shield,
    title: "Pais Mais Seguros",
    description: "Você vai saber exatamente o que fazer para ajudar seu filho",
  },
  {
    icon: Feather,
    title: "Rotina Mais Leve",
    description: "Menos estresse, mais momentos de qualidade juntos",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-alt py-10 md:py-28 px-3 sm:px-4">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-8 md:mb-14">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Benefícios reais
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
              O que vai mudar na sua casa
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Pequenas mudanças que fazem grande diferença
            </p>
          </div>
          
          {/* Mobile: 2 columns compact grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border border-border/50"
              >
                <div className="bg-primary/10 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-2.5 md:mb-4">
                  <benefit.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-xs sm:text-sm md:text-base mb-1 md:mb-2 leading-tight">{benefit.title}</h3>
                <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm leading-snug">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
