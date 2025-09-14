import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-heritage.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-earth/80 via-heritage-earth/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-heritage-gold/20 text-heritage-earth rounded-full text-sm font-medium backdrop-blur-sm">
              Celebrating Ugandan Heritage
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Authentic
            <span className="block text-heritage-gold">Ugandan Crafts</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 mt-2">
              Connecting Artisans to the World
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Discover the rich cultural heritage of Uganda through authentic handmade crafts. 
            From traditional pottery to vibrant textiles, each piece tells a story of 
            our artisans' dedication and cultural pride.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-heritage-gold hover:bg-heritage-gold/90 text-heritage-earth font-semibold px-8 py-6 text-lg group"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-heritage-gold">500+</div>
              <div className="text-white/80 text-sm md:text-base">Artisans</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-heritage-gold">50+</div>
              <div className="text-white/80 text-sm md:text-base">Regions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-heritage-gold">5000+</div>
              <div className="text-white/80 text-sm md:text-base">Products</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};