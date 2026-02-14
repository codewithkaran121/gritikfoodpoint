import aboutImg from "@/assets/about-cafe.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`overflow-hidden rounded-3xl shadow-2xl ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <img
              src={aboutImg}
              alt="Inside Gritik Food Point"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className={isVisible ? "animate-slide-in-right" : "opacity-0"}>
            <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
            <h2 className="section-title !text-left mb-6">
              A Place Where <br />
              <span className="text-gradient italic">Flavor Meets Soul</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Born from a love for good food and genuine connection, Gritik Food Point is more than just a cafe — it's a feeling. 
              From our handcrafted lattes to our freshly baked treats, every item on our menu tells a story of passion and care.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're here for a quick coffee, a cozy meal with friends, or a quiet moment to yourself, 
              we promise an experience that warms your heart as much as your taste buds.
            </p>
            <a
              href="#menu"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
            >
              Discover Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
