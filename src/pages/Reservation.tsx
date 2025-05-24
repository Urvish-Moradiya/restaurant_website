
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
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    time: '',
    specialRequests: ''
  });

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false); // Close the popover when a date is selected
  };

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

                  <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-charcoal">
                          Full Name <span className="text-burgundy">*</span>
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-md border-gray-300 focus:border-burgundy outline-none transition-all"
                          required
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-charcoal">
                          Email Address <span className="text-burgundy">*</span>
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-md border-gray-300 focus:border-burgundy outline-none transition-all"
                          required
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-charcoal">
                          Phone Number <span className="text-burgundy">*</span>
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-md border-gray-300 focus:border-burgundy outline-none transition-all"
                          required
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-charcoal">
                          Number of Guests <span className="text-burgundy">*</span>
                        </label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, guests: value }))}>
                          <SelectTrigger className="w-full rounded-md border-gray-300 focus:border-burgundy outline-none transition-all bg-white">
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-md">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()} className="hover:bg-burgundy/90 hover:text-cream">
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-charcoal">
                          Date <span className="text-burgundy">*</span>
                        </label>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal rounded-md border-gray-300 bg-white hover:bg-gray-50",
                                !date && "text-gray-500"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 text-burgundy" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white z-50 border border-gray-200 shadow-lg rounded-md" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={handleDateSelect} 
                              initialFocus
                              className="p-3 pointer-events-auto"
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-charcoal">
                          Time <span className="text-burgundy">*</span>
                        </label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}>
                          <SelectTrigger className="w-full rounded-md border-gray-300 focus:border-burgundy outline-none transition-all bg-white">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-md z-50">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time} className="hover:bg-burgundy/90 hover:text-cream">
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-charcoal">
                        Special Requests
                      </label>
                      <Textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        placeholder="Dietary restrictions, special occasions, seating preferences..."
                        className="w-full rounded-md border-gray-300 focus:border-burgundy outline-none transition-all min-h-[120px] resize-y"
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-burgundy hover:bg-burgundy/90 text-cream py-4 text-lg font-semibold rounded-md shadow-sm transition-all hover:shadow-md flex items-center justify-center"
                      >
                        <span>Confirm Reservation</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Button>
                    </div>
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
                    src="https://images.unsplash.com/photo-1623363826110-b941aab5e2d9"
                    alt="Dining experience"
                    className="w-full h-24 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa"
                    alt="Restaurant interior"
                    className="w-full h-24 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1716835540586-58eb6242e95f"
                    alt="Signature dish"
                    className="w-full h-24 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
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
