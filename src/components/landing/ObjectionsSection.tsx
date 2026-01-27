import { CheckCircle, Shield, Clock, RefreshCw, Lock } from "lucide-react";

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
];

const ObjectionsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Você pode confiar
          </h2>
          <p className="text-muted-foreground text-lg">
            Sua segurança é nossa prioridade
          </p>
        </div>
        
        <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {objections.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg shrink-0">
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
    </section>
  );
};

export default ObjectionsSection;
