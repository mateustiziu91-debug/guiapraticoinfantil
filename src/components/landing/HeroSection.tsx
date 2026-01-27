import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import parentChildImage from "@/assets/parent-child-activity.jpg";

const HeroSection = () => {
  const scrollToCta = () => {
    const ctaElement = document.getElementById("cta-principal");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="fade-in-up">
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                Para crianças de 3 a 5 anos
              </span>
            </div>
            
            <h1 className="fade-in-up fade-in-up-delay-1 text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6 text-balance">
              Seu filho merece mais do que uma tela para se divertir e aprender
            </h1>
            
            <p className="fade-in-up fade-in-up-delay-2 text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-balance">
              Descubra atividades simples e prontas para fazer em casa, sem precisar de experiência ou muito tempo. Seu filho mais engajado, você mais tranquilo.
            </p>
            
            <div className="fade-in-up fade-in-up-delay-3 flex flex-col items-center lg:items-start gap-4">
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
                Acesso imediato • Apenas R$ 14,90
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-up order-1 lg:order-2">
            <div className="image-card relative">
              <img 
                src={parentChildImage} 
                alt="Mãe e filho fazendo atividade educativa juntos" 
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-foreground/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
