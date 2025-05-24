
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Reviews' },
    { id: 'food', name: 'Food' },
    { id: 'service', name: 'Service' },
    { id: 'ambiance', name: 'Ambiance' },
    { id: 'occasions', name: 'Occasions' }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      review: "An absolutely extraordinary dining experience! The attention to detail in every dish was remarkable, and the service was impeccable. The duck breast was perfectly cooked and the wine pairing was spot on.",
      rating: 5,
      favoriteDish: "Seared Duck Breast",
      date: "October 2024",
      category: "food",
      photo: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "James Richardson",
      review: "The ambiance at Bella Vista is unmatched. From the moment we walked in, we felt transported to a world of elegance and sophistication. Perfect for our anniversary dinner.",
      rating: 5,
      favoriteDish: "Lobster Thermidor",
      date: "September 2024",
      category: "ambiance",
      photo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Emily Chen",
      review: "Outstanding service from start to finish. Our server was knowledgeable about every dish and wine pairing. They made our special celebration even more memorable.",
      rating: 5,
      favoriteDish: "Wagyu Beef Tenderloin",
      date: "October 2024",
      category: "service",
      photo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Michael Torres",
      review: "Celebrated my promotion here and couldn't have chosen a better place. The private dining room was perfect, and the staff went above and beyond to make the evening special.",
      rating: 5,
      favoriteDish: "Chef's Tasting Menu",
      date: "August 2024",
      category: "occasions",
      photo: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Lisa Park",
      review: "Every course was a work of art. The presentation was beautiful, but more importantly, the flavors were incredible. The chocolate soufflé was the perfect ending to a perfect meal.",
      rating: 5,
      favoriteDish: "Chocolate Soufflé",
      date: "September 2024",
      category: "food",
      photo: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "David Kim",
      review: "The wine selection is exceptional, and our sommelier helped us discover some incredible pairings. The knowledge and passion of the staff really shows.",
      rating: 5,
      favoriteDish: "Wine Pairing Experience",
      date: "October 2024",
      category: "service",
      photo: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=100&auto=format&fit=crop"
    }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-gold' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-burgundy to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-cream mb-6">
            Voices of Our Guests
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Hear from those who have experienced the magic of Bella Vista. 
            Their words inspire us to continue creating exceptional moments.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-cream border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-burgundy text-cream"
                    : "border-burgundy text-burgundy hover:bg-burgundy hover:text-cream"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover-scale animate-fade-in bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-playfair font-semibold text-charcoal">
                        {testimonial.name}
                      </h3>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-charcoal/80 mb-6 leading-relaxed italic">
                    "{testimonial.review}"
                  </blockquote>
                  
                  <div className="border-t border-gold/20 pt-4">
                    <p className="text-sm text-burgundy font-medium mb-1">
                      Favorite Dish: {testimonial.favoriteDish}
                    </p>
                    <p className="text-xs text-charcoal/60">
                      Visited: {testimonial.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-cream mb-6">
            Share Your Experience
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            We love hearing from our guests! Share your Bella Vista experience on social media 
            and tag us to be featured.
          </p>
          
          <div className="flex justify-center space-x-6">
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-charcoal"
            >
              @bellavista_restaurant
            </Button>
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-charcoal"
            >
              #BellaVistaExperience
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
