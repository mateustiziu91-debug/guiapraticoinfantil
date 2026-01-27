import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  location?: string;
}

const TestimonialCard = ({ name, text, location }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card p-6 rounded-2xl border border-border/30 hover:shadow-lg transition-shadow">
      <div className="flex gap-1 mb-4 star-rating">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-foreground mb-5 leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold">{name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          {location && (
            <p className="text-muted-foreground text-sm">{location}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
