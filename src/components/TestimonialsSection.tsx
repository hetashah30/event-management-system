
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    image: "https://i.pravatar.cc/100?img=1",
    quote: "Elevate Ventures turned our wedding day into an absolute dream. Their attention to detail and creativity made our special day truly unforgettable."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/100?img=3",
    quote: "The product launch event they organized exceeded all expectations. Our clients were impressed, and we saw immediate results. Highly recommend their services!"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Birthday Celebrant",
    image: "https://i.pravatar.cc/100?img=5",
    quote: "My 30th birthday party was the talk of the town! Elevate Ventures created an experience that perfectly matched my personality and style."
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO, TechStart Inc.",
    image: "https://i.pravatar.cc/100?img=4",
    quote: "Our annual conference has never been so well-organized. They handled everything professionally, allowing us to focus on our attendees and content."
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about their experience with Elevate Ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`bg-card border border-border transition-all duration-300 ${
                activeIndex === index 
                  ? 'shadow-lg scale-105 border-elevate-purple/50' 
                  : 'hover:shadow-md hover:border-elevate-purple/30'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="pt-6">
                <div className="mb-4 text-elevate-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-50">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 border-2 border-elevate-purple/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
