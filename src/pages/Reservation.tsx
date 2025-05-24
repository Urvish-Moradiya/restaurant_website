
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const Reservation = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    time: '',
    specialRequests: ''
  });

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', { ...formData, date });
    // Handle reservation submission here
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-burgundy to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-cream mb-6">
            Book Your Spot
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Reserve your table for an unforgettable culinary journey. 
            We can't wait to welcome you to Bella Vista.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Reservation Form */}
            <div className="lg:col-span-2 animate-fade-in">
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-playfair font-bold text-charcoal mb-8">
                    Make a Reservation
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="focus:border-burgundy focus:ring-burgundy"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="focus:border-burgundy focus:ring-burgundy"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="focus:border-burgundy focus:ring-burgundy"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Number of Guests *
                        </label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, guests: value }))}>
                          <SelectTrigger className="focus:border-burgundy focus:ring-burgundy">
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Date *
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Time *
                        </label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}>
                          <SelectTrigger className="focus:border-burgundy focus:ring-burgundy">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent className="bg-white z-50">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Special Requests
                      </label>
                      <Textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        placeholder="Dietary restrictions, special occasions, seating preferences..."
                        className="focus:border-burgundy focus:ring-burgundy min-h-[100px]"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-burgundy hover:bg-burgundy/90 text-cream py-3 text-lg font-semibold"
                    >
                      Confirm Reservation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Booking Policy */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-charcoal mb-4 text-xl">
                    Booking Policy
                  </h3>
                  <div className="space-y-3 text-sm text-charcoal/70">
                    <p>• Maximum 8 guests per table</p>
                    <p>• 24-hour cancellation policy</p>
                    <p>• Credit card required to hold reservation</p>
                    <p>• 15-minute grace period for late arrivals</p>
                    <p>• Special dietary accommodations available</p>
                  </div>
                </CardContent>
              </Card>

              {/* Gallery Images */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=300&auto=format&fit=crop"
                    alt="Dining experience"
                    className="w-full h-24 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=300&auto=format&fit=crop"
                    alt="Restaurant interior"
                    className="w-full h-24 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=300&auto=format&fit=crop"
                    alt="Signature dish"
                    className="w-full h-24 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=300&auto=format&fit=crop"
                    alt="Wine selection"
                    className="w-full h-24 object-cover"
                  />
                </div>
              </Card>

              {/* Testimonial */}
              <Card className="border-0 shadow-lg bg-burgundy text-cream">
                <CardContent className="p-6">
                  <blockquote className="text-sm italic mb-4">
                    "An absolutely extraordinary dining experience! The attention to detail 
                    in every dish was remarkable, and the service was impeccable."
                  </blockquote>
                  <footer className="text-xs opacity-80">
                    — Sarah Mitchell, Recent Guest
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
