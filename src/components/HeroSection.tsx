import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Cozy cafe" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-cream/80 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Welcome to
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Where Every Bite <br />
          <span className="text-caramel italic">Feels Like Home</span>
        </h1>
        <p className="text-cream/80 text-base md:text-lg max-w-xl mx-auto mb-10 font-body animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Handcrafted flavors, freshly brewed warmth, and a cozy corner waiting just for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <a
            href="#menu"
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Explore Menu
          </a>
          <a
            href="#about"
            className="border-2 border-cream/40 text-cream px-8 py-3.5 rounded-full font-semibold text-base hover:bg-cream/10 transition-all duration-300"
          >
            Visit Our Cafe
          </a>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L0 60C240 100 480 120 720 100C960 80 1200 40 1440 60L1440 120H0Z" fill="hsl(35, 33%, 96%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
