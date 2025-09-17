export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: "house" | "apartment" | "plot" | "commercial";
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  description?: string;
  amenities?: string[];
}

export const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Villa in DHA Phase 6",
    price: "PKR 2.5 Crore",
    location: "DHA Phase 6, Lahore",
    bedrooms: 5,
    bathrooms: 6,
    area: "1 Kanal",
    type: "house",
    images: ["/placeholder.svg"],
    isNew: true,
    isFeatured: true,
    description: "Beautiful luxury villa with modern amenities and prime location",
    amenities: ["Swimming Pool", "Garden", "Parking", "Security"]
  },
  {
    id: "2",
    title: "Modern Apartment in Gulberg",
    price: "PKR 85 Lac",
    location: "Gulberg III, Lahore",
    bedrooms: 3,
    bathrooms: 2,
    area: "1200 sq ft",
    type: "apartment",
    images: ["/placeholder.svg"],
    isFeatured: true,
    description: "Contemporary apartment with city views and modern facilities",
    amenities: ["Gym", "Elevator", "Parking", "24/7 Security"]
  },
  {
    id: "3",
    title: "Commercial Plot in Blue Area",
    price: "PKR 5 Crore",
    location: "Blue Area, Islamabad",
    bedrooms: 0,
    bathrooms: 0,
    area: "8 Marla",
    type: "commercial",
    images: ["/placeholder.svg"],
    isNew: true,
    description: "Prime commercial plot in the heart of Islamabad's business district",
    amenities: ["Main Road", "Corner Plot", "Utilities Available"]
  },
  {
    id: "4",
    title: "Sea View Apartment in Clifton",
    price: "PKR 1.8 Crore",
    location: "Clifton Block 2, Karachi",
    bedrooms: 4,
    bathrooms: 3,
    area: "2200 sq ft",
    type: "apartment",
    images: ["/placeholder.svg"],
    isFeatured: true,
    description: "Stunning sea view apartment with premium finishes",
    amenities: ["Sea View", "Balcony", "Parking", "Generator Backup"]
  },
  {
    id: "5",
    title: "Residential Plot in Bahria Town",
    price: "PKR 65 Lac",
    location: "Bahria Town Phase 4, Rawalpindi",
    bedrooms: 0,
    bathrooms: 0,
    area: "10 Marla",
    type: "plot",
    images: ["/placeholder.svg"],
    isNew: true,
    description: "Well-located residential plot in developed sector",
    amenities: ["Gated Community", "Utilities", "Parks Nearby"]
  },
  {
    id: "6",
    title: "Penthouse in F-7 Sector",
    price: "PKR 3.2 Crore",
    location: "F-7/3, Islamabad",
    bedrooms: 4,
    bathrooms: 4,
    area: "3500 sq ft",
    type: "apartment",
    images: ["/placeholder.svg"],
    isFeatured: true,
    description: "Luxurious penthouse with panoramic city views",
    amenities: ["Rooftop Terrace", "Private Elevator", "Premium Location"]
  }
];

export const cities = [
  {
    id: "karachi",
    name: "Karachi",
    propertyCount: "15,000+",
    image: "/placeholder.svg",
    description: "Pakistan's largest city and commercial hub"
  },
  {
    id: "lahore",
    name: "Lahore",
    propertyCount: "12,000+",
    image: "/placeholder.svg",
    description: "Cultural capital with historic charm"
  },
  {
    id: "islamabad",
    name: "Islamabad",
    propertyCount: "8,000+",
    image: "/placeholder.svg",
    description: "Modern capital city with planned development"
  },
  {
    id: "rawalpindi",
    name: "Rawalpindi",
    propertyCount: "6,500+",
    image: "/placeholder.svg",
    description: "Twin city with excellent connectivity"
  },
  {
    id: "faisalabad",
    name: "Faisalabad",
    propertyCount: "4,200+",
    image: "/placeholder.svg",
    description: "Industrial hub with growing residential market"
  },
  {
    id: "multan",
    name: "Multan",
    propertyCount: "3,100+",
    image: "/placeholder.svg",
    description: "Historic city with emerging real estate"
  }
];