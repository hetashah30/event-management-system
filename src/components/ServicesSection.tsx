
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "🎉",
    title: "Corporate Events",
    description: "From conferences to team-building activities, we create professional and engaging corporate events that align with your brand."
  },
  {
    icon: "💍", 
    title: "Weddings",
    description: "Your dream wedding brought to life with meticulous attention to detail, creating a day as unique as your love story."
  },
  {
    icon: "🎂", 
    title: "Birthday Parties",
    description: "Celebrate another year with a personalized birthday experience that captures your personality and style."
  },
  {
    icon: "🚀", 
    title: "Product Launches",
    description: "Make a lasting impression with a product launch that generates buzz and excitement around your brand."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            We specialize in creating memorable experiences across various event types, 
            each tailored to your unique needs and vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border border-border hover:shadow-md transition-all overflow-hidden group">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="group-hover:text-elevate-purple transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
