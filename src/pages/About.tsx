const About = () => {
  const team = [
    {
      name: "Marco Benedetti",
      role: "Head Chef",
      specialty: "French & Italian Cuisine",
      image: "https://images.unsplash.com/photo-1697898109582-40f15c65f174",
      bio: "With over 15 years of experience in Michelin-starred kitchens across Europe, Chef Marco brings passion and precision to every dish."
    },
    {
      name: "Sophie Laurent",
      role: "Sous Chef",
      specialty: "Pastry & Desserts",
      image: "https://images.unsplash.com/photo-1731412657838-c04d8500917f",
      bio: "A graduate of Le Cordon Bleu, Sophie's innovative desserts have been featured in culinary magazines worldwide."
    },
    {
      name: "James Morrison",
      role: "Head Sommelier",
      specialty: "Wine Pairings",
      image: "https://plus.unsplash.com/premium_photo-1676651534759-5556422fa93d",
      bio: "James holds advanced certifications from the Court of Master Sommeliers and curates our extensive wine collection."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-burgundy to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-cream mb-6">
            Our Culinary Journey
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            From a single dream to a fine dining destination, our journey began in a family kitchen 
            and evolved into a celebration of culinary artistry.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
                A Legacy of Excellence
              </h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              
              <div className="space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  Founded in 2010, Bella Vista emerged from a passionate vision to create more than just a restaurant—
                  we sought to craft an experience that would celebrate the artistry of fine dining and the warmth of 
                  genuine hospitality.
                </p>
                
                <p>
                  Our story began when Chef Marco Benedetti, after years of honing his craft in the most prestigious 
                  kitchens of Europe, decided to bring his culinary philosophy to life. He envisioned a place where 
                  tradition would dance with innovation, where each dish would tell a story, and where every guest 
                  would feel like family.
                </p>
                
                <p>
                  Today, Bella Vista stands as a testament to that original dream—a sanctuary of culinary excellence 
                  where locally sourced ingredients meet time-honored techniques, creating unforgettable moments 
                  around our tables.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1667388969250-1c7220bf3f37"
                alt="Chef at work"
                className="rounded-lg shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cream mb-6">
              Faces Behind the Flavors
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-cream/80 max-w-2xl mx-auto">
              Meet the talented individuals who bring passion and expertise to every aspect of your dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="group bg-cream rounded-lg overflow-hidden hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-charcoal mb-2">
                    {member.name}
                  </h3>
                  <p className="text-burgundy font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gold text-sm font-medium mb-4">
                    Specialty: {member.specialty}
                  </p>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1667388969250-1c7220bf3f37')`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
            Our Kitchen Philosophy
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-burgundy mb-8">
              Locally Sourced. Seasonally Inspired. Crafted with Conscience.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-cream/90 p-6 rounded-lg hover-scale">
                <h4 className="text-lg font-playfair font-semibold text-charcoal mb-3">
                  Local Partnerships
                </h4>
                <p className="text-charcoal/70 text-sm">
                  We work directly with local farmers and artisans to source the freshest, 
                  highest-quality ingredients for our kitchen.
                </p>
              </div>
              
              <div className="bg-cream/90 p-6 rounded-lg hover-scale">
                <h4 className="text-lg font-playfair font-semibold text-charcoal mb-3">
                  Seasonal Menus
                </h4>
                <p className="text-charcoal/70 text-sm">
                  Our menus evolve with the seasons, ensuring that every dish showcases 
                  ingredients at their peak flavor and nutritional value.
                </p>
              </div>
              
              <div className="bg-cream/90 p-6 rounded-lg hover-scale">
                <h4 className="text-lg font-playfair font-semibold text-charcoal mb-3">
                  Sustainable Practices
                </h4>
                <p className="text-charcoal/70 text-sm">
                  From waste reduction to eco-friendly packaging, we're committed to 
                  minimizing our environmental impact while maximizing flavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
