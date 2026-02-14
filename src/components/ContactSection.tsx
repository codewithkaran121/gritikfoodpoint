import { MapPin, Clock, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Visit <span className="text-gradient">Us</span>
          </h2>
          <p className="section-subtitle">We'd love to see you. Drop by anytime!</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-10 items-start ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground text-sm">123 Baker's Lane, Cafe District<br />New Delhi, India 110001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Opening Hours</h3>
                <p className="text-muted-foreground text-sm">Mon – Fri: 8:00 AM – 10:00 PM<br />Sat – Sun: 9:00 AM – 11:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">+91 98765 43210</p>
              </div>
            </div>

            <a
              href="tel:+919876543210"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg mt-4"
            >
              Book a Table
            </a>
          </div>

          {/* Map placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 h-[350px] md:h-[400px] bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-accent/40 mx-auto mb-4" />
              <p className="text-muted-foreground font-medium">Interactive Map</p>
              <p className="text-muted-foreground/60 text-sm mt-1">123 Baker's Lane, New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
