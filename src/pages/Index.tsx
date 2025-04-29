import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  // Check for authentication on page load
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      console.log('User is logged in:', JSON.parse(user));
    }
  }, []);

  // Handle scroll to section when URL has hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">We Create Unforgettable Events</h2>
                <p className="text-muted-foreground">
                  Elevate Ventures is a premier event planning company dedicated to transforming ordinary occasions into extraordinary experiences. With our meticulous attention to detail and creative vision, we craft moments that leave lasting impressions.
                </p>
                <p className="text-muted-foreground">
                  Our team of experienced event planners works closely with you to understand your vision and bring it to life, exceeding your expectations every step of the way.
                </p>
                <div className="pt-4">
                  <Link to="/about">
                    <Button variant="outline" className="border-elevate-purple text-elevate-purple hover:bg-elevate-purple hover:text-white">
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Corporate event" 
                    className="rounded-lg shadow-lg h-48 w-full object-cover"
                  />
                  <img 
                    src="https://i.ytimg.com/vi/2JY7LCk-orI/maxresdefault.jpg" 
                    alt="Charity gala" 
                    className="rounded-lg shadow-lg h-64 w-full object-cover"
                  />
                </div>
                <div className="space-y-4 pt-10">
                  <img 
                    src="https://www.brides.com/thmb/Drx8BL_uJXvolhPv7k0yYVVUtA0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/guests-at-reception-toasting-logal-cole-photography-recirc-0923-60cb1c61779a48bc95dd61e42a5d2b06.jpg" 
                    alt="Wedding celebration" 
                    className="rounded-lg shadow-lg h-64 w-full object-cover"
                  />
                  <img 
                    src="https://content.jdmagicbox.com/comp/vadodara/z6/0265px265.x265.180223114237.r3z6/catalogue/the-always-different-planner-manjalpur-vadodara-balloon-decorators-cfr19t9vlj.jpg" 
                    alt="Birthday party" 
                    className="rounded-lg shadow-lg h-48 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-elevate-purple text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-display font-bold text-elevate-gold mb-2">150+</div>
                <div className="text-sm uppercase tracking-wide">Events Organized</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-elevate-gold mb-2">98%</div>
                <div className="text-sm uppercase tracking-wide">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-elevate-gold mb-2">12+</div>
                <div className="text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-elevate-gold mb-2">50K+</div>
                <div className="text-sm uppercase tracking-wide">Happy Attendees</div>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted/30">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Next Event?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's collaborate to create an unforgettable experience tailored to your vision and needs. 
              Our team of expert event planners is ready to turn your dreams into reality.
            </p>
            <Link to="/apply">
              <Button size="lg" className="bg-elevate-purple hover:bg-elevate-purple/90 px-8 py-6 text-lg">
                Apply Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
