import { useState } from "react";
import { Search, MapPin, Phone, Mail, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Agent {
  id: string;
  name: string;
  photo: string;
  rating: number;
  reviews: number;
  experience: string;
  specialization: string[];
  location: string;
  phone: string;
  email: string;
  properties: number;
  description: string;
  isVerified: boolean;
}

const agents: Agent[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    photo: "/placeholder.svg",
    rating: 4.8,
    reviews: 127,
    experience: "8+ years",
    specialization: ["Luxury Homes", "Commercial", "Investment"],
    location: "Mumbai, Maharashtra",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@property.com",
    properties: 89,
    description: "Experienced real estate agent specializing in luxury properties in Mumbai. Helping clients find their dream homes for over 8 years.",
    isVerified: true
  },
  {
    id: "2",
    name: "Priya Sharma",
    photo: "/placeholder.svg",
    rating: 4.9,
    reviews: 203,
    experience: "12+ years",
    specialization: ["Residential", "New Projects", "Rental"],
    location: "Delhi, New Delhi",
    phone: "+91 87654 32109",
    email: "priya.sharma@property.com",
    properties: 156,
    description: "Top-rated agent in Delhi with expertise in residential properties and new project launches. Known for personalized service.",
    isVerified: true
  },
  {
    id: "3",
    name: "Amit Singh",
    photo: "/placeholder.svg",
    rating: 4.7,
    reviews: 95,
    experience: "6+ years",
    specialization: ["Tech Hub Properties", "Investment", "Rental"],
    location: "Bangalore, Karnataka",
    phone: "+91 76543 21098",
    email: "amit.singh@property.com",
    properties: 72,
    description: "Specialist in IT corridor properties in Bangalore. Helping tech professionals find perfect homes near their workplaces.",
    isVerified: true
  },
  {
    id: "4",
    name: "Sunita Patel",
    photo: "/placeholder.svg",
    rating: 4.6,
    reviews: 84,
    experience: "5+ years",
    specialization: ["Affordable Housing", "First-time Buyers", "Residential"],
    location: "Pune, Maharashtra",
    phone: "+91 65432 10987",
    email: "sunita.patel@property.com",
    properties: 63,
    description: "Dedicated to helping first-time home buyers and finding affordable housing solutions in Pune's growing market.",
    isVerified: true
  },
  {
    id: "5",
    name: "Vikram Reddy",
    photo: "/placeholder.svg",
    rating: 4.8,
    reviews: 118,
    experience: "10+ years",
    specialization: ["Commercial", "Industrial", "Investment"],
    location: "Hyderabad, Telangana",
    phone: "+91 54321 09876",
    email: "vikram.reddy@property.com",
    properties: 94,
    description: "Commercial real estate expert in Hyderabad with deep knowledge of industrial and investment properties.",
    isVerified: true
  },
  {
    id: "6",
    name: "Meera Nair",
    photo: "/placeholder.svg",
    rating: 4.9,
    reviews: 167,
    experience: "9+ years",
    specialization: ["Luxury Homes", "Waterfront", "Residential"],
    location: "Chennai, Tamil Nadu",
    phone: "+91 43210 98765",
    email: "meera.nair@property.com",
    properties: 112,
    description: "Luxury property specialist in Chennai with expertise in waterfront properties and high-end residential developments.",
    isVerified: true
  }
];

const Agents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredAgents = agents
    .filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           agent.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCity = selectedCity === "all" || agent.location.toLowerCase().includes(selectedCity);
      const matchesSpecialization = selectedSpecialization === "all" || 
                                   agent.specialization.some(spec => spec.toLowerCase().includes(selectedSpecialization));
      return matchesSearch && matchesCity && matchesSpecialization;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "experience":
          return parseInt(b.experience) - parseInt(a.experience);
        case "properties":
          return b.properties - a.properties;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Real Estate Agents</h1>
          <p className="text-muted-foreground">
            Connect with verified real estate professionals in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg border border-border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
              <SelectTrigger>
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specializations</SelectItem>
                <SelectItem value="luxury">Luxury Homes</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="investment">Investment</SelectItem>
                <SelectItem value="rental">Rental</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
                <SelectItem value="properties">Most Properties</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAgents.length} agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <Card key={agent.id} className="group hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {agent.isVerified && (
                      <div className="absolute -top-1 -right-1 bg-primary rounded-full p-1">
                        <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{agent.name}</h3>
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{agent.rating}</span>
                      <span className="text-sm text-muted-foreground">({agent.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {agent.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{agent.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {agent.specialization.slice(0, 3).map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Experience:</span>
                      <p className="font-medium">{agent.experience}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Properties:</span>
                      <p className="font-medium">{agent.properties}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No agents found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCity("all");
                setSelectedSpecialization("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Agents;