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
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container max-w-5xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              A Solução
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Um guia prático com atividades educativas que funcionam de verdade
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Criado especialmente para pais que querem menos telas e mais momentos de qualidade com seus filhos de 3 a 5 anos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="image-card order-2 lg:order-1">
              <img 
                src={fatherChildImage} 
                alt="Pai brincando com filho com blocos educativos" 
                className="w-full h-auto rounded-3xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Com este guia, você vai ter:
                </h3>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="bg-primary rounded-full p-1 shrink-0">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    Guia Digital em PDF • Baixe, imprima e use quando quiser
                  </p>
                  <Button
                    variant="ctaSecondary"
                    size="lg"
                    onClick={scrollToCta}
                    className="w-full"
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
