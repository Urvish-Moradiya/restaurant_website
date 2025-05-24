
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ReservationCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(32, 29, 30, 0.91), rgba(37, 35, 35, 0.64)), url('https://images.unsplash.com/photo-1667388969250-1c7220bf3f37')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        <h2 className="text-4xl sm:text-6xl font-playfair font-bold text-cream mb-6">
          Reserve Your Experience
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        <p className="text-xl text-cream/90 mb-12 max-w-2xl mx-auto">
          Book your seat for an unforgettable evening of culinary excellence and elegant dining
        </p>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-gold text-gold hover:bg-gold/10 hover:text-gold px-8 py-4 text-lg font-semibold hover-scale"
        >
          <Link to="/reservation">Make a Reservation</Link>
        </Button>
      </div>
    </section>
  );
};

export default ReservationCTA;
