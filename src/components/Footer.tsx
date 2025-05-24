
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-burgundy to-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-playfair font-bold text-gold mb-4">
              Bella Vista
            </h3>
            <p className="text-cream/80 mb-6 max-w-md">
              Founded in 2010, we bring together tradition, innovation, and artistry 
              to create an unforgettable dining experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-cream/80 hover:text-gold transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-cream/80 hover:text-gold transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream/80 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-gold mb-4">
              Visit Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-cream/80">
                  123 Gourmet Street<br />
                  Downtown District<br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <p className="text-cream/80">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-gold font-semibold mb-2">Hours</h5>
              <div className="text-cream/80 text-sm space-y-1">
                <p>Lunch: 12:00 PM - 3:00 PM</p>
                <p>Dinner: 6:00 PM - 11:00 PM</p>
                <p>Closed Mondays</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60">
            © 2024 Bella Vista Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
