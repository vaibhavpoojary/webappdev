import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  const features = [
    {
      icon: Building2,
      title: "List Your Property",
      description: "Reach thousands of potential buyers and renters with our premium listing service"
    },
    {
      icon: Users,
      title: "Professional Support",
      description: "Get expert guidance from our team of real estate professionals"
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All properties are thoroughly verified for authenticity and accuracy"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Access detailed market analytics and pricing trends in your area"
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Sell Your Property?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful sellers on Property.com. List your property today 
            and connect with serious buyers across Pakistan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/seller/dashboard">
              <Button size="lg" className="w-full sm:w-auto group">
                List Your Property Today
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-card-border">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50K+</div>
            <div className="text-muted-foreground">Properties Listed</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">25K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-muted-foreground">Expert Agents</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">15</div>
            <div className="text-muted-foreground">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;