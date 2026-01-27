import { Gift, BookOpen, Hand, Eye, Volume2, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const learningAreas = [
  {
    icon: BookOpen,
    title: "Reconhecimento de Letras",
    description: "Atividades para familiarizar com o alfabeto",
  },
  {
    icon: Hand,
    title: "Coordenação Motora",
    description: "Exercícios que desenvolvem a escrita",
  },
  {
    icon: Eye,
    title: "Atenção e Concentração",
    description: "Tarefas que fortalecem o foco",
  },
  {
    icon: Volume2,
    title: "Sons e Palavras",
    description: "Introdução à fonética de forma lúdica",
  },
  {
    icon: Puzzle,
    title: "Associação e Lógica",
    description: "Conexões que estimulam o raciocínio",
  },
];

const BonusSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToCta = () => {
    const ctaElement = document.getElementById("cta-principal");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 bonus-gradient">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-5 py-2.5 rounded-full mb-6">
              <Gift className="w-5 h-5 text-accent" />
              <span className="font-bold text-sm">Brinde Exclusivo Incluído</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
              E você ainda recebe um presente especial
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Além do guia principal, você leva sem custo adicional um{" "}
              <span className="text-primary font-semibold">Caderno de Atividades de Alfabetização</span>{" "}
              para acelerar ainda mais o aprendizado do seu filho.
            </p>
          </div>

          {/* Bonus Card */}
          <div className="bg-card rounded-3xl p-6 md:p-10 border-2 border-accent/30 shadow-xl mb-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="bg-accent/20 rounded-2xl p-4 w-fit">
                  <BookOpen className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    Caderno de Alfabetização Infantil
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      +150 atividades
                    </span>
                    <span className="text-muted-foreground text-sm">
                      prontas para usar
                    </span>
                  </div>
                </div>
              </div>

              {/* Learning Areas Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-8">
                {learningAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-background/70 rounded-xl p-3 md:p-4 text-center hover:bg-background transition-colors"
                  >
                    <area.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs md:text-sm font-medium text-foreground leading-tight">
                      {area.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Value Proposition */}
              <div className="bg-secondary/50 rounded-2xl p-5 text-center">
                <p className="text-foreground font-medium mb-1">
                  Este caderno sozinho já teria valor próprio
                </p>
                <p className="text-muted-foreground text-sm">
                  Mas você recebe gratuitamente, junto com o guia principal, pelo mesmo preço de{" "}
                  <span className="text-primary font-bold">R$ 14,90</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="ctaSecondary"
              size="lg"
              onClick={scrollToCta}
              className="group"
            >
              Quero Receber Tudo Isso Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Guia Principal + Caderno de Alfabetização incluído
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
