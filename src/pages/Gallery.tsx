
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food Artistry' },
    { id: 'interior', name: 'Interior Design' },
    { id: 'events', name: 'Special Events' },
    { id: 'kitchen', name: 'Inside Kitchen' }
  ];

  const images = [
    // Food Images
    {
      url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
      category: "food",
      caption: "Seared Tuna Tartare - Chef's Special"
    },
    {
      url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop",
      category: "food",
      caption: "Lobster Thermidor - Signature Dish"
    },
    {
      url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
      category: "food",
      caption: "Pan-Seared Salmon with Herbs"
    },
    {
      url: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop",
      category: "food",
      caption: "Seared Scallops Presentation"
    },
    {
      url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop",
      category: "food",
      caption: "Chocolate Soufflé Perfection"
    },
    {
      url: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=800&auto=format&fit=crop",
      category: "food",
      caption: "Burrata & Prosciutto Plating"
    },
    {
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=800&auto=format&fit=crop",
      category: "food",
      caption: "Truffle Arancini Artistry"
    },
    {
      url: "https://images.unsplash.com/photo-1574781330855-d0db6cc7e3d7?q=80&w=800&auto=format&fit=crop",
      category: "food",
      caption: "Herb-Crusted Lamb Rack"
    },

    // Interior Images
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800&auto=format&fit=crop",
      category: "interior",
      caption: "Main Dining Room - Evening Ambiance"
    },
    {
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800&auto=format&fit=crop",
      category: "interior",
      caption: "Intimate Dining Corner"
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      category: "interior",
      caption: "Private Dining Suite"
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
      category: "interior",
      caption: "Wine Cellar Collection"
    },
    {
      url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=800&auto=format&fit=crop",
      category: "interior",
      caption: "Bar Counter Design"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
      category: "interior",
      caption: "Elegant Table Setting"
    },

    // Events Images
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop",
      category: "events",
      caption: "Wine & Jazz Night - October 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop",
      category: "events",
      caption: "Chef's Table Event - Summer Series"
    },
    {
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
      category: "events",
      caption: "Anniversary Celebration Dinner"
    },
    {
      url: "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=800&auto=format&fit=crop",
      category: "events",
      caption: "Corporate Event Catering"
    },
    {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
      category: "events",
      caption: "Wedding Reception Setup"
    },

    // Kitchen Images
    {
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
      category: "kitchen",
      caption: "Head Chef in Action"
    },
    {
      url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
      category: "kitchen",
      caption: "Professional Kitchen Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      category: "kitchen",
      caption: "Culinary Team Preparation"
    },
    {
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=800&auto=format&fit=crop",
      category: "kitchen",
      caption: "Plating Techniques Masterclass"
    },
    {
      url: "https://images.unsplash.com/photo-1606787366850-de6ba128da6c?q=80&w=800&auto=format&fit=crop",
      category: "kitchen",
      caption: "Fresh Ingredients Selection"
    },
    {
      url: "https://images.unsplash.com/photo-1588737399840-45ac0d4dfec9?q=80&w=800&auto=format&fit=crop",
      category: "kitchen",
      caption: "Sous Chef Knife Skills"
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-cream mb-6">
            A Visual Feast
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Feast your eyes on the moments that define our space, our food, and our memories. 
            Every image captures the essence of culinary artistry and elegant hospitality.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-cream border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-burgundy text-cream"
                    : "border-burgundy text-burgundy hover:bg-burgundy hover:text-cream"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-cream font-playfair text-lg font-semibold mb-2">
                      {image.caption}
                    </p>
                    <div className="w-12 h-0.5 bg-gold"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-cream mb-6">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream p-8 rounded-lg hover-scale">
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">
                Wine & Jazz Night
              </h3>
              <p className="text-charcoal/70 mb-4">
                Join us for an evening of smooth jazz and exceptional wine pairings
              </p>
              <p className="text-burgundy font-semibold">Every Friday, 8:00 PM</p>
            </div>
            
            <div className="bg-cream p-8 rounded-lg hover-scale">
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">
                Chef's Table Experience
              </h3>
              <p className="text-charcoal/70 mb-4">
                An intimate culinary journey with our head chef
              </p>
              <p className="text-burgundy font-semibold">Monthly - Limited Seating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
