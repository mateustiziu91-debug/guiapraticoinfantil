import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, RefreshCw, CreditCard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CHECKOUT_URL = "https://pay.cakto.com.br/3b8fhuv_741916";

const MainCtaSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cta-principal" className="py-12 md:py-28 px-4 bg-background">
      <div className="container max-w-2xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="bg-card rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 border-2 border-primary shadow-2xl text-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
                Oferta Especial
              </span>
              
              <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4 leading-tight">
                Comece hoje a transformar a rotina do seu filho
              </h2>
              
              <p className="text-muted-foreground mb-4 text-sm md:text-lg leading-relaxed">
                Menos telas, mais conexão. Atividades prontas para você usar agora.
              </p>

              {/* What's included - Mobile optimized */}
              <div className="bg-secondary/50 rounded-xl p-3 md:p-4 mb-4 md:mb-6 text-left">
                <p className="text-xs md:text-sm font-semibold text-foreground mb-2">Você recebe:</p>
                <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1.5" />
                    <span>Guia Principal com atividades educativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-1.5" />
                    <span><span className="text-accent font-medium">Brinde:</span> Caderno de Alfabetização (+150 atividades)</span>
                  </li>
                </ul>
              </div>

              {/* Price Display - Mobile prominent */}
              <div className="price-highlight rounded-xl md:rounded-2xl p-4 md:p-6 mb-5 md:mb-8">
                <p className="text-muted-foreground text-xs md:text-sm mb-1 md:mb-2">Tudo isso por apenas</p>
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2">
                  <span className="text-muted-foreground text-base md:text-xl price-original">R$ 47,00</span>
                  <span className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary">R$ 14,90</span>
                </div>
                <p className="text-primary font-semibold text-xs">
                  Menos que um lanche — transforma a rotina da família
                </p>
              </div>
              
              {/* CTA Button - Extra large on mobile for thumb tapping */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-5 md:mb-8"
              >
                <Button
                  variant="cta"
                  size="cta"
                  className="w-full text-base sm:text-lg md:text-xl py-5 md:py-6 shadow-lg min-h-[56px] md:min-h-[72px] touch-manipulation"
                >
                  Quero Ajudar Meu Filho Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              
              {/* Trust badges - 2x2 grid on mobile, 4 columns on desktop */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 text-muted-foreground">
                <div className="flex flex-col items-center gap-1.5 md:gap-2 p-2.5 md:p-3 bg-background/50 rounded-lg md:rounded-xl">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-center text-[10px] md:text-xs font-medium leading-tight">Compra Segura</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 md:gap-2 p-2.5 md:p-3 bg-background/50 rounded-lg md:rounded-xl">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-center text-[10px] md:text-xs font-medium leading-tight">Acesso Imediato</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 md:gap-2 p-2.5 md:p-3 bg-background/50 rounded-lg md:rounded-xl">
                  <RefreshCw className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-center text-[10px] md:text-xs font-medium leading-tight">7 Dias Garantia</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 md:gap-2 p-2.5 md:p-3 bg-background/50 rounded-lg md:rounded-xl">
                  <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-center text-[10px] md:text-xs font-medium leading-tight">Pix ou Cartão</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCtaSection;
