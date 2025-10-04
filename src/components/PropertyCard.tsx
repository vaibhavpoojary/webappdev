import { Heart, MapPin, Bed, Bath, Maximize, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: "house" | "apartment" | "plot" | "commercial";
  listingType?: "sale" | "rent";
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  className?: string;
}

const PropertyCard = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  type,
  listingType,
  images,
  isNew = false,
  isFeatured = false,
  className
}: PropertyCardProps) => {
  return (
    <Link to={`/property/${id}`}>
      <Card className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-card-hover border-card-border",
        isFeatured && "ring-2 ring-primary/20",
        className
      )}>
        <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-lg aspect-[4/3]">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay with badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Top badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isNew && (
              <Badge className="bg-primary text-primary-foreground">
                New
              </Badge>
            )}
            {isFeatured && (
              <Badge variant="secondary">
                Featured
              </Badge>
            )}
          </div>
          
          {/* Image count */}
          {images.length > 1 && (
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Camera className="h-3 w-3" />
                {images.length}
              </Badge>
            </div>
          )}
          
          {/* Favorite button */}
          <Button
            size="sm"
            variant="secondary"
            className="absolute bottom-3 right-3 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Price */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-xl font-bold text-property-price">
              {price}
            </p>
            <Badge variant="outline" className="capitalize">
              {type}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-card-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Location */}
          <div className="flex items-center text-property-location mb-3">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{location}</span>
          </div>

          {/* Property stats */}
          <div className="flex items-center justify-between text-property-stats">
            <div className="flex items-center space-x-4">
              {bedrooms > 0 && (
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span className="text-sm">{bedrooms}</span>
                </div>
              )}
              {bathrooms > 0 && (
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span className="text-sm">{bathrooms}</span>
                </div>
              )}
              <div className="flex items-center">
                <Maximize className="h-4 w-4 mr-1" />
                <span className="text-sm">{area}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};

export default PropertyCard;