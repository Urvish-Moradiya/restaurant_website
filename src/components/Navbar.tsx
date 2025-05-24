import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Improved scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    
    // Check immediately on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  // Create a single class string for the navbar to ensure all properties change together
  const navbarClasses = scrolled 
    ? 'bg-cream/95 backdrop-blur-md py-3 shadow-md border-b border-gold/20' 
    : 'bg-transparent py-4 border-b-0 shadow-none';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex flex-col items-start group"
            aria-label="Bella Vista Home"
          >
            <h1 className={`text-2xl sm:text-3xl font-playfair font-bold transition-colors duration-300 ${
              scrolled ? 'text-burgundy' : 'text-gold'
            }`}>
              Bella Vista
            </h1>
            <span className={`h-[2px] bg-gold/70 block mt-0.5 transition-all duration-300 ${
              scrolled ? 'w-0 opacity-0' : 'w-full opacity-100 group-hover:bg-gold'
            }`} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-1 rounded-md text-sm lg:text-base font-medium transition-all duration-300 relative group ${
                  scrolled
                    ? 'text-charcoal hover:text-burgundy'
                    : 'text-gold hover:text-white'
                }`}
              >
                {item.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    scrolled ? 'bg-burgundy' : 'bg-gold'
                  } ${location.pathname === item.path ? 'scale-x-100' : ''}`} 
                />
              </Link>
            ))}
            <Button 
              asChild 
              className={`ml-4 px-6 font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                scrolled 
                  ? 'bg-burgundy hover:bg-burgundy/90 text-cream shadow-sm hover:shadow-md' 
                  : 'bg-gold hover:bg-gold/90 text-charcoal shadow-md hover:shadow-lg'
              }`}
            >
              <Link to="/reservation">Reserve Table</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled 
                  ? 'text-burgundy hover:bg-burgundy/10' 
                  : 'text-gold hover:bg-gold/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className={`px-2 py-3 space-y-1 rounded-b-xl mt-2 ${
                scrolled ? 'bg-cream/95' : 'bg-black/40 backdrop-blur-md'
              }`}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        scrolled
                          ? (location.pathname === item.path 
                              ? 'bg-burgundy/10 text-burgundy font-semibold' 
                              : 'text-charcoal hover:text-burgundy hover:bg-burgundy/5')
                          : (location.pathname === item.path
                              ? 'bg-gold/20 text-gold font-semibold'
                              : 'text-gold hover:text-white hover:bg-gold/10')
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="px-3 py-4"
                >
                  <Button 
                    asChild 
                    className={`w-full py-6 rounded-md ${
                      scrolled
                        ? 'bg-burgundy hover:bg-burgundy/90 text-cream'
                        : 'bg-gold hover:bg-gold/90 text-charcoal'
                    }`}
                  >
                    <Link to="/reservation">
                      Reserve Your Table
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;