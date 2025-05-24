
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
    url: "https://images.unsplash.com/photo-1623188509154-fec43b95bf21?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Seared Scallops - Chef's Special"
  },
  {
    url: "https://images.unsplash.com/photo-1700483540089-63307e6dbca1?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Burrata & Prosciutto - Vegetarian"
  },
  {
    url: "https://images.unsplash.com/photo-1722012988794-196d72bd12aa?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Tuna Tartare - Raw, Gluten-Free"
  },
  {
    url: "https://images.unsplash.com/photo-1647483707950-92c27bb437f5?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Truffle Arancini - Vegetarian, Popular"
  },
  {
    url: "https://images.unsplash.com/photo-1584776252066-7ad031913ca0?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Oysters Rockefeller - Classic"
  },
  {
    url: "https://images.unsplash.com/photo-1726514733355-02fe48ae6795?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Beet Carpaccio - Vegan Option, Seasonal"
  },
  {
    url: "https://images.unsplash.com/photo-1570572169431-799a25652c0a?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Wagyu Beef Tenderloin - Premium, Chef's Special"
  },
  {
    url: "https://images.unsplash.com/photo-1588791174744-7e9bf4378277?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Lobster Thermidor - Signature"
  },
  {
    url: "https://images.unsplash.com/photo-1634564375126-ea3ed65a166b?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Herb-Crusted Lamb - Gluten-Free"
  },
  {
    url: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Pan-Seared Salmon - Heart Healthy, Popular"
  },
  {
    url: "https://images.unsplash.com/photo-1644809649533-fcadfad3bfe5?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Osso Buco - Traditional, Slow Cooked"
  },
  {
    url: "https://images.unsplash.com/photo-1617307715850-c6965f2aead4?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Mushroom Wellington - Vegan, Seasonal"
  },
  {
    url: "https://images.unsplash.com/photo-1616669944447-d65d41a222bd?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Duck Confit - French Classic"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1719530453995-f5eb382ae179?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Grilled Octopus - Mediterranean, Gluten-Free"
  },
  {
    url: "https://images.unsplash.com/photo-1608157239853-c7abcb0ed9d6?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Chocolate Soufflé - Seasonal Special"
  },
  {
    url: "https://images.unsplash.com/photo-1630151317982-42427bad4303?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Lemon Tart - Gluten-Free Option"
  },
  {
    url: "https://images.unsplash.com/photo-1631206753348-db44968fd440?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Tiramisu - Traditional, Coffee"
  },
  {
    url: "https://images.unsplash.com/photo-1676300184943-09b2a08319a3?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Crème Brûlée - Classic, Popular"
  },
  {
    url: "https://images.unsplash.com/photo-1625497248011-3c634a78df8b?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Chocolate Lava Cake - Warm, Decadent"
  },
  {
    url: "https://images.unsplash.com/photo-1711861399198-649bc0ddc33f?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Signature Bellini - Prosecco, Peach, Elderflower"
  },
  {
    url: "https://images.unsplash.com/photo-1573416334306-5e8903433169?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Guatemalan Single-Origin - Coffee, Chocolate, Citrus"
  },
  {
    url: "https://images.unsplash.com/photo-1474722883778-792e7990302f?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Burgundy Old Fashioned - Bourbon, Cherry, Orange"
  },
  {
    url: "https://images.unsplash.com/photo-1563940476958-509a0a881c0c?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Garden Gin & Tonic - Gin, Herbal, Botanical"
  },
  {
    url: "https://images.unsplash.com/photo-1701875379650-d632c0575b54?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "Lavender Lemonade - Lemon, Lavender, Floral"
  },
  {
    url: "https://images.unsplash.com/photo-1585620365973-0e682a8e6314?q=80&w=800&auto=format&fit=crop",
    category: "food",
    caption: "French Press Coffee - Colombian, Rich, Strong"
  },


    // Interior Images
    {
      url: "https://images.unsplash.com/photo-1623363826110-b941aab5e2d9",
      category: "interior",
      caption: "Main Dining Room - Evening Ambiance"
    },
    {
      url: "https://images.unsplash.com/photo-1716835540586-58eb6242e95f",
      category: "interior",
      caption: "Intimate Dining Corner"
    },
    {
      url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      category: "interior",
      caption: "Private Dining Suite"
    },
    {
      url: "https://images.unsplash.com/photo-1649412212173-1d0f6b5f8f1c",
      category: "interior",
      caption: "Wine Cellar Collection"
    },
    {
      url: "https://images.unsplash.com/photo-1655132105938-6a65dee23189",
      category: "interior",
      caption: "Bar Counter Design"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      category: "interior",
      caption: "Elegant Table Setting"
    },

    // Events Images
    {
      url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
      category: "events",
      caption: "Wine & Jazz Night - October 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1513623935135-c896b59073c1",
      category: "events",
      caption: "Chef's Table Event - Summer Series"
    },
    {
      url: "https://images.unsplash.com/photo-1425421598808-4a22ce59cc97",
      category: "events",
      caption: "Anniversary Celebration Dinner"
    },
    {
      url: "https://images.unsplash.com/photo-1646781652500-40015cee4917",
      category: "events",
      caption: "Corporate Event Catering"
    },
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      category: "events",
      caption: "Wedding Reception Setup"
    },

    // Kitchen Images
    {
      url: "https://images.unsplash.com/photo-1723075471552-26781157140e",
      category: "kitchen",
      caption: "Head Chef in Action"
    },
    {
      url: "https://images.unsplash.com/photo-1708915965975-2a950db0e215",
      category: "kitchen",
      caption: "Professional Kitchen Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1532444482250-cb75e6bbd1fb",
      category: "kitchen",
      caption: "Culinary Team Preparation"
    },
    {
      url: "https://images.unsplash.com/photo-1488992783499-418eb1f62d08",
      category: "kitchen",
      caption: "Plating Techniques Masterclass"
    },
    {
      url: "https://images.unsplash.com/photo-1591189863430-ab87e120f312",
      category: "kitchen",
      caption: "Fresh Ingredients Selection"
    },
    {
      url: "https://images.unsplash.com/photo-1730162191677-5bc1ef291290",
      category: "kitchen",
      caption: "Sous Chef Knife Skills"
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream ">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-burgundy to-charcoal">
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
                className={`px-6 py-3 font-playfair font-semibold ${activeFilter === filter.id
                    ? "bg-burgundy text-cream hover:bg-burgundy hover:shadow-lg"
                    : "border-burgundy border-2 text-burgundy bg-cream hover:bg-burgundy hover:text-white hover:shadow-lg"
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
