
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Truck, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors bg-background">
                🌟 <span className="mx-2">New Premium Products</span> <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Professional Cleaning
              <br />
              <span className="text-primary">Solutions Delivered</span>
            </h1>
            <p className="text-xl text-muted-foreground mx-auto lg:mx-0 max-w-lg">
              Experience the perfect clean with our premium products delivered right to your doorstep.
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <Button size="lg" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center lg:items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium">Premium Quality</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium">Fast Delivery</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium">24/7 Support</h3>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-70 blur-3xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cleaning Products"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
