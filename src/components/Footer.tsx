import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Property.com</span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm">
              Pakistan's leading real estate platform connecting buyers, sellers, and renters 
              with verified properties across major cities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/properties?type=buy" className="text-muted-foreground hover:text-primary transition-colors">
                  Buy Properties
                </Link>
              </li>
              <li>
                <Link to="/properties?type=rent" className="text-muted-foreground hover:text-primary transition-colors">
                  Rent Properties
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-muted-foreground hover:text-primary transition-colors">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Agents
                </Link>
              </li>
              <li>
                <Link to="/property-guides" className="text-muted-foreground hover:text-primary transition-colors">
                  Property Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Popular Cities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/properties?city=karachi" className="text-muted-foreground hover:text-primary transition-colors">
                  Properties in Karachi
                </Link>
              </li>
              <li>
                <Link to="/properties?city=lahore" className="text-muted-foreground hover:text-primary transition-colors">
                  Properties in Lahore
                </Link>
              </li>
              <li>
                <Link to="/properties?city=islamabad" className="text-muted-foreground hover:text-primary transition-colors">
                  Properties in Islamabad
                </Link>
              </li>
              <li>
                <Link to="/properties?city=rawalpindi" className="text-muted-foreground hover:text-primary transition-colors">
                  Properties in Rawalpindi
                </Link>
              </li>
              <li>
                <Link to="/properties?city=faisalabad" className="text-muted-foreground hover:text-primary transition-colors">
                  Properties in Faisalabad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Office 123, Business Plaza<br />
                  Main Boulevard, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">+92 42 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">info@property.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Property.com. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;