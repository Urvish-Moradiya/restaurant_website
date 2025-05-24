
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const SeasonalSpotlight = () => {
  const seasonalItems = [
    {
      title: "Autumn Truffle Risotto",
      description: "A rich and creamy risotto infused with seasonal black truffles, wild mushrooms, and aged parmesan. Our chef's signature dish celebrates the earthy flavors of fall with ingredients sourced from local forests.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop",
      tags: ["Autumn Harvest", "Chef's Special", "Vegetarian"]
    },
    {
      title: "Summer Berry Pavlova",
      description: "Light and elegant meringue topped with fresh summer berries, vanilla-infused cream, and a delicate mint garnish. The perfect balance of sweet and tart flavors to complement our warm summer evenings.",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600&auto=format&fit=crop",
      tags: ["Summer Refreshing", "Dessert", "Signature"]
    },
    {
      title: "Winter Spiced Duck",
      description: "Pan-seared duck breast with a warming five-spice glaze, served with roasted winter vegetables and a port wine reduction. A luxurious comfort dish perfect for the colder months.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
      tags: ["Winter Warmth", "Chef's Special", "Signature"]
    },
    {
      title: "Spring Pea & Mint Soup",
      description: "Vibrant and refreshing soup capturing the essence of spring with freshly harvested peas, mint from our garden, and a touch of crème fraîche. Served with house-made sourdough croutons.",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop",
      tags: ["Spring Fresh", "Vegetarian", "Light"]
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-charcoal mb-6">
            Seasonal Spotlight
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Discover our limited-time culinary creations that celebrate the finest seasonal ingredients,
            expertly crafted to offer new and exciting flavors throughout the year.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {seasonalItems.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-gold/20 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-playfair font-bold text-burgundy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/80 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gold/10 text-gold/90 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 border border-gold text-burgundy hover:bg-gold/20" />
            <CarouselNext className="right-0 border border-gold text-burgundy hover:bg-gold/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SeasonalSpotlight;
