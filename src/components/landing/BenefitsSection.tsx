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
    <section className="section-alt py-20 md:py-28 px-4">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Benefícios reais
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              O que vai mudar na sua casa
            </h2>
            <p className="text-muted-foreground text-lg">
              Pequenas mudanças que fazem grande diferença no dia a dia
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
