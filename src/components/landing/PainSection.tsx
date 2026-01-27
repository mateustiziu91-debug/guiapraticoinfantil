import { Frown, Brain, HelpCircle, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const painPoints = [
  {
    icon: Frown,
    title: "Criança entediada sem celular",
    description: "Quando tira a tela, não sabe o que fazer e começa a reclamar ou chorar.",
  },
  {
    icon: Brain,
    title: "Dificuldade de concentração",
    description: "Parece que nada mais prende a atenção do seu filho além das telas.",
  },
  {
    icon: HelpCircle,
    title: "Sem saber o que fazer",
    description: "Você quer ajudar, mas não tem ideias ou não sabe por onde começar.",
  },
  {
    icon: Clock,
    title: "Rotina caótica em casa",
    description: "Dias difíceis, criança agitada e você sem energia para inventar atividades.",
  },
];

const PainSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-alt py-20 md:py-28 px-4">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              Você se identifica?
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Talvez você esteja passando por isso agora
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A maioria dos pais enfrenta os mesmos desafios. E está tudo bem — você não está sozinho.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((pain, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl shrink-0 group-hover:bg-accent/20 transition-colors">
                    <pain.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">{pain.title}</h3>
                    <p className="text-muted-foreground">{pain.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 text-lg text-foreground font-medium">
            Se você se identificou, saiba que existe uma solução simples.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
