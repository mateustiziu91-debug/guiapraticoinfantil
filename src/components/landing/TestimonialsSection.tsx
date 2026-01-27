import TestimonialCard from "./TestimonialCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Camila R.",
    location: "São Paulo, SP",
    text: "Finalmente consegui tirar meu filho do tablet sem drama. As atividades são simples e ele adora. Nossa rotina melhorou muito.",
  },
  {
    name: "Fernanda M.",
    location: "Belo Horizonte, MG",
    text: "Eu não tinha ideia do que fazer com minha filha de 4 anos. Agora tenho atividades prontas que ela pede para fazer todo dia.",
  },
  {
    name: "Juliana S.",
    location: "Rio de Janeiro, RJ",
    text: "Como mãe solo, não tenho muito tempo. Esse guia me salvou. Atividades rápidas, fáceis e meu filho aprende brincando.",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-light py-12 md:py-28 px-4">
      <div className="container max-w-4xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-8 md:mb-14">
            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Depoimentos reais
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
              O que outros pais estão dizendo
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Famílias reais, resultados reais
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
