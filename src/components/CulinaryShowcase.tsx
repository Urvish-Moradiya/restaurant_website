
import { Check } from "lucide-react";

const CulinaryShowcase = () => {
  const features = [
    {
      title: "Artisanal Cuisine",
      description: "Every dish is crafted with precision using the finest ingredients sourced from local producers"
    },
    {
      title: "Elegant Atmosphere",
      description: "Immerse yourself in a refined dining environment designed for memorable experiences"
    },
    {
      title: "Expert Sommelier",
      description: "Our wine selection is curated to perfectly complement every dish on our menu"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-burgundy to-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gold mb-6">
              Elevating Fine Dining to an Art Form
            </h2>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-cream/90 mb-8 leading-relaxed">
              At Bella Vista, we believe dining is more than just a meal—it's an experience that engages all senses. Our culinary philosophy combines traditional techniques with innovative approaches to create unforgettable moments.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-charcoal" />
                  </span>
                  <div>
                    <h3 className="text-gold font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-cream/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative overflow-hidden rounded-lg h-64 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" 
                  alt="Fine dining experience" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="relative overflow-hidden rounded-lg h-48 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=500&auto=format&fit=crop" 
                  alt="Chef preparing dish" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="relative overflow-hidden rounded-lg h-48 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=500&auto=format&fit=crop" 
                  alt="Restaurant ambiance" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gold rounded-full flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="text-center">
                <p className="font-playfair font-bold text-2xl text-charcoal">15+</p>
                <p className="text-xs text-charcoal/80">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryShowcase;
