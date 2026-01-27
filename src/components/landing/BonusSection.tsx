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
    <section className="py-12 md:py-28 px-4 bonus-gradient">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          {/* Header - Mobile optimized */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-4 md:mb-6">
              <Gift className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="font-bold text-xs md:text-sm">Brinde Exclusivo Incluído</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4 text-balance leading-tight">
              E você ainda recebe um presente especial
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              Além do guia principal, você leva sem custo adicional um{" "}
              <span className="text-primary font-semibold">Caderno de Alfabetização</span>{" "}
              para acelerar o aprendizado.
            </p>
          </div>

          {/* Bonus Card - Mobile compact */}
          <div className="bg-card rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 border-2 border-accent/30 shadow-xl mb-8 md:mb-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              {/* Header with badge - Mobile stacked */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 md:mb-8">
                <div className="bg-accent/20 rounded-xl p-3 w-fit">
                  <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                    Caderno de Alfabetização Infantil
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs md:text-sm font-bold">
                      +150 atividades
                    </span>
                    <span className="text-muted-foreground text-xs md:text-sm">
                      prontas para usar
                    </span>
                  </div>
                </div>
              </div>

              {/* Learning Areas Grid - Mobile 2 columns, scrollable feel */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 mb-6 md:mb-8">
                {learningAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-background/70 rounded-lg md:rounded-xl p-2.5 md:p-4 text-center"
                  >
                    <area.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-1.5 md:mb-2" />
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground leading-tight">
                      {area.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Value Proposition - Mobile compact */}
              <div className="bg-secondary/50 rounded-xl md:rounded-2xl p-4 md:p-5 text-center">
                <p className="text-foreground font-medium text-sm md:text-base mb-1">
                  Este caderno já teria valor próprio
                </p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Mas você recebe grátis, pelo mesmo preço de{" "}
                  <span className="text-primary font-bold">R$ 14,90</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA - Mobile full width */}
          <div className="text-center">
            <Button
              variant="ctaSecondary"
              size="lg"
              onClick={scrollToCta}
              className="group w-full sm:w-auto py-4 px-6 text-sm md:text-base"
            >
              Quero Receber Tudo Isso Agora
            </Button>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3">
              Guia + Caderno de Alfabetização incluído
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
