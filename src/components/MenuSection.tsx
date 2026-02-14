import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import menuCoffee from "@/assets/menu-coffee.jpg";
import menuSnack from "@/assets/menu-snack.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import menuFastfood from "@/assets/menu-fastfood.jpg";

const categories = ["All", "Coffee", "Snacks", "Desserts", "Fast Food"] as const;

const menuItems = [
  { name: "Classic Latte", desc: "Smooth espresso with steamed milk", price: "₹149", category: "Coffee", image: menuCoffee },
  { name: "Caramel Macchiato", desc: "Rich caramel with velvety foam", price: "₹179", category: "Coffee", image: menuCoffee },
  { name: "Veggie Club Sandwich", desc: "Fresh veggies with house sauce", price: "₹199", category: "Snacks", image: menuSnack },
  { name: "Paneer Tikka Wrap", desc: "Spiced paneer in a warm tortilla", price: "₹229", category: "Snacks", image: menuSnack },
  { name: "Chocolate Lava Cake", desc: "Warm gooey chocolate indulgence", price: "₹249", category: "Desserts", image: menuDessert },
  { name: "Caramel Cheesecake", desc: "Creamy cheesecake with caramel drizzle", price: "₹269", category: "Desserts", image: menuDessert },
  { name: "Classic Smash Burger", desc: "Double patty with melted cheese", price: "₹299", category: "Fast Food", image: menuFastfood },
  { name: "Loaded Fries", desc: "Crispy fries with cheese & jalapeños", price: "₹179", category: "Fast Food", image: menuFastfood },
];

const MenuSection = () => {
  const [active, setActive] = useState<string>("All");
  const { ref, isVisible } = useScrollAnimation();
  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">
          Our <span className="text-gradient">Menu</span>
        </h2>
        <p className="section-subtitle">Crafted with love, served with warmth.</p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className={`cafe-card group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                <p className="text-accent font-bold text-lg mt-3">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
