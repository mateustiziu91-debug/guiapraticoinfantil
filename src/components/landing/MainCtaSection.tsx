import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, RefreshCw, CreditCard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CHECKOUT_URL = "https://pay.cakto.com.br/3b8fhuv_741916";

const MainCtaSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cta-principal" className="py-20 md:py-28 px-4 bg-background">
      <div className="container max-w-2xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-primary shadow-2xl text-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <span className="inline-block bg-accent text-accent-foreground px-5 py-1.5 rounded-full text-sm font-bold mb-6">
                Oferta Especial por Tempo Limitado
              </span>
              
              <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
                Comece hoje a transformar a rotina do seu filho
              </h2>
              
              <p className="text-muted-foreground mb-6 text-lg">
                Menos telas, mais conexão. Atividades prontas para você usar agora mesmo.
              </p>

              {/* Price Display */}
              <div className="price-highlight rounded-2xl p-6 mb-8">
                <p className="text-muted-foreground text-sm mb-2">Investimento único</p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-muted-foreground text-xl price-original">R$ 47,00</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-primary">R$ 14,90</span>
                </div>
                <p className="text-primary font-semibold text-sm">
                  Menos que um lanche — e transforma a rotina da sua família
                </p>
              </div>
              
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="cta"
                  size="cta"
                  className="w-full text-lg md:text-xl mb-8 shadow-lg"
                >
                  Quero Ajudar Meu Filho Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div className="flex flex-col items-center gap-2 p-3 bg-background/50 rounded-xl">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-center text-xs font-medium">Compra 100% Segura</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 bg-background/50 rounded-xl">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-center text-xs font-medium">Acesso Imediato</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 bg-background/50 rounded-xl">
                  <RefreshCw className="w-5 h-5 text-primary" />
                  <span className="text-center text-xs font-medium">7 Dias de Garantia</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 bg-background/50 rounded-xl">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span className="text-center text-xs font-medium">Pix ou Cartão</span>
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
