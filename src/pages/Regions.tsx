import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Package, Star } from "lucide-react";
const regions = [{
  id: 1,
  name: "Central Uganda",
  description: "Home to the historic Buganda kingdom, known for traditional basketry, barkcloth, and royal crafts",
  image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop",
  artisansCount: 127,
  productsCount: 584,
  rating: 4.8,
  specialties: ["Basketry", "Barkcloth", "Royal Crafts", "Pottery"],
  featured: true,
  keyArtisans: ["Mary Nakamura", "Sarah Nalwanga"],
  culturalSites: ["Buganda Palace", "Kasubi Tombs"]
}, {
  id: 2,
  name: "Northern Uganda",
  description: "Rich in pottery traditions and ceremonial crafts, with unique clay techniques passed down for generations",
  image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
  artisansCount: 89,
  productsCount: 342,
  rating: 4.7,
  specialties: ["Clay Pottery", "Ceremonial Items", "Traditional Drums", "Metalwork"],
  featured: false,
  keyArtisans: ["James Okello", "David Opio"],
  culturalSites: ["Gulu Cultural Center", "Acholi Cultural Museum"]
}, {
  id: 3,
  name: "Eastern Uganda",
  description: "Famous for vibrant beadwork, jewelry, and textile traditions from diverse ethnic communities",
  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
  artisansCount: 156,
  productsCount: 723,
  rating: 4.9,
  specialties: ["Beadwork", "Jewelry", "Mat Weaving", "Textiles"],
  featured: true,
  keyArtisans: ["Grace Akello", "Rose Acheng"],
  culturalSites: ["Mount Elgon Cultural Site", "Mbale Cultural Center"]
}, {
  id: 4,
  name: "Western Uganda",
  description: "Renowned for wood carving, sculptures, and traditional musical instruments from forest communities",
  image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop",
  artisansCount: 93,
  productsCount: 427,
  rating: 4.6,
  specialties: ["Wood Carving", "Sculptures", "Musical Instruments", "Masks"],
  featured: false,
  keyArtisans: ["Peter Musoke", "John Byaruhanga"],
  culturalSites: ["Bwindi Cultural Center", "Ankole Cultural Museum"]
}];
const Regions = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-heritage-forest via-heritage-rust to-heritage-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Uganda's Regions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the unique crafting traditions and cultural heritage 
            that define each region of Uganda
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-heritage-earth hover:bg-white/90">
              <MapPin className="mr-2 h-5 w-5" />
              Interactive Map
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-teal-900 hover:bg-teal-800">
              Cultural Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 bg-heritage-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heritage-earth mb-4">
              Regional Craft Traditions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each region of Uganda has its own unique artistic identity and cultural specialties
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regions.map(region => <Card key={region.id} className={`group overflow-hidden border-0 shadow-soft hover:shadow-heritage transition-all duration-300 hover:-translate-y-1 ${region.featured ? 'ring-2 ring-heritage-gold' : ''}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={region.image} alt={region.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    {region.featured && <Badge className="bg-heritage-gold text-heritage-earth">
                        Featured Region
                      </Badge>}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-heritage-gold transition-colors">
                      {region.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-heritage-gold text-heritage-gold" />
                      <span className="font-medium">{region.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-heritage-rust" />
                      <span className="font-medium">{region.artisansCount}</span>
                      <span className="text-muted-foreground">Artisans</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Package className="h-4 w-4 text-heritage-rust" />
                      <span className="font-medium">{region.productsCount}</span>
                      <span className="text-muted-foreground">Products</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-heritage-earth mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {region.specialties.map(specialty => <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>)}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-heritage-earth mb-2">Key Artisans</h4>
                    <div className="text-sm text-muted-foreground">
                      {region.keyArtisans.join(", ")}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-heritage-earth mb-2">Cultural Sites</h4>
                    <div className="text-sm text-muted-foreground">
                      {region.culturalSites.join(", ")}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-heritage-forest hover:bg-heritage-forest/90 text-white">
                      Explore Region
                    </Button>
                    <Button variant="outline" className="border-heritage-forest text-heritage-forest hover:bg-heritage-forest hover:text-white">
                      View Products
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Regions;