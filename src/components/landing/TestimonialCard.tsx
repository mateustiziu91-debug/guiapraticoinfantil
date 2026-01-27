import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  location?: string;
}

const TestimonialCard = ({ name, text, location }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-border/30">
      <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4 star-rating">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
        ))}
      </div>
      <p className="text-foreground text-sm md:text-base mb-4 md:mb-5 leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-2.5 md:gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold text-sm md:text-base">{name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm md:text-base">{name}</p>
          {location && (
            <p className="text-muted-foreground text-xs md:text-sm">{location}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
