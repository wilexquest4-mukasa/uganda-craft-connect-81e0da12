import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, User, Menu, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = () => {
    toast.info("Search feature coming soon!");
  };

  const handleCart = () => {
    toast.info("Shopping cart feature coming soon!");
  };

  const handleProfile = () => {
    navigate("/dashboard");
  };
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "Products",
    path: "/products"
  }, {
    name: "Cultural Heritage",
    path: "/heritage"
  }, {
    name: "Artisans",
    path: "/artisans"
  }, {
    name: "Regions",
    path: "/regions"
  }, {
    name: "Dashboard",
    path: "/dashboard"
  }];
  return <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-heritage-rust to-heritage-gold"></div>
            <span className="text-xl font-bold text-heritage-earth">UgandaCraft hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <Link key={item.path} to={item.path}>
                <Button variant={location.pathname === item.path ? "secondary" : "ghost"} className="text-sm font-medium">
                  {item.name}
                </Button>
              </Link>)}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={handleSearch}>
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCart}>
              <ShoppingBag className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleProfile}>
              <User className="h-4 w-4" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden border-t">
            <div className="py-2 space-y-1">
              {navItems.map(item => <Link key={item.path} to={item.path}>
                  <Button variant={location.pathname === item.path ? "secondary" : "ghost"} className="w-full justify-start text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Button>
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};