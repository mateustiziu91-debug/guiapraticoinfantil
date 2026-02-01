import TestimonialCard from "./TestimonialCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Patrícia L.",
    location: "Curitiba, PR",
    text: "Comprei achando que seria mais um PDF jogado fora. Me surpreendi. Simples, prático e meu filho de 3 anos ama.",
  },
  {
    name: "Marcos A.",
    location: "Brasília, DF",
    text: "Como pai, me sentia perdido. Agora tenho atividades prontas para fazer com minha filha nos fins de semana. Valeu cada centavo.",
  },
];

const FinalTestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-alt py-8 md:py-20 px-3 sm:px-4">
      <div className="container max-w-3xl">
        <div 
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
              Mais histórias de pais como você
            </h2>
          </div>
          
          <div className="grid gap-3 md:grid-cols-2 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalTestimonialsSection;
