
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';

const Index = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Surface Cleaner',
      description: 'All-purpose cleaner for multiple surfaces with advanced formula for tough stains.',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Surface Cleaners',
      isNew: true,
      isFeatured: true,
    },
    {
      id: '2',
      name: 'Eco-Friendly Floor Cleaner',
      description: 'Biodegradable floor cleaner that leaves your floors spotless and fresh.',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      category: 'Floor Care',
      isFeatured: true,
    },
    {
      id: '3',
      name: 'Advanced Glass Cleaner',
      description: 'Streak-free formula perfect for windows, mirrors, and glass surfaces.',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Glass Care',
      isNew: true,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        <section className="py-20 bg-secondary/50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <Badge variant="outline" className="mb-4">Featured Products</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Most Popular Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover our best-selling cleaning solutions trusted by thousands of customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Cleaning Solutions You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver premium cleaning products with exceptional service and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ShieldCheck className="h-12 w-12" />}
                title="Premium Quality"
                description="All our products undergo rigorous quality testing to ensure the best results for your cleaning needs."
              />
              <FeatureCard
                icon={<Truck className="h-12 w-12" />}
                title="Fast Delivery"
                description="Get your cleaning supplies delivered to your doorstep quickly and reliably."
              />
              <FeatureCard
                icon={<Clock className="h-12 w-12" />}
                title="24/7 Support"
                description="Our customer support team is always ready to assist you with any questions."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Experience Premium Cleaning?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust our products for their cleaning needs.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Shopping Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="text-center p-6">
    <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
