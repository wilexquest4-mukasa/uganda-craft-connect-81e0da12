import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CulturalStories } from "@/components/CulturalStories";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <CulturalStories />
    </div>
  );
};

export default Index;
