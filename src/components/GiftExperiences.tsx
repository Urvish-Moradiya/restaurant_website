import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Gift, Images } from "lucide-react";

const GiftExperiences = () => {
  const experiences = [
    {
      title: "Gift Cards",
      description: "Give the gift of an extraordinary dining experience. Our digital or physical gift cards are available in any denomination and never expire.",
      icon: Gift,
      ctaText: "Purchase Now",
      ctaLink: "/gift-cards"
    },
    {
      title: "Private Dining",
      description: "Host your special event in our elegant private dining rooms. Perfect for corporate gatherings, family celebrations, or wedding receptions.",
      icon: Images,
      ctaText: "Book Private Event",
      ctaLink: "/private-dining"
    },
    {
      title: "Chef's Table Experience",
      description: "An exclusive culinary journey with our executive chef. Enjoy a personalized multi-course menu with wine pairings at our special chef's table.",
      icon: Gift,
      ctaText: "Reserve Experience",
      ctaLink: "/chefs-table"
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-charcoal mb-6">
            Gift Cards & Experiences
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Share the gift of exceptional dining and create memories that last a lifetime with our 
            curated selection of gift cards and unique culinary experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <Card 
                key={index} 
                className="border-gold/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-burgundy to-burgundy/80 text-cream flex items-center justify-center">
                  <Icon className="h-20 w-20 opacity-80" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-charcoal mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-charcoal/80 mb-6">
                    {experience.description}
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-gold hover:bg-gold/90 text-charcoal"
                  >
                    <Link to={experience.ctaLink}>
                      {experience.ctaText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default GiftExperiences;
