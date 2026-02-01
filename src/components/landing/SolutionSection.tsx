import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import fatherChildImage from "@/assets/father-child-play.jpg";

const benefits = [
  "Atividades prontas para usar",
  "Não precisa de materiais caros",
  "Fácil de aplicar, mesmo sem experiência",
  "Pensado para a rotina real de pais ocupados",
  "Resultados desde o primeiro dia",
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToCta = () => {
    const ctaElement = document.getElementById("cta-principal");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-10 md:py-28 px-3 sm:px-4 bg-background">
      <div className="container max-w-5xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-8 md:mb-14">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              A Solução
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 text-balance leading-tight">
              Um guia prático com atividades educativas que funcionam de verdade
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              Criado para pais que querem menos telas e mais momentos de qualidade com seus filhos de 3 a 5 anos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image - Smaller on mobile */}
            <div className="image-card order-2 lg:order-1 max-w-sm mx-auto lg:max-w-none">
              <img 
                src={fatherChildImage} 
                alt="Pai brincando com filho com blocos educativos" 
                className="w-full h-auto rounded-2xl md:rounded-3xl"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-card rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 border border-border/50 shadow-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  Com este guia, você vai ter:
                </h3>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 md:gap-3">
                      <div className="bg-primary rounded-full p-0.5 md:p-1 shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium text-sm md:text-base leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-secondary/50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                    Guia Digital em PDF • Baixe e use quando quiser
                  </p>
                  <Button
                    variant="ctaSecondary"
                    size="lg"
                    onClick={scrollToCta}
                    className="w-full py-4 md:py-4 text-sm md:text-base min-h-[52px] touch-manipulation"
                  >
                    Quero Ter Acesso Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
