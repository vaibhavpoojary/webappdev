import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share2, MapPin, Bed, Bath, Maximize, Car, Wifi, Shield, Trees, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { featuredProperties } from "@/data/sampleProperties";

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the property (in real app, this would be an API call)
  const property = featuredProperties.find(p => p.id === id) || featuredProperties[0];

  const amenityIcons = {
    "Swimming Pool": Trees,
    "Garden": Trees,
    "Parking": Car,
    "Security": Shield,
    "Gym": Dumbbell,
    "Elevator": Maximize,
    "24/7 Security": Shield,
    "Sea View": MapPin,
    "Balcony": Trees,
    "Generator Backup": Shield,
    "Gated Community": Shield,
    "Utilities": Wifi,
    "Parks Nearby": Trees,
    "Main Road": MapPin,
    "Corner Plot": MapPin,
    "Utilities Available": Wifi,
    "Rooftop Terrace": Trees,
    "Private Elevator": Maximize,
    "Premium Location": MapPin
  };

  const mockImages = [
    "/placeholder.svg",
    "/placeholder.svg", 
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link to="/properties">
          <Button variant="outline" size="sm" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={mockImages[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation dots */}
                  {mockImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {mockImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Thumbnail strip */}
                {mockImages.length > 1 && (
                  <div className="flex gap-2 p-4 overflow-x-auto">
                    {mockImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                          index === currentImageIndex ? "border-primary" : "border-transparent"
                        }`}
                      >
                        <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Property details */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-2xl font-bold text-foreground">{property.title}</h1>
                      {property.isNew && <Badge>New</Badge>}
                      {property.isFeatured && <Badge variant="secondary">Featured</Badge>}
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">{property.price}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Property stats */}
                <div className="flex items-center gap-6 mb-6 p-4 bg-muted/50 rounded-lg">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 text-muted-foreground mr-2" />
                      <span className="font-medium">{property.bedrooms} Beds</span>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 text-muted-foreground mr-2" />
                      <span className="font-medium">{property.bathrooms} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Maximize className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="font-medium">{property.area}</span>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {property.type}
                  </Badge>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-lg font-semibold mb-3">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description || "This beautiful property offers modern living with excellent amenities and prime location. Perfect for families looking for comfort and convenience in a well-developed area with easy access to schools, hospitals, and shopping centers."}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(property.amenities || ["Parking", "Security", "Garden", "24/7 Security"]).map((amenity) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Shield;
                    return (
                      <div key={amenity} className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Location</h2>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact seller */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Contact Seller</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Ahmad Shah</p>
                    <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full">Call Now</Button>
                  <Button variant="outline" className="w-full">Send Message</Button>
                  <Button variant="outline" className="w-full">Email Seller</Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Property Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Listed</span>
                    <span>2 days ago</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Views</span>
                    <span>124</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property ID</span>
                    <span>#{property.id}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar properties */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.slice(0, 3).map((similarProperty) => (
              <Link key={similarProperty.id} to={`/property/${similarProperty.id}`}>
                <PropertyCard
                  id={similarProperty.id}
                  title={similarProperty.title}
                  price={similarProperty.price}
                  location={similarProperty.location}
                  bedrooms={similarProperty.bedrooms}
                  bathrooms={similarProperty.bathrooms}
                  area={similarProperty.area}
                  type={similarProperty.type}
                  images={similarProperty.images}
                  isNew={similarProperty.isNew}
                  isFeatured={similarProperty.isFeatured}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;