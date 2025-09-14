import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User } from "lucide-react";

const culturalStories = [
  {
    id: 1,
    title: "The Art of Traditional Pottery in Northern Uganda",
    excerpt: "Discover how clay vessels have been shaped by generations of skilled potters, preserving ancient techniques passed down through families.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    region: "Northern Uganda",
    date: "2024-01-15",
    author: "Cultural Heritage Team",
    category: "Pottery Traditions"
  },
  {
    id: 2,
    title: "Weaving Stories: The Kiganda Basket Legacy",
    excerpt: "Explore the intricate patterns and symbolic meanings behind traditional basket weaving in Central Uganda's Buganda kingdom.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop",
    region: "Central Uganda",
    date: "2024-01-20",
    author: "Sarah Mukasa",
    category: "Basketry Heritage"
  },
  {
    id: 3,
    title: "Beadwork: Colors of Community and Identity",
    excerpt: "The vibrant world of Ugandan beadwork tells stories of community, celebration, and cultural identity through intricate designs.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    region: "Eastern Uganda",
    date: "2024-01-25",
    author: "Grace Namuli",
    category: "Jewelry & Beadwork"
  }
];

export const CulturalStories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heritage-earth mb-4">
            Cultural Heritage Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into the rich narratives behind Uganda's traditional crafts and the artisans who keep these traditions alive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culturalStories.map((story) => (
            <Card key={story.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-heritage transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-heritage-forest text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.category}
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

                <Button variant="outline" className="w-full border-heritage-forest text-heritage-forest hover:bg-heritage-forest hover:text-white">
                  Read Full Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-heritage-forest hover:bg-heritage-forest/90 text-white">
            Explore All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};