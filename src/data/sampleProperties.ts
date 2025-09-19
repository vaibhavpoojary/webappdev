export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: "house" | "apartment" | "plot" | "commercial";
  listingType: "sale" | "rent";
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  description?: string;
  amenities?: string[];
}

export const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Villa in South Delhi",
    price: "₹5.5 Crore",
    location: "Greater Kailash, New Delhi",
    bedrooms: 5,
    bathrooms: 6,
    area: "4500 sq ft",
    type: "house",
    listingType: "sale",
    images: ["/placeholder.svg"],
    isNew: true,
    isFeatured: true,
    description: "Beautiful luxury villa with modern amenities and prime location",
    amenities: ["Swimming Pool", "Garden", "Parking", "Security"]
  },
  {
    id: "2",
    title: "Modern Apartment in Bandra",
    price: "₹2.8 Crore",
    location: "Bandra West, Mumbai",
    bedrooms: 3,
    bathrooms: 2,
    area: "1200 sq ft",
    type: "apartment",
    listingType: "sale",
    images: ["/placeholder.svg"],
    isFeatured: true,
    description: "Contemporary apartment with sea views and modern facilities",
    amenities: ["Gym", "Elevator", "Parking", "24/7 Security"]
  },
  {
    id: "3",
    title: "Commercial Space in Cyber City",
    price: "₹12 Crore",
    location: "Cyber City, Gurgaon",
    bedrooms: 0,
    bathrooms: 0,
    area: "5000 sq ft",
    type: "commercial",
    listingType: "sale",
    images: ["/placeholder.svg"],
    isNew: true,
    description: "Prime commercial space in the heart of Gurgaon's IT hub",
    amenities: ["Main Road", "Corner Plot", "Metro Connectivity"]
  },
  {
    id: "4",
    title: "Sea View Apartment in Marine Drive",
    price: "₹8.5 Crore",
    location: "Marine Drive, Mumbai",
    bedrooms: 4,
    bathrooms: 3,
    area: "2200 sq ft",
    type: "apartment",
    listingType: "sale",
    images: ["/placeholder.svg"],
    isFeatured: true,
    description: "Stunning sea view apartment with premium finishes",
    amenities: ["Sea View", "Balcony", "Parking", "Power Backup"]
  },
  {
    id: "5",
    title: "Villa in Whitefield",
    price: "₹1.8 Crore",
    location: "Whitefield, Bangalore",
    bedrooms: 4,
    bathrooms: 3,
    area: "3200 sq ft",
    type: "house",
    listingType: "sale",
    images: ["/placeholder.svg"],
    isNew: true,
    description: "Well-designed villa in IT corridor with modern amenities",
    amenities: ["Gated Community", "Club House", "Swimming Pool"]
  },
  {
    id: "6",
    title: "Penthouse in Koramangala",
    price: "₹4.2 Crore",
    location: "Koramangala, Bangalore",
    bedrooms: 4,
    bathrooms: 4,
    area: "3500 sq ft",
    type: "apartment",
    listingType: "sale",
    images: ["/placeholder.svg"],
    isFeatured: true,
    description: "Luxurious penthouse with panoramic city views",
    amenities: ["Rooftop Terrace", "Private Elevator", "Premium Location"]
  },
  {
    id: "7",
    title: "Spacious Apartment for Rent in Andheri",
    price: "₹85,000/month",
    location: "Andheri West, Mumbai",
    bedrooms: 2,
    bathrooms: 2,
    area: "950 sq ft",
    type: "apartment",
    listingType: "rent",
    images: ["/placeholder.svg"],
    isFeatured: true,
    description: "Fully furnished apartment with modern amenities",
    amenities: ["Furnished", "Gym", "Swimming Pool", "Parking"]
  },
  {
    id: "8",
    title: "Office Space for Rent in Connaught Place",
    price: "₹3,50,000/month",
    location: "Connaught Place, New Delhi",
    bedrooms: 0,
    bathrooms: 2,
    area: "2500 sq ft",
    type: "commercial",
    listingType: "rent",
    images: ["/placeholder.svg"],
    isNew: true,
    description: "Prime commercial space in the heart of Delhi",
    amenities: ["Central AC", "Elevator", "Parking", "Metro Connectivity"]
  },
  {
    id: "9",
    title: "3BHK House for Rent in Jayanagar",
    price: "₹45,000/month",
    location: "Jayanagar, Bangalore",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq ft",
    type: "house",
    listingType: "rent",
    images: ["/placeholder.svg"],
    description: "Independent house with garden and parking",
    amenities: ["Garden", "Parking", "Semi-Furnished", "Pet Friendly"]
  }
];

export const cities = [
  {
    id: "mumbai",
    name: "Mumbai",
    propertyCount: "25,000+",
    image: "/placeholder.svg",
    description: "Financial capital with premium properties"
  },
  {
    id: "delhi",
    name: "New Delhi",
    propertyCount: "18,000+",
    image: "/placeholder.svg",
    description: "Capital city with diverse real estate"
  },
  {
    id: "bangalore",
    name: "Bangalore",
    propertyCount: "15,000+",
    image: "/placeholder.svg",
    description: "IT hub with modern developments"
  },
  {
    id: "pune",
    name: "Pune",
    propertyCount: "12,000+",
    image: "/placeholder.svg",
    description: "Educational hub with growing market"
  },
  {
    id: "chennai",
    name: "Chennai",
    propertyCount: "10,000+",
    image: "/placeholder.svg",
    description: "South India's gateway with coastal properties"
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    propertyCount: "8,500+",
    image: "/placeholder.svg",
    description: "Cyberabad with emerging real estate"
  }
];