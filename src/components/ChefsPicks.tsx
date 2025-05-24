
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ChefsPicks = () => {
const dishes = [
  {
    id: 1,
    name: "Grilled Chilean Sea Bass",
    description: "Tender Chilean sea bass grilled with lemon caper sauce, served over sautéed spinach and herbed fingerling potatoes for a gourmet meal.",
    ingredients: ["Chilean sea bass","Spinach", "Fingerling potatoes"],
    price: "$49",
    image: "https://images.unsplash.com/photo-1644809649533-fcadfad3bfe5",
    tags: ["Seafood", "Gluten-Free", "Premium"]
  },
  {
    id: 2,
    name: "Butternut Squash Gnocchi",
    description: "Pillowy gnocchi tossed in browned butter with roasted butternut squash, fresh sage, and toasted pine nuts for rich autumn flavor.",
    ingredients: ["Butternut squash", "Gnocchi", "Browned butter", "Pine nuts"],
    price: "$32",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    tags: ["Vegetarian", "Chef's Favorite"]
  },
  {
    id: 3,
    name: "Herb-Crusted Rack of Lamb",
    description: "Juicy rack of lamb crusted with garlic and herbs, oven-roasted and served with mint chimichurri and roasted root vegetables.",
    ingredients: ["Lamb rack", "Garlic", "Mint chimichurri", "vegetables"],
    price: "$58",
    image: "https://images.unsplash.com/photo-1634564375126-ea3ed65a166b",
    tags: ["Premium", "Signature"]
  },
  {
    id: 4,
    name: "Spicy Tuna Tartare",
    description: "Sushi-grade tuna diced and tossed in sesame-ginger dressing, served with avocado and crispy wontons for a refreshing starter.",
    ingredients: ["Tuna", "Avocado", "Sesame oil", "Ginger", "Wonton crisps"],
    price: "$27",
    image: "https://images.unsplash.com/photo-1712183718506-41a054650697",
    tags: ["Appetizer", "Spicy", "Seafood"]
  },
  {
    id: 5,
    name: "Wild Mushroom Risotto",
    description: "Creamy risotto made with arborio rice, wild mushrooms, white wine, parmesan cheese, and finished with aromatic truffle oil.",
    ingredients: ["Wild mushrooms", "Parmesan", "Truffle oil", "White wine"],
    price: "$35",
    image: "https://images.unsplash.com/photo-1595908128774-93d51801fa39",
    tags: ["Vegetarian", "Comfort Food"]
  },
  {
    id: 6,
    name: "Fire-Roasted Vegetable Platter",
    description: "A colorful variety of seasonal vegetables fire-roasted and served with romesco sauce and garlic aioli for a hearty plant-based option.",
    ingredients: ["Bell peppers", "Zucchini", "Eggplant", "Romesco", "Garlic aioli"],
    price: "$26",
    image: "https://images.unsplash.com/photo-1691749123977-0701680083b8",
    tags: ["Vegan", "Healthy"]
  },
  {
    id: 7,
    name: "Korean BBQ Short Ribs",
    description: "Tender beef short ribs marinated in sweet and spicy Korean BBQ sauce, served with house-made kimchi and jasmine rice.",
    ingredients: ["Beef short ribs", "Korean BBQ sauce", "Kimchi", "Jasmine rice"],
    price: "$42",
    image: "https://images.unsplash.com/photo-1708388465069-1fc76ec68b1d",
    tags: ["Fusion", "Bold Flavors"]
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description: "Molten dark chocolate cake with a rich gooey center, served with vanilla ice cream and raspberry sauce for a decadent dessert.",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Vanilla ice cream"],
    price: "$18",
    image: "https://images.unsplash.com/photo-1625497248011-3c634a78df8b",
    tags: ["Dessert", "Signature", "Indulgent"]
  }
];



  return (
    <section className="py-20 bg-gradient-to-b from-burgundy to-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-cream mb-6">
            Chef's Picks
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Discover our signature creations, carefully crafted by our culinary team
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mb-10"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {dishes.map((dish) => (
              <CarouselItem key={dish.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-cream border-0 overflow-hidden hover-scale group cursor-pointer transition-all duration-300 shadow-lg">
                    <div className="relative overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-60 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                      />
                      <div className="absolute top-4 right-4 flex flex-wrap gap-1 justify-end max-w-[80%]">
                        {dish.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            className="bg-burgundy/90 text-cream text-xs backdrop-blur-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-[70%] transition-transform duration-300 group-hover:translate-y-0">
                        <span className="text-xl font-bold text-gold">
                          {dish.price}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                        {dish.name}
                      </h3>
                      
                      <p className="text-charcoal/70 mb-4 text-sm leading-relaxed">
                        {dish.description}
                      </p>
                      
                      <div>
                        <p className="text-xs font-semibold text-charcoal mb-1">KEY INGREDIENTS:</p>
                        <p className="text-xs text-charcoal/60">
                          {dish.ingredients.join(", ")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static inset-auto translate-y-0 bg-gold hover:bg-gold/90 text-charcoal border-none" />
            <CarouselNext className="relative static inset-auto translate-y-0 bg-gold hover:bg-gold/90 text-charcoal border-none" />
          </div>
        </Carousel>

        <div className="flex justify-center items-center space-x-2 mt-8">
          <span className="w-2 h-2 rounded-full bg-gold/50"></span>
          <span className="w-3 h-3 rounded-full bg-gold"></span>
          <span className="w-2 h-2 rounded-full bg-gold/50"></span>
        </div>
      </div>
    </section>
  );
};

export default ChefsPicks;
