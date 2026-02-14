import { Leaf, Armchair, BadgeDollarSign, Smile } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source the finest local and organic ingredients to craft every dish with love.",
  },
  {
    icon: Armchair,
    title: "Cozy Ambience",
    description: "A warm and inviting space designed for comfort, conversation, and connection.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Prices",
    description: "Premium quality food at prices that keep you coming back for more.",
  },
  {
    icon: Smile,
    title: "Friendly Service",
    description: "Our team treats every guest like family — fast, warm, and attentive.",
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">
          Why Choose <span className="text-gradient">Us</span>
        </h2>
        <p className="section-subtitle">
          Every detail at Gritik Food Point is crafted to bring you the perfect cafe experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`cafe-card p-8 text-center group cursor-default ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
