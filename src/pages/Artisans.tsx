import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Award, Heart, MessageCircle, User, Mail, Phone, Camera } from "lucide-react";
import { useState } from "react";

const artisans = [
  {
    id: 1,
    name: "Mary Nakamura",
    speciality: "Traditional Basketry",
    region: "Central Uganda",
    experience: "25 years",
    rating: 4.9,
    totalSales: 234,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    bio: "Master basket weaver specializing in traditional Kiganda patterns passed down through five generations.",
    skills: ["Basket Weaving", "Natural Dyes", "Traditional Patterns"],
    featured: true,
    verified: true
  },
  {
    id: 2,
    name: "James Okello",
    speciality: "Clay Pottery",
    region: "Northern Uganda",
    experience: "18 years",
    rating: 4.8,
    totalSales: 189,
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300&h=300&fit=crop&crop=face",
    bio: "Traditional potter creating functional and ceremonial vessels using ancient techniques and local clay.",
    skills: ["Clay Molding", "Kiln Firing", "Decorative Glazing"],
    featured: false,
    verified: true
  },
  {
    id: 3,
    name: "Grace Akello",
    speciality: "Beadwork & Jewelry",
    region: "Eastern Uganda",
    experience: "12 years",
    rating: 4.7,
    totalSales: 156,
    image: "https://images.unsplash.com/photo-1594736797933-d0a3ba9e8bb2?w=300&h=300&fit=crop&crop=face",
    bio: "Contemporary jewelry artist blending traditional beadwork techniques with modern designs.",
    skills: ["Bead Threading", "Color Coordination", "Wire Work"],
    featured: true,
    verified: true
  },
  {
    id: 4,
    name: "Peter Musoke",
    speciality: "Wood Carving",
    region: "Western Uganda",
    experience: "30 years",
    rating: 4.9,
    totalSales: 287,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
    bio: "Master wood carver creating sculptures and functional art pieces from indigenous Ugandan timber.",
    skills: ["Wood Carving", "Tool Making", "Finishing Techniques"],
    featured: true,
    verified: true
  },
  {
    id: 5,
    name: "Sarah Nalwanga",
    speciality: "Textile Weaving",
    region: "Central Uganda",
    experience: "22 years",
    rating: 5.0,
    totalSales: 298,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=face",
    bio: "Expert weaver specializing in traditional Gomesi fabric and contemporary textile innovations.",
    skills: ["Loom Weaving", "Pattern Design", "Natural Dyeing"],
    featured: true,
    verified: true
  },
  {
    id: 6,
    name: "Rose Acheng",
    speciality: "Mat Weaving",
    region: "Eastern Uganda",
    experience: "15 years",
    rating: 4.6,
    totalSales: 134,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    bio: "Traditional mat weaver creating beautiful floor coverings and decorative pieces using local reeds.",
    skills: ["Reed Preparation", "Pattern Weaving", "Edge Finishing"],
    featured: false,
    verified: true
  }
];

const Artisans = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-heritage-gold to-heritage-rust text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Artisans
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the talented craftspeople behind every handmade product, 
            preserving Uganda's rich cultural heritage through their dedication
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-heritage-earth hover:bg-white/90">
            Become an Artisan
          </Button>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-16 bg-heritage-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heritage-earth mb-4">
              Featured Artisans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with master craftspeople from across Uganda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <Card key={artisan.id} className={`group overflow-hidden border-0 shadow-soft hover:shadow-heritage transition-all duration-300 hover:-translate-y-1 ${artisan.featured ? 'ring-2 ring-heritage-gold' : ''}`}>
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {artisan.featured && (
                      <Badge className="bg-heritage-gold text-heritage-earth">
                        <Award className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {artisan.verified && (
                      <Badge className="bg-heritage-forest text-white">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-heritage-earth mb-1 group-hover:text-primary transition-colors">
                      {artisan.name}
                    </h3>
                    <p className="text-heritage-rust font-medium">{artisan.speciality}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{artisan.region}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-heritage-gold text-heritage-gold" />
                        <span className="font-medium">{artisan.rating}</span>
                        <span className="text-muted-foreground">({artisan.totalSales} sales)</span>
                      </div>
                      <span className="text-muted-foreground">{artisan.experience}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {artisan.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {artisan.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-heritage-rust hover:bg-heritage-rust/90 text-white">
                      View Profile
                    </Button>
                    <Button variant="outline" size="icon" className="border-heritage-rust text-heritage-rust hover:bg-heritage-rust hover:text-white">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-heritage-rust text-heritage-rust hover:bg-heritage-rust hover:text-white">
              View All Artisans
            </Button>
          </div>
        </div>
      </section>

      {/* Artisan Registration Section */}
      <section className="py-16 bg-gradient-to-b from-heritage-cream/30 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heritage-earth mb-4">
              Join Our Community of Artisans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your craft with the world and connect with buyers who value authentic Ugandan artistry
            </p>
          </div>

          <Card className="shadow-heritage border-0">
            <CardContent className="p-8">
              <Tabs defaultValue="signup" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="signup" className="text-lg py-3">Join as Artisan</TabsTrigger>
                  <TabsTrigger value="login" className="text-lg py-3">Login</TabsTrigger>
                </TabsList>
                
                <TabsContent value="signup">
                  <Card className="border-0 shadow-none">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl text-heritage-earth">Register as an Artisan</CardTitle>
                      <p className="text-muted-foreground">Share your story and showcase your craft</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+256 XXX XXX XXX" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="speciality">Craft Speciality</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your primary craft" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basketry">Traditional Basketry</SelectItem>
                            <SelectItem value="pottery">Clay Pottery</SelectItem>
                            <SelectItem value="beadwork">Beadwork & Jewelry</SelectItem>
                            <SelectItem value="woodcarving">Wood Carving</SelectItem>
                            <SelectItem value="textiles">Textile Weaving</SelectItem>
                            <SelectItem value="matweaving">Mat Weaving</SelectItem>
                            <SelectItem value="painting">Painting & Art</SelectItem>
                            <SelectItem value="sculpture">Sculpture</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="region">Region</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="central">Central Uganda</SelectItem>
                            <SelectItem value="eastern">Eastern Uganda</SelectItem>
                            <SelectItem value="northern">Northern Uganda</SelectItem>
                            <SelectItem value="western">Western Uganda</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input id="experience" placeholder="e.g. 10 years" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Tell Your Story</Label>
                        <Textarea 
                          id="bio" 
                          placeholder="Share your journey as an artisan, your techniques, and what makes your craft special..."
                          className="min-h-24"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Create a secure password" />
                      </div>
                      
                      <Button className="w-full bg-heritage-rust hover:bg-heritage-rust/90 text-white py-3 text-lg">
                        <User className="mr-2 h-5 w-5" />
                        Register as Artisan
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="login">
                  <Card className="border-0 shadow-none">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl text-heritage-earth">Welcome Back</CardTitle>
                      <p className="text-muted-foreground">Continue your artisan journey</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="loginEmail">Email Address</Label>
                        <Input id="loginEmail" type="email" placeholder="your.email@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="loginPassword">Password</Label>
                        <Input id="loginPassword" type="password" placeholder="Enter your password" />
                      </div>
                      
                      <Button className="w-full bg-heritage-rust hover:bg-heritage-rust/90 text-white py-3 text-lg">
                        <Mail className="mr-2 h-5 w-5" />
                        Sign In
                      </Button>
                      
                      <div className="text-center">
                        <Button variant="link" className="text-heritage-rust hover:text-heritage-rust/80">
                          Forgot your password?
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Artisans;