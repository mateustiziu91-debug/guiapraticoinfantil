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
    <section className="py-10 md:py-20 px-3 sm:px-4 bg-background border-t border-border/50">
      <div className="container max-w-2xl text-center">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-foreground font-medium mb-1.5 md:mb-2 text-base md:text-lg">
            Não deixe para depois.
          </p>
          <p className="text-muted-foreground mb-5 md:mb-6 text-sm md:text-base">
            Seu filho merece esse cuidado — e você também.
          </p>
          
          <Button
            variant="ctaSecondary"
            size="lg"
            onClick={scrollToCta}
            className="group w-full max-w-md py-5 px-6 text-sm md:text-base min-h-[56px] touch-manipulation"
          >
            <ArrowUp className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            Quero Menos Tela e Mais Aprendizado
          </Button>

          <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-4">
            <span className="text-primary font-semibold">R$ 14,90</span> • Guia + Brinde • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
