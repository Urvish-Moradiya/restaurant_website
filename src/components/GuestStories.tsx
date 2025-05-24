
import { Star } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const GuestStories = () => {
  const testimonials = [
    {
      name: "Emma & James",
      event: "Anniversary Dinner",
      quote: "Our 10th anniversary dinner at Bella Vista was nothing short of magical. The staff created such a special atmosphere and the tasting menu was divine. A memory we'll cherish forever.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "The Martinez Family",
      event: "Birthday Celebration",
      quote: "We celebrated my father's 70th birthday here and the experience exceeded our expectations. The private dining room was elegant, the food, and the staff made him feel truly special.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Sarah & Friends",
      event: "Girls' Night Out",
      quote: "Our monthly girls' night found its permanent home at Bella Vista. The wine selection is unmatched and the shared plates are perfect for our long conversations and celebrations.",
      image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=600&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "David & Michael",
      event: "Engagement Dinner",
      quote: "We got engaged here and the team went above and beyond to make it perfect. From helping plan the surprise to the complimentary champagne toast, they made us feel like family.",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=600&auto=format&fit=crop",
      rating: 5
    },
  ];

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, index) => (
        <Star key={index} className="h-5 w-5 fill-gold text-gold" />
      ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-burgundy to-charcoal ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gold mb-6">
            Guest Stories
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-cream max-w-3xl mx-auto leading-relaxed">
            Every meal tells a story. Discover memorable moments shared by our guests who have chosen
            Bella Vista to celebrate their special occasions.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="relative h-full border border-gold/20 rounded-lg overflow-hidden shadow-lg bg-white group hover-scale">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} at ${testimonial.event}`} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy/70 to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6 relative z-10 -mt-16 bg-white mx-4 rounded-lg border border-gold/20 shadow-md">
                    <div className="flex items-center mb-4 justify-between">
                      <div>
                        <h3 className="font-playfair font-bold text-charcoal text-xl">
                          {testimonial.name}
                        </h3>
                        <p className="text-gold text-sm">{testimonial.event}</p>
                      </div>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <p className="text-charcoal/80 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
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

export default GuestStories;
