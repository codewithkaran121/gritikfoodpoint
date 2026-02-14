import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Bakery display", span: "row-span-2" },
  { src: gallery2, alt: "Coffee beans", span: "" },
  { src: gallery3, alt: "Cozy corner", span: "" },
  { src: gallery4, alt: "Espresso shot", span: "row-span-2" },
  { src: gallery1, alt: "Pastries", span: "" },
  { src: gallery3, alt: "Cafe ambience", span: "" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">
          Our <span className="text-gradient">Gallery</span>
        </h2>
        <p className="section-subtitle">A glimpse into the warmth and beauty of Gritik Food Point.</p>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
