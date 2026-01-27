import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCtaSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToCta = () => {
    const ctaElement = document.getElementById("cta-principal");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-background border-t border-border/50">
      <div className="container max-w-2xl text-center">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-foreground font-medium mb-2 text-lg">
            Não deixe para depois.
          </p>
          <p className="text-muted-foreground mb-6">
            Seu filho merece esse cuidado — e você também.
          </p>
          
          <Button
            variant="ctaSecondary"
            size="lg"
            onClick={scrollToCta}
            className="group"
          >
            <ArrowUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            Quero Menos Tela e Mais Aprendizado
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            <span className="text-primary font-semibold">R$ 14,90</span> • Guia + Caderno de Alfabetização • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
