import { Frown, Brain, HelpCircle, Clock } from "lucide-react";

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
  return (
    <section className="section-light py-16 md:py-24 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Você se identifica com isso?
          </h2>
          <p className="text-muted-foreground text-lg">
            Muitos pais passam por isso todos os dias...
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-xl shrink-0">
                  <pain.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{pain.title}</h3>
                  <p className="text-muted-foreground text-sm">{pain.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-10 text-lg text-foreground font-medium">
          Se você se identificou, saiba que existe uma solução simples.
        </p>
      </div>
    </section>
  );
};

export default PainSection;
