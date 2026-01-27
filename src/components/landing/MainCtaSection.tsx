import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, RefreshCw } from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/3b8fhuv_741916";

const MainCtaSection = () => {
  return (
    <section id="cta-principal" className="py-16 md:py-24 px-4 bg-background">
      <div className="container max-w-2xl">
        <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-2xl text-center relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold mb-6">
              Oferta Especial
            </span>
            
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
              Comece hoje a transformar a rotina do seu filho
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Menos telas, mais conexão. Atividades prontas para você usar agora mesmo.
            </p>
            
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="cta"
                size="cta"
                className="w-full text-lg md:text-xl mb-6"
              >
                Quero Ajudar Meu Filho Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-primary" />
                <span>7 Dias de Garantia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCtaSection;
