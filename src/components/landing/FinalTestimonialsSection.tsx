import TestimonialCard from "./TestimonialCard";

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
  return (
    <section className="section-alt py-16 md:py-20 px-4">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Mais histórias de pais como você
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalTestimonialsSection;
