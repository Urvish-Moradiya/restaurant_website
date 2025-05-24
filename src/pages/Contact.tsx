
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-burgundy to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-cream mb-6">
            Let's Connect
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, special events, 
            or simply to share your Bella Vista experience.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-8">
                Send us a Message
              </h2>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-burgundy focus:ring-burgundy"
                        placeholder=" "
                        required
                      />
                      <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-burgundy">
                        Full Name
                      </label>
                    </div>

                    <div className="relative">
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-burgundy focus:ring-burgundy"
                        placeholder=" "
                        required
                      />
                      <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-burgundy">
                        Email Address
                      </label>
                    </div>

                    <div className="relative">
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-burgundy focus:ring-burgundy"
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-burgundy">
                        Phone Number
                      </label>
                    </div>

                    <div className="relative">
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-burgundy focus:ring-burgundy min-h-[120px]"
                        placeholder=" "
                        required
                      />
                      <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-burgundy">
                        Your Message
                      </label>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-burgundy hover:bg-burgundy/90 text-cream py-3 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h2 className="text-3xl font-playfair font-bold text-charcoal mb-8">
                  Visit Us
                </h2>

                <Card className="border-0 shadow-lg mb-8">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-burgundy mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-charcoal mb-2">Address</h3>
                          <p className="text-charcoal/70">
                            123 Gourmet Street<br />
                            Downtown District<br />
                            New York, NY 10001
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-burgundy mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-charcoal mb-2">Phone</h3>
                          <p className="text-charcoal/70">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg mb-8">
                  <CardContent className="p-8">
                    <h3 className="font-playfair font-semibold text-charcoal mb-4 text-xl">
                      Hours of Operation
                    </h3>
                    <div className="space-y-2 text-charcoal/70">
                      <div className="flex justify-between">
                        <span>Tuesday - Thursday</span>
                        <span>6:00 PM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday - Saturday</span>
                        <span>6:00 PM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>5:00 PM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monday</span>
                        <span className="text-burgundy">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-charcoal/60">
                        Lunch service available Friday - Sunday: 12:00 PM - 3:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="font-playfair font-semibold text-charcoal mb-4 text-xl">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="bg-burgundy text-cream p-3 rounded-full hover:bg-burgundy/90 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="bg-burgundy text-cream p-3 rounded-full hover:bg-burgundy/90 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="bg-burgundy text-cream p-3 rounded-full hover:bg-burgundy/90 transition-colors"
                      >
                        <Youtube className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-cream mb-6">
            Stay in the Flavor Loop
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Be the first to know about new dishes, special events, and exclusive offers. 
            Join our culinary community and never miss a delicious update.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3"
            />
            <Button className="bg-gold hover:bg-gold/90 text-charcoal px-8 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-charcoal/60">
          <p className="text-lg font-playfair">
            Interactive Map Coming Soon
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
