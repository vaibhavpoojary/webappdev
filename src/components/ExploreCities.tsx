import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cities } from "@/data/sampleProperties";

const ExploreCities = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore Properties by City
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover amazing properties in Pakistan's major cities. From bustling metropolises 
            to peaceful residential areas, find your perfect home.
          </p>
        </div>

        {/* Cities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link key={city.id} to={`/properties?city=${city.id}`}>
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover border-card-border overflow-hidden">
                <CardContent className="p-0">
                  {/* City image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={city.image}
                      alt={`Properties in ${city.name}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* City info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{city.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{city.description}</p>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{city.propertyCount} properties</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Link to="/properties">
            <Button size="lg" className="group">
              Explore All Locations
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreCities;