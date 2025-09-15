import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Traditional Kiganda Basket",
    price: "UGX 165,000",
    region: "Central Uganda",
    artisan: "Mary Nakamura",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=400&fit=crop",
    rating: 4.9,
    category: "Basketry"
  },
  {
    id: 2,
    name: "Handwoven Gomesi Fabric",
    price: "UGX 440,000",
    region: "Buganda",
    artisan: "Sarah Nalwanga",
    image: "https://images.unsplash.com/photo-1594736797933-d0901ba2fe65?w=400&h=400&fit=crop",
    rating: 5.0,
    category: "Textiles"
  },
  {
    id: 3,
    name: "Clay Water Pot",
    price: "UGX 128,000",
    region: "Northern Uganda",
    artisan: "James Okello",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop",
    rating: 4.8,
    category: "Pottery"
  },
  {
    id: 4,
    name: "Beaded Jewelry Set",
    price: "UGX 238,000",
    region: "Eastern Uganda",
    artisan: "Grace Akello",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
    rating: 4.7,
    category: "Jewelry"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-heritage-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heritage-earth mb-4">
            Featured Crafts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional handmade products from talented artisans across Uganda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-heritage transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-heritage-gold text-heritage-earth px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <h3 className="font-semibold text-heritage-earth group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.region}</p>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-heritage-gold text-heritage-gold" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <span className="text-xs text-muted-foreground">by {product.artisan}</span>
                </div>

                <Button className="w-full bg-heritage-rust hover:bg-heritage-rust/90 text-white">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-heritage-rust text-heritage-rust hover:bg-heritage-rust hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};