
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(32, 29, 30, 0.91), rgba(37, 35, 35, 0.64)), url('https://images.unsplash.com/photo-1667388969250-1c7220bf3f37')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold text-cream mb-6 leading-tight">
          Welcome to{' '}
          <span className="text-gold">Bella Vista</span>
        </h1>
        <p className="text-xl sm:text-2xl text-cream mb-8 max-w-3xl mx-auto font-light">
          A Symphony of Flavors
        </p>
        <p className="text-lg text-cream/80 mb-12 max-w-2xl mx-auto">
          Experience culinary artistry where tradition meets innovation in every carefully crafted dish
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg"
            className="bg-burgundy hover:bg-burgundy/90 text-cream px-8 py-4 text-lg font-semibold hover-scale"
          >
            <Link to="/reservation">Reserve Your Table</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold/10 hover:text-gold px-8 py-4 text-lg font-semibold hover-scale"
          >
            <Link to="/menu">Explore Our Menu</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
