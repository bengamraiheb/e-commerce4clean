
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from '@/hooks/use-mobile';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Mock cart data - in a real app, this would come from your state management
    setCartCount(3);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary flex items-center"
        >
          <div className="mr-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">CD</span>
          </div>
          <span className="animate-in">Cleanify</span>
        </Link>

        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/products" active={isActive('/products')}>Products</NavLink>
            <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
          </nav>
        )}

        <div className="flex items-center space-x-4">
          {!isMobile && (
            <div className="relative w-40 lg:w-64 transition-all duration-300">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9 h-9 bg-secondary/50 border-0 focus-visible:ring-1 transition-all duration-300 hover:bg-secondary"
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          )}

          <div className="flex items-center space-x-1 sm:space-x-3">
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    variant="destructive"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            {!isMobile ? (
              <Button variant="default" size="sm" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg animate-in py-4">
          <nav className="container flex flex-col space-y-3">
            <MobileNavLink to="/" active={isActive('/')}>Home</MobileNavLink>
            <MobileNavLink to="/products" active={isActive('/products')}>Products</MobileNavLink>
            <MobileNavLink to="/services" active={isActive('/services')}>Services</MobileNavLink>
            <MobileNavLink to="/about" active={isActive('/about')}>About</MobileNavLink>
            <MobileNavLink to="/contact" active={isActive('/contact')}>Contact</MobileNavLink>
            <div className="pt-2 border-t">
              <Button className="w-full" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active?: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      "text-sm font-medium transition-colors hover:text-primary",
      active ? "text-primary" : "text-foreground/70"
    )}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, children }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      "text-lg font-medium py-2 transition-colors",
      active ? "text-primary" : "text-foreground/70"
    )}
  >
    {children}
  </Link>
);

export default Navbar;
