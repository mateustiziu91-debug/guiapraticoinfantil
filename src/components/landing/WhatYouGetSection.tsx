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
    <section className="py-12 md:py-28 px-4 bg-background">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-8 md:mb-14">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              O que você recebe
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
              Tudo o que está incluído
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Por apenas <span className="text-primary font-bold">R$ 14,90</span> — inclui brinde exclusivo
            </p>
          </div>
          
          {/* Mobile: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border border-border/50 text-center"
              >
                <div className="bg-secondary w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-xs sm:text-sm md:text-base mb-1 md:mb-2 leading-tight">{feature.title}</h3>
                <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm leading-snug">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              variant="ctaSecondary"
              size="lg"
              onClick={scrollToCta}
              className="group w-full sm:w-auto py-3 md:py-4 text-sm md:text-base"
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
