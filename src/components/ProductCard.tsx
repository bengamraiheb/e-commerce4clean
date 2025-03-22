
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  category,
  isNew,
  isFeatured,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift">
      <CardHeader className="p-0">
        <Link to={`/products/${id}`} className="relative block overflow-hidden">
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            {isNew && (
              <Badge variant="default">New</Badge>
            )}
            {isFeatured && (
              <Badge variant="secondary">Featured</Badge>
            )}
          </div>
          <img
            src={image}
            alt={name}
            className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="outline" className="rounded-full">
            {category}
          </Badge>
        </div>
        <Link to={`/products/${id}`}>
          <h3 className="text-lg font-semibold leading-none tracking-tight mb-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">${price}</span>
          {price > 30 && (
            <span className="text-sm text-muted-foreground">
              or 4 payments of ${(price / 4).toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:text-primary"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button>
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
