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
    <section className="section-alt py-12 md:py-28 px-4">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-8 md:mb-14">
            <span className="inline-block bg-accent/10 text-accent px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Você se identifica?
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 leading-tight">
              Talvez você esteja passando por isso agora
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              A maioria dos pais enfrenta os mesmos desafios. Você não está sozinho.
            </p>
          </div>
          
          {/* Mobile: Single column for better readability */}
          <div className="grid gap-3 md:grid-cols-2 md:gap-6">
            {painPoints.map((pain, index) => (
              <div
                key={index}
                className="bg-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-border/50"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-accent/10 p-2.5 md:p-3 rounded-lg md:rounded-xl shrink-0">
                    <pain.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-lg">{pain.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-base leading-relaxed">{pain.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 md:mt-12 text-sm md:text-lg text-foreground font-medium">
            Se você se identificou, existe uma solução simples.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
