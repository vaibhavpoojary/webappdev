import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import { featuredProperties } from "@/data/sampleProperties";

const FeaturedListings = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Featured Properties
            </h2>
            <p className="text-muted-foreground">
              Handpicked premium properties in prime locations
            </p>
          </div>
          <Link to="/properties">
            <Button variant="outline" className="hidden sm:flex items-center gap-2">
              View All Properties
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Properties grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.slice(0, 6).map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <PropertyCard
                id={property.id}
                title={property.title}
                price={property.price}
                location={property.location}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                type={property.type}
                images={property.images}
                isNew={property.isNew}
                isFeatured={property.isFeatured}
              />
            </Link>
          ))}
        </div>

        {/* Mobile view all button */}
        <div className="mt-8 text-center sm:hidden">
          <Link to="/properties">
            <Button className="w-full sm:w-auto">
              View All Properties
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;