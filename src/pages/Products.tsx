import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Traditional Kiganda Basket",
    price: "UGX 165,000",
    region: "Central Uganda",
    artisan: "Mary Nakamura",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=400&fit=crop",
    rating: 4.9,
    category: "Basketry"
  },
  {
    id: 2,
    name: "Handwoven Gomesi Fabric",
    price: "UGX 440,000",
    region: "Buganda",
    artisan: "Sarah Nalwanga",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
    rating: 5.0,
    category: "Textiles"
  },
  {
    id: 3,
    name: "Clay Water Pot",
    price: "UGX 128,000",
    region: "Northern Uganda",
    artisan: "James Okello",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    rating: 4.8,
    category: "Pottery"
  },
  {
    id: 4,
    name: "Beaded Jewelry Set",
    price: "UGX 238,000",
    region: "Eastern Uganda",
    artisan: "Grace Akello",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    rating: 4.7,
    category: "Jewelry"
  },
  {
    id: 5,
    name: "Wooden Sculpture",
    price: "UGX 312,000",
    region: "Western Uganda",
    artisan: "Peter Musoke",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop",
    rating: 4.6,
    category: "Wood Carving"
  },
  {
    id: 6,
    name: "Traditional Mat",
    price: "UGX 103,000",
    region: "Eastern Uganda",
    artisan: "Rose Acheng",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    rating: 4.5,
    category: "Weaving"
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-heritage-earth mb-4">
            Craft Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover authentic handmade products from talented Ugandan artisans
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Basketry">Basketry</SelectItem>
              <SelectItem value="Textiles">Textiles</SelectItem>
              <SelectItem value="Pottery">Pottery</SelectItem>
              <SelectItem value="Jewelry">Jewelry</SelectItem>
              <SelectItem value="Wood Carving">Wood Carving</SelectItem>
              <SelectItem value="Weaving">Weaving</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger>
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="Central Uganda">Central Uganda</SelectItem>
              <SelectItem value="Northern Uganda">Northern Uganda</SelectItem>
              <SelectItem value="Eastern Uganda">Eastern Uganda</SelectItem>
              <SelectItem value="Western Uganda">Western Uganda</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="border-heritage-rust text-heritage-rust hover:bg-heritage-rust hover:text-white">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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
      </div>
    </div>
  );
};

export default Products;