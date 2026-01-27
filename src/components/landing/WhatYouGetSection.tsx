import { FileText, Printer, Zap, Baby, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: FileText,
    title: "Guia Digital em PDF",
    description: "Formato prático para ler no celular, tablet ou computador",
  },
  {
    icon: Download,
    title: "Atividades Prontas",
    description: "Só abrir, escolher e aplicar. Sem complicação.",
  },
  {
    icon: Printer,
    title: "Pode Imprimir",
    description: "Imprima quantas vezes quiser para usar com seu filho",
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    description: "Receba no seu e-mail logo após a confirmação do pagamento",
  },
  {
    icon: Baby,
    title: "Para 3 a 5 Anos",
    description: "Atividades pensadas especificamente para essa faixa etária",
  },
];

const WhatYouGetSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToCta = () => {
    const ctaElement = document.getElementById("cta-principal");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              O que você recebe
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Tudo o que está incluído no guia
            </h2>
            <p className="text-muted-foreground text-lg">
              Por apenas <span className="text-primary font-bold">R$ 14,90</span>
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border/50 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              variant="ctaSecondary"
              size="lg"
              onClick={scrollToCta}
              className="group"
            >
              Quero Receber Meu Guia Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
