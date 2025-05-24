
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'The Prelude', subtitle: 'Appetizers' },
    { id: 'mains', name: 'The Heart of the Table', subtitle: 'Main Courses' },
    { id: 'desserts', name: 'Sweet Endings', subtitle: 'Desserts' },
    { id: 'drinks', name: 'Liquid Harmony', subtitle: 'Beverages' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Seared Scallops",
        description: "Pan-seared scallops with cauliflower purée, pancetta, and micro herbs",
        price: "$18",
        image: "https://images.unsplash.com/photo-1632180352977-bc449a9bce33?q=80&w=800&auto=format&fit=crop",
        allergens: ["Shellfish"],
        tags: ["Chef's Special"]
      },
      {
        name: "Burrata & Prosciutto",
        description: "Fresh burrata with San Daniele prosciutto, fig compote, and arugula",
        price: "$16",
        image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=800&auto=format&fit=crop",
        allergens: ["Dairy"],
        tags: ["Vegetarian"]
      },
      {
        name: "Tuna Tartare",
        description: "Yellowfin tuna with avocado, citrus, and sesame oil",
        price: "$22",
        image: "https://images.unsplash.com/photo-1676968419539-88a66c11dd70?q=80&w=800&auto=format&fit=crop",
        allergens: ["Fish", "Sesame"],
        tags: ["Raw", "Gluten-Free"]
      },
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls filled with wild mushrooms and truffle oil",
        price: "$14",
        image: "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?q=80&w=800&auto=format&fit=crop",
        allergens: ["Dairy", "Eggs"],
        tags: ["Vegetarian", "Popular"]
      },
      {
        name: "Oysters Rockefeller",
        description: "Fresh oysters baked with spinach, herbs, and parmesan cheese",
        price: "$20",
        image: "https://images.unsplash.com/photo-1585545335512-777966e42c01?q=80&w=800&auto=format&fit=crop",
        allergens: ["Shellfish", "Dairy"],
        tags: ["Classic"]
      },
      {
        name: "Beet Carpaccio",
        description: "Thinly sliced roasted beets with goat cheese and candied walnuts",
        price: "$13",
        image: "https://images.unsplash.com/photo-1662979291159-d9223cb45220?q=80&w=800&auto=format&fit=crop",
        allergens: ["Dairy", "Nuts"],
        tags: ["Vegan Option", "Seasonal"]
      }
    ],
    mains: [
      {
        name: "Wagyu Beef Tenderloin",
        description: "Grade A5 wagyu with truffle butter and red wine reduction",
        price: "$85",
        image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=800&auto=format&fit=crop",
        pairing: "Best with: Cabernet Sauvignon",
        allergens: ["None"],
        tags: ["Premium", "Chef's Special"]
      },
      {
        name: "Lobster Thermidor",
        description: "Half lobster with cognac cream sauce and gruyere",
        price: "$48",
        image: "https://images.unsplash.com/photo-1599150389155-5fd840ae1548?q=80&w=800&auto=format&fit=crop",
        pairing: "Best with: Chardonnay",
        allergens: ["Shellfish", "Dairy"],
        tags: ["Signature"]
      },
      {
        name: "Herb-Crusted Lamb",
        description: "Rack of lamb with rosemary, thyme, and mint jus",
        price: "$42",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop",
        pairing: "Best with: Pinot Noir",
        allergens: ["None"],
        tags: ["Gluten-Free"]
      },
      {
        name: "Pan-Seared Salmon",
        description: "Atlantic salmon with lemon butter sauce and seasonal vegetables",
        price: "$32",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
        pairing: "Best with: Sauvignon Blanc",
        allergens: ["Fish"],
        tags: ["Heart Healthy", "Popular"]
      },
      {
        name: "Osso Buco",
        description: "Braised veal shanks with saffron risotto and gremolata",
        price: "$38",
        image: "https://images.unsplash.com/photo-1593030668930-8130abac83b0?q=80&w=800&auto=format&fit=crop",
        pairing: "Best with: Barolo",
        allergens: ["Dairy"],
        tags: ["Traditional", "Slow Cooked"]
      },
      {
        name: "Mushroom Wellington",
        description: "Wild mushrooms and chestnuts wrapped in puff pastry",
        price: "$28",
        image: "https://images.unsplash.com/photo-1597550413655-79865473eef2?q=80&w=800&auto=format&fit=crop",
        pairing: "Best with: Pinot Grigio",
        allergens: ["Gluten", "Nuts"],
        tags: ["Vegan", "Seasonal"]
      },
      {
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique and potato gratin",
        price: "$36",
        image: "https://images.unsplash.com/photo-1675251450771-d201a973819c?q=80&w=800&auto=format&fit=crop",
        pairing: "Best with: Côtes du Rhône",
        allergens: ["Dairy"],
        tags: ["French Classic"]
      },
      {
        name: "Grilled Octopus",
        description: "Mediterranean-style grilled octopus with chickpeas and olive tapenade",
        price: "$34",
        image: "https://images.unsplash.com/photo-1641645936398-0aded6d76dfd?q=80&w=800&auto=format&fit=crop",
        pairing: "Best with: Vermentino",
        allergens: ["Seafood"],
        tags: ["Mediterranean", "Gluten-Free"]
      }
    ],
    desserts: [
      {
        name: "Chocolate Soufflé",
        description: "Dark chocolate soufflé with vanilla bean ice cream",
        price: "$14",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710002?q=80&w=800&auto=format&fit=crop",
        allergens: ["Dairy", "Eggs"],
        tags: ["Seasonal Special"]
      },
      {
        name: "Lemon Tart",
        description: "Meyer lemon curd with graham cracker crust and berry compote",
        price: "$12",
        image: "https://images.unsplash.com/photo-1603383928972-2be74fcb47fb?q=80&w=800&auto=format&fit=crop",
        allergens: ["Dairy", "Eggs", "Gluten"],
        tags: ["Gluten-Free Option"]
      },
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso-soaked ladyfingers",
        price: "$11",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
        allergens: ["Dairy", "Eggs", "Alcohol"],
        tags: ["Traditional", "Coffee"]
      },
      {
        name: "Crème Brûlée",
        description: "Vanilla custard with caramelized sugar and fresh berries",
        price: "$13",
        image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=800&auto=format&fit=crop",
        allergens: ["Dairy", "Eggs"],
        tags: ["Classic", "Popular"]
      },
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center and raspberry coulis",
        price: "$15",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
        allergens: ["Dairy", "Eggs", "Gluten"],
        tags: ["Warm", "Decadent"]
      }
    ],
    drinks: [
      {
        name: "Signature Bellini",
        description: "Prosecco with white peach purée and elderflower",
        price: "$16",
        image: "https://images.unsplash.com/photo-1621873495613-14b485fbfb42?q=80&w=800&auto=format&fit=crop",
        category: "Cocktails"
      },
      {
        name: "Guatemalan Single-Origin",
        description: "Hand-selected beans from Huehuetenango region",
        price: "$8",
        image: "https://images.unsplash.com/photo-1518057111178-44a106bad149?q=80&w=800&auto=format&fit=crop",
        category: "Hot Beverages",
        notes: "Notes of chocolate and citrus"
      },
      {
        name: "Burgundy Old Fashioned",
        description: "Aged bourbon with cherry syrup and orange bitters",
        price: "$18",
        image: "https://images.unsplash.com/photo-1627758027938-7967c4222f34?q=80&w=800&auto=format&fit=crop",
        category: "Cocktails"
      },
      {
        name: "Garden Gin & Tonic",
        description: "Premium gin with house-made tonic and fresh herbs",
        price: "$15",
        image: "https://images.unsplash.com/photo-1596097635121-14a636429d64?q=80&w=800&auto=format&fit=crop",
        category: "Cocktails"
      },
      {
        name: "Lavender Lemonade",
        description: "Fresh lemon juice with lavender simple syrup",
        price: "$9",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5c859?q=80&w=800&auto=format&fit=crop",
        category: "Mocktails"
      },
      {
        name: "French Press Coffee",
        description: "Rich Colombian blend served with cream and sugar",
        price: "$6",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
        category: "Hot Beverages",
        notes: "Full-bodied with nutty undertones"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-burgundy to-burgundy/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-cream mb-6">
            Crafted with Passion
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Every dish tells a story of exceptional ingredients and artful preparation
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 bg-cream border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 font-playfair font-semibold ${
                  activeCategory === category.id
                    ? "bg-burgundy text-cream"
                    : "border-burgundy text-burgundy hover:bg-burgundy/10 hover:text-burgundy"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-burgundy mb-4">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-lg text-charcoal/70">
              {categories.find(cat => cat.id === activeCategory)?.subtitle}
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems[activeCategory]?.map((item, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <Card className="border-gold/20 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="w-full md:w-2/5 h-60 md:h-auto overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardContent className="flex-1 p-6 bg-cream flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-playfair font-semibold text-burgundy group-hover:text-burgundy/90 transition-colors">
                              {item.name}
                            </h3>
                            <span className="text-xl font-bold text-gold">
                              {item.price}
                            </span>
                          </div>
                          
                          <p className="text-charcoal/80 mb-4 leading-relaxed">
                            {item.description}
                          </p>

                          {item.pairing && (
                            <p className="text-sm text-burgundy font-medium italic mb-3">
                              {item.pairing}
                            </p>
                          )}

                          {item.notes && (
                            <p className="text-sm text-charcoal/70 mb-3">
                              {item.notes}
                            </p>
                          )}
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.tags?.map((tag) => (
                              <Badge key={tag} className="bg-burgundy/90 text-cream text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {item.allergens && item.allergens.length > 0 && item.allergens[0] !== "None" && (
                            <p className="text-xs text-charcoal/60">
                              Allergens: {item.allergens.join(", ")}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-cream border border-gold/30 p-4 shadow-lg">
                  <div className="space-y-2">
                    <h4 className="text-lg font-playfair font-semibold text-burgundy">{item.name}</h4>
                    <p className="text-sm text-charcoal/80">{item.description}</p>
                    {item.pairing && (
                      <p className="text-xs text-burgundy/80 italic">{item.pairing}</p>
                    )}
                    {item.allergens && item.allergens.length > 0 && item.allergens[0] !== "None" && (
                      <div className="text-xs flex gap-1 flex-wrap">
                        <span className="text-charcoal/70 font-medium">Allergens:</span>
                        {item.allergens.map((allergen) => (
                          <span key={allergen} className="bg-burgundy/10 text-burgundy/90 px-2 py-0.5 rounded-full text-xs">
                            {allergen}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Specials CTA */}
      <section className="py-16 bg-burgundy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-burgundy mb-4">Seasonal Chef's Specials</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto mb-8">
            Discover our chef's limited-time creations featuring the freshest seasonal ingredients
          </p>
          <Button 
            className="bg-burgundy hover:bg-burgundy/90 text-cream font-medium px-8 py-6"
            onClick={() => setActiveCategory('mains')}
          >
            Explore Specials
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
