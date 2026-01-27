import { CheckCircle, Shield, Clock, RefreshCw, Lock, CreditCard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const objections = [
  {
    icon: CheckCircle,
    title: "Produto simples e direto",
    description: "Sem enrolação. Você abre e já pode usar.",
  },
  {
    icon: Shield,
    title: "Funciona para qualquer pai",
    description: "Não precisa de experiência ou formação especial.",
  },
  {
    icon: Clock,
    title: "Use no seu ritmo",
    description: "Sem pressão. Aplique quando e como puder.",
  },
  {
    icon: RefreshCw,
    title: "Garantia de 7 dias",
    description: "Se não gostar, devolvemos seu dinheiro. Sem perguntas.",
  },
  {
    icon: Lock,
    title: "Compra 100% segura",
    description: "Pagamento processado por plataforma confiável.",
  },
  {
    icon: CreditCard,
    title: "Pague como preferir",
    description: "Cartão de crédito, débito ou Pix.",
  },
];

const ObjectionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              Sem riscos
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Você pode confiar
            </h2>
            <p className="text-muted-foreground text-lg">
              Sua segurança é nossa prioridade
            </p>
          </div>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-lg">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {objections.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
