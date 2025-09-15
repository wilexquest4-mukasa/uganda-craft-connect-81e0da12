import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User, BookOpen, Clock } from "lucide-react";
const heritageStories = [{
  id: 1,
  title: "The Art of Traditional Pottery in Northern Uganda",
  excerpt: "Discover how clay vessels have been shaped by generations of skilled potters, preserving ancient techniques passed down through families for over 500 years.",
  image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
  region: "Northern Uganda",
  date: "2024-01-15",
  author: "Cultural Heritage Team",
  category: "Pottery Traditions",
  readTime: "8 min read"
}, {
  id: 2,
  title: "Weaving Stories: The Kiganda Basket Legacy",
  excerpt: "Explore the intricate patterns and symbolic meanings behind traditional basket weaving in Central Uganda's Buganda kingdom.",
  image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop",
  region: "Central Uganda",
  date: "2024-01-20",
  author: "Sarah Mukasa",
  category: "Basketry Heritage",
  readTime: "6 min read"
}, {
  id: 3,
  title: "Beadwork: Colors of Community and Identity",
  excerpt: "The vibrant world of Ugandan beadwork tells stories of community, celebration, and cultural identity through intricate designs.",
  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
  region: "Eastern Uganda",
  date: "2024-01-25",
  author: "Grace Namuli",
  category: "Jewelry & Beadwork",
  readTime: "5 min read"
}, {
  id: 4,
  title: "The Sacred Art of Barkcloth Making",
  excerpt: "From the Mutuba tree to royal garments, discover the ancient art of barkcloth production in the Buganda kingdom.",
  image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop",
  region: "Central Uganda",
  date: "2024-02-01",
  author: "David Sserwanga",
  category: "Textile Heritage",
  readTime: "10 min read"
}, {
  id: 5,
  title: "Wood Carving: Stories in Timber",
  excerpt: "Master craftsmen reveal the spiritual and cultural significance behind traditional Ugandan wood sculptures.",
  image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop",
  region: "Western Uganda",
  date: "2024-02-05",
  author: "Peter Musoke",
  category: "Wood Carving",
  readTime: "7 min read"
}, {
  id: 6,
  title: "Musical Instruments: Sounds of Heritage",
  excerpt: "Traditional drums, harps, and flutes that have echoed through Uganda's cultural ceremonies for centuries.",
  image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
  region: "All Regions",
  date: "2024-02-10",
  author: "Moses Kigongo",
  category: "Musical Heritage",
  readTime: "9 min read"
}];
const Heritage = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-heritage-forest to-heritage-rust text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cultural Heritage Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore the rich tapestry of Ugandan cultural traditions, stories, and craftsmanship 
            that have been passed down through generations
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-heritage-gold hover:bg-heritage-gold/90 text-heritage-earth">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Stories
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white text-base text-justify bg-teal-700 hover:bg-teal-600 mx-0">
              Featured Products
            </Button>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-heritage-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heritage-earth mb-4">
              Heritage Stories & Traditions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deep into the narratives that shape Uganda's cultural identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageStories.map(story => <Card key={story.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-heritage transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-heritage-forest text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                      <Clock className="inline h-3 w-3 mr-1" />
                      {story.readTime}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-heritage-earth mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{story.region}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(story.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{story.author}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-heritage-forest hover:bg-heritage-forest/90 text-white">
                    Read Full Story
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Heritage;