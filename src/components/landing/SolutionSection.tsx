import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Atividades prontas para usar",
  "Não precisa de materiais caros",
  "Fácil de aplicar, mesmo sem experiência",
  "Pensado para a rotina real de pais ocupados",
  "Resultados desde o primeiro dia",
];

const SolutionSection = () => {
  const scrollToCta = () => {
    const ctaElement = document.getElementById("cta-principal");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="section-alt py-16 md:py-24 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
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
        
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                Com este guia, você vai ter:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-primary rounded-full p-1 shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-secondary/50 rounded-2xl p-6 text-center">
              <div className="text-6xl mb-4">📚</div>
              <h4 className="font-bold text-foreground text-lg mb-2">
                Guia Digital em PDF
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Baixe, imprima e use quando quiser. Acesso vitalício.
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
    </section>
  );
};

export default SolutionSection;
