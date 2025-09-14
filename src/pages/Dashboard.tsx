import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag, 
  Heart, 
  Users, 
  Star, 
  TrendingUp, 
  Package,
  MessageCircle,
  Settings,
  Plus,
  Edit
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-heritage-cream/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-heritage-earth mb-2">
            Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Welcome back! Here's what's happening with your marketplace activity.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold text-heritage-earth">127</p>
                  <p className="text-xs text-heritage-forest">+12% from last month</p>
                </div>
                <div className="p-3 bg-heritage-gold/20 rounded-full">
                  <ShoppingBag className="h-6 w-6 text-heritage-rust" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Wishlist Items</p>
                  <p className="text-2xl font-bold text-heritage-earth">23</p>
                  <p className="text-xs text-heritage-forest">5 new this week</p>
                </div>
                <div className="p-3 bg-heritage-gold/20 rounded-full">
                  <Heart className="h-6 w-6 text-heritage-rust" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Following</p>
                  <p className="text-2xl font-bold text-heritage-earth">34</p>
                  <p className="text-xs text-heritage-forest">Artisans</p>
                </div>
                <div className="p-3 bg-heritage-gold/20 rounded-full">
                  <Users className="h-6 w-6 text-heritage-rust" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Reviews Given</p>
                  <p className="text-2xl font-bold text-heritage-earth">18</p>
                  <p className="text-xs text-heritage-forest">Avg. 4.8 stars</p>
                </div>
                <div className="p-3 bg-heritage-gold/20 rounded-full">
                  <Star className="h-6 w-6 text-heritage-rust" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-heritage-earth flex items-center justify-between">
                  Recent Orders
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "#ORD-001",
                      item: "Traditional Kiganda Basket",
                      artisan: "Mary Nakamura",
                      status: "Delivered",
                      amount: "$45",
                      date: "Dec 15, 2024"
                    },
                    {
                      id: "#ORD-002",
                      item: "Clay Water Pot",
                      artisan: "James Okello",
                      status: "In Transit",
                      amount: "$35",
                      date: "Dec 18, 2024"
                    },
                    {
                      id: "#ORD-003",
                      item: "Beaded Jewelry Set",
                      artisan: "Grace Akello",
                      status: "Processing",
                      amount: "$65",
                      date: "Dec 20, 2024"
                    }
                  ].map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-heritage-cream/30 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-heritage-earth">{order.item}</span>
                          <Badge variant={
                            order.status === "Delivered" ? "default" :
                            order.status === "In Transit" ? "secondary" : "outline"
                          }>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          by {order.artisan} • {order.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-heritage-rust">{order.amount}</p>
                        <p className="text-xs text-muted-foreground">{order.id}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="border-0 shadow-soft mb-6">
              <CardHeader>
                <CardTitle className="text-heritage-earth">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-heritage-rust hover:bg-heritage-rust/90 text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" className="w-full justify-start border-heritage-forest text-heritage-forest hover:bg-heritage-forest hover:text-white">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message Artisan
                </Button>
                <Button variant="outline" className="w-full justify-start border-heritage-gold text-heritage-earth hover:bg-heritage-gold hover:text-heritage-earth">
                  <Star className="mr-2 h-4 w-4" />
                  Write Review
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Button>
              </CardContent>
            </Card>

            {/* Recommended for You */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-heritage-earth">Recommended</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Handwoven Mat",
                      artisan: "Rose Acheng",
                      price: "$28",
                      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop"
                    },
                    {
                      name: "Wooden Sculpture",
                      artisan: "Peter Musoke",
                      price: "$85",
                      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&h=100&fit=crop"
                    }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-heritage-earth text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.artisan}</p>
                      </div>
                      <p className="font-bold text-heritage-rust text-sm">{item.price}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-heritage-rust text-heritage-rust hover:bg-heritage-rust hover:text-white">
                  View More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;