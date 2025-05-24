
const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Family Traditions",
      description: "Recipes passed down through generations, creating dishes that taste like home but feel like luxury.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Fresh Daily",
      description: "We source ingredients every morning from local farmers, ensuring the freshest flavors on your plate.",
      icon: "🌱"
    },
    {
      title: "Made to Order",
      description: "Every dish is prepared fresh when you order it. No pre-made meals, just authentic cooking with care.",
      icon: "👨‍🍳"
    },
    {
      title: "Warm Welcome",
      description: "Our team treats every guest like family. From the moment you walk in, you'll feel at home.",
      icon: "🤗"
    }
  ];

  return (
    <section className="py-20 bg-cream/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Why Families Choose Us
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            More than just a restaurant, we're a place where memories are made, 
            celebrations happen, and every meal feels special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:animate-bounce">
                {feature.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-burgundy mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-burgundy/10 border border-burgundy/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-burgundy mb-4">
              "This place feels like coming home to grandma's kitchen, 
              but with the elegance of fine dining."
            </h3>
            <p className="text-charcoal/70 italic">
              - Sarah M., Regular Guest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
