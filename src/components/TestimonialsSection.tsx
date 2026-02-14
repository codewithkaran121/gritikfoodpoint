import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The coziest cafe I've ever been to! The latte art is stunning and the cheesecake is to die for. Absolutely love this place!",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rahul Mehta",
    text: "Gritik Food Point has become my go-to spot for both work and hangouts. Amazing ambience, friendly staff, and the food is always fresh!",
    rating: 5,
    initials: "RM",
  },
  {
    name: "Ananya Gupta",
    text: "The best smash burgers in town, hands down. Great vibe and very affordable prices for this quality. Highly recommend!",
    rating: 5,
    initials: "AG",
  },
  {
    name: "Vikram Singh",
    text: "Perfect place for a weekend brunch. The attention to detail in every dish shows real passion. We keep coming back!",
    rating: 4,
    initials: "VS",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">
          What Our <span className="text-gradient">Guests Say</span>
        </h2>
        <p className="section-subtitle">Real stories from our beloved community.</p>

        <div className={`mt-12 relative ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/50 min-h-[280px] flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-6">
              <span className="text-accent font-display text-xl font-bold">
                {testimonials[current].initials}
              </span>
            </div>

            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < testimonials[current].rating ? "text-caramel fill-caramel" : "text-border"}
                />
              ))}
            </div>

            <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl italic font-body mb-6">
              "{testimonials[current].text}"
            </p>

            <p className="font-display font-semibold text-foreground">{testimonials[current].name}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
