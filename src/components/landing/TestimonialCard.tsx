import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  location?: string;
}

const TestimonialCard = ({ name, text, location }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card p-6 rounded-2xl border border-border/30">
      <div className="flex gap-1 mb-3 star-rating">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-foreground mb-4 text-sm leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold text-sm">{name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          {location && (
            <p className="text-muted-foreground text-xs">{location}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
