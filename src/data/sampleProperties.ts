// Import property images
import villaDelhi1 from "@/assets/villa-delhi-1.jpg";
import villaDelhi2 from "@/assets/villa-delhi-2.jpg";
import apartmentMumbai1 from "@/assets/apartment-mumbai-1.jpg";
import apartmentMumbai2 from "@/assets/apartment-mumbai-2.jpg";
import commercialGurgaon1 from "@/assets/commercial-gurgaon-1.jpg";
import seaviewMumbai1 from "@/assets/seaview-mumbai-1.jpg";
import villaBangalore1 from "@/assets/villa-bangalore-1.jpg";
import penthouseBangalore1 from "@/assets/penthouse-bangalore-1.jpg";
import rentalMumbai1 from "@/assets/rental-mumbai-1.jpg";
import officeDelhi1 from "@/assets/office-delhi-1.jpg";
import houseBangalore1 from "@/assets/house-bangalore-1.jpg";

// Import city images
import mumbaiCity from "@/assets/mumbai-city.jpg";
import delhiCity from "@/assets/delhi-city.jpg";
import bangaloreCity from "@/assets/bangalore-city.jpg";
import puneCity from "@/assets/pune-city.jpg";
import chennaiCity from "@/assets/chennai-city.jpg";
import hyderabadCity from "@/assets/hyderabad-city.jpg";

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
    images: [villaDelhi1, villaDelhi2],
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
    images: [apartmentMumbai1, apartmentMumbai2],
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
    images: [commercialGurgaon1],
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
    images: [seaviewMumbai1, apartmentMumbai2],
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
    images: [villaBangalore1, villaDelhi2],
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
    images: [penthouseBangalore1, apartmentMumbai1],
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
    images: [rentalMumbai1, apartmentMumbai2],
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
    images: [officeDelhi1, commercialGurgaon1],
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
    images: [houseBangalore1, villaBangalore1],
    description: "Independent house with garden and parking",
    amenities: ["Garden", "Parking", "Semi-Furnished", "Pet Friendly"]
  }
];

export const cities = [
  {
    id: "mumbai",
    name: "Mumbai",
    propertyCount: "25,000+",
    image: mumbaiCity,
    description: "Financial capital with premium properties"
  },
  {
    id: "delhi",
    name: "New Delhi",
    propertyCount: "18,000+",
    image: delhiCity,
    description: "Capital city with diverse real estate"
  },
  {
    id: "bangalore",
    name: "Bangalore",
    propertyCount: "15,000+",
    image: bangaloreCity,
    description: "IT hub with modern developments"
  },
  {
    id: "pune",
    name: "Pune",
    propertyCount: "12,000+",
    image: puneCity,
    description: "Educational hub with growing market"
  },
  {
    id: "chennai",
    name: "Chennai",
    propertyCount: "10,000+",
    image: chennaiCity,
    description: "South India's gateway with coastal properties"
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    propertyCount: "8,500+",
    image: hyderabadCity,
    description: "Cyberabad with emerging real estate"
  }
];