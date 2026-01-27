import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToCta = () => {
    const ctaElement = document.getElementById("cta-principal");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
      <div className="container max-w-4xl text-center">
        <div className="fade-in-up">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            Para crianças de 3 a 5 anos
          </span>
        </div>
        
        <h1 className="fade-in-up fade-in-up-delay-1 text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 text-balance">
          Seu filho merece mais do que uma tela para se divertir e aprender
        </h1>
        
        <p className="fade-in-up fade-in-up-delay-2 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Descubra atividades simples e prontas para fazer em casa, sem precisar de experiência ou muito tempo. Seu filho mais engajado, você mais tranquilo.
        </p>
        
        <div className="fade-in-up fade-in-up-delay-3 flex flex-col items-center gap-4">
          <Button
            variant="ctaSecondary"
            size="lg"
            onClick={scrollToCta}
            className="group"
          >
            Quero Conhecer as Atividades
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Acesso imediato após a compra
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
