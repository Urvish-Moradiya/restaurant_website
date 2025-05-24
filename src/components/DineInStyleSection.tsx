
const DineInStyleSection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1583148909639-d3f7dcd103f0",
      alt: "Elegant dining room"
    },
    {
      url: "https://images.unsplash.com/photo-1716835540586-58eb6242e95f",
      alt: "Private dining area"
    },
    {
      url: "https://images.unsplash.com/photo-1655132105938-6a65dee23189",
      alt: "Bar area"
    },
    {
      url: "https://images.unsplash.com/photo-1649412212173-1d0f6b5f8f1c",
      alt: "Outdoor terrace"
    }
  ];

  return (
    <section className="py-20 bg-burgundy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Dine in Style
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Crafted with elegance in mind, every corner reflects our passion for hospitality. 
            From intimate dinners to grand celebrations, our space adapts to create the perfect ambiance for your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-scale border border-gold/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-cream font-playfair text-lg font-semibold">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DineInStyleSection;
