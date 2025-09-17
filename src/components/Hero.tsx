import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [searchType, setSearchType] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Handle search logic
    console.log({ searchType, searchQuery, location });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect
            <span className="block text-primary-light">Property</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Discover thousands of properties for sale and rent across Pakistan's major cities
          </p>
        </div>

        {/* Search Card */}
        <Card className="shadow-hero max-w-4xl mx-auto">
          <CardContent className="p-6">
            {/* Search Type Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {[
                { id: "buy", label: "Buy", icon: Home },
                { id: "rent", label: "Rent", icon: MapPin },
                { id: "sell", label: "Sell", icon: DollarSign },
              ].map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant={searchType === id ? "default" : "outline"}
                  onClick={() => setSearchType(id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Button>
              ))}
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Property Search */}
              <div className="md:col-span-1">
                <Input
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Location */}
              <div className="md:col-span-1">
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="karachi">Karachi</SelectItem>
                    <SelectItem value="lahore">Lahore</SelectItem>
                    <SelectItem value="islamabad">Islamabad</SelectItem>
                    <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                    <SelectItem value="faisalabad">Faisalabad</SelectItem>
                    <SelectItem value="multan">Multan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="md:col-span-1">
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50">Under 50 Lac</SelectItem>
                    <SelectItem value="50-100">50 Lac - 1 Crore</SelectItem>
                    <SelectItem value="100-200">1 - 2 Crore</SelectItem>
                    <SelectItem value="200+">Above 2 Crore</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-1">
                <Button 
                  onClick={handleSearch}
                  className="w-full h-12 text-base font-semibold"
                  size="lg"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-4 text-sm text-muted-foreground text-center">
              Popular searches: 
              <Button variant="link" className="p-0 h-auto ml-1 text-sm">
                Houses in Lahore
              </Button>
              <span className="mx-1">•</span>
              <Button variant="link" className="p-0 h-auto text-sm">
                Apartments in Karachi
              </Button>
              <span className="mx-1">•</span>
              <Button variant="link" className="p-0 h-auto text-sm">
                Plots in Islamabad
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;