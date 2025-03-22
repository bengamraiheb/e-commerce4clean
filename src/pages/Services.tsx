
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Regular Cleaning",
      description: "Comprehensive cleaning service for homes and offices on a regular schedule.",
      price: "From $99",
      features: ["Weekly or bi-weekly options", "Customizable cleaning plan", "Eco-friendly products"],
      popular: true,
    },
    {
      id: 2,
      title: "Deep Cleaning",
      description: "Thorough cleaning service targeting hard-to-reach areas and stubborn dirt.",
      price: "From $199",
      features: ["Detailed cleaning of all surfaces", "Cabinet and appliance interior cleaning", "Window and blind cleaning"],
      popular: false,
    },
    {
      id: 3,
      title: "Move-in/Move-out Cleaning",
      description: "Specialized cleaning service for when you're moving in or out of a property.",
      price: "From $249",
      features: ["Complete property cleaning", "Inside appliance cleaning", "Cabinet and drawer cleaning"],
      popular: false,
    },
    {
      id: 4,
      title: "Commercial Cleaning",
      description: "Professional cleaning services for businesses, offices, and commercial spaces.",
      price: "Custom quote",
      features: ["Tailored to business needs", "After-hours service available", "Janitorial services"],
      popular: false,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/60 to-secondary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Our Services</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Professional Cleaning Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We offer a wide range of cleaning solutions tailored to your specific needs. 
                From regular home cleaning to specialized commercial services, we've got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">
                  Get a Quote
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Cleaning Service Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the cleaning package that best fits your needs and schedule.
                All our services can be customized to your specific requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.id} className={`flex flex-col h-full ${service.popular ? 'border-primary shadow-md' : ''}`}>
                  <CardHeader>
                    {service.popular && (
                      <Badge className="self-start mb-2">Most Popular</Badge>
                    )}
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-2xl font-bold mb-4">{service.price}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                      Book Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Process</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                How Our Cleaning Service Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We make it easy to get your space clean and sparkling with our simple process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book Your Service</h3>
                <p className="text-muted-foreground">
                  Choose the service you need and select a convenient date and time for your cleaning.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">We Clean</h3>
                <p className="text-muted-foreground">
                  Our professional team arrives at your location and performs a thorough cleaning service.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Relax & Enjoy</h3>
                <p className="text-muted-foreground">
                  Sit back and enjoy your clean, fresh space. We'll follow up to ensure your satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready for a Cleaner Space?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Book your cleaning service today and experience the difference our professional cleaners can make.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
