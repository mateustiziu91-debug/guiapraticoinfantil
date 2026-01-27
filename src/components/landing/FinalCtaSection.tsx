import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const FinalCtaSection = () => {
  const scrollToCta = () => {
    const ctaElement = document.getElementById("cta-principal");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-background border-t border-border/50">
      <div className="container max-w-2xl text-center">
        <p className="text-foreground font-medium mb-4">
          Não deixe para depois. Seu filho merece esse cuidado.
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
      </div>
    </section>
  );
};

export default FinalCtaSection;
