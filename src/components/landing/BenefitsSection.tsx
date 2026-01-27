import { Tv, Heart, Sparkles, Shield, Feather } from "lucide-react";

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
  return (
    <section className="section-alt py-16 md:py-24 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            O que vai mudar na sua casa
          </h2>
          <p className="text-muted-foreground text-lg">
            Benefícios reais para toda a família
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
