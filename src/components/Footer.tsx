import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream/80 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-cream mb-4">Gritik Food Point</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              A cozy haven for food lovers. Handcrafted dishes, warm ambience, and unforgettable flavors.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-cream/60 text-sm hover:text-caramel transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <h4 className="font-display font-semibold text-cream mb-4">Get in Touch</h4>
            <p className="text-cream/60 text-sm mb-1">123 Baker's Lane, New Delhi</p>
            <p className="text-cream/60 text-sm mb-1">+91 98765 43210</p>
            <p className="text-cream/60 text-sm mb-6">hello@gritikfoodpoint.com</p>

            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-caramel/30 transition-colors duration-300"
                >
                  <Icon size={18} className="text-cream/80" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center">
          <p className="text-cream/40 text-sm">© 2026 Gritik Food Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
