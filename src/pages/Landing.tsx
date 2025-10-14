import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, FolderKanban, DollarSign, GraduationCap, MessageSquare, BarChart3 } from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Beneficiary Registration",
      description: "Easy and secure registration process for scheme beneficiaries",
    },
    {
      icon: FolderKanban,
      title: "Project Tracking",
      description: "Real-time monitoring of project progress and milestones",
    },
    {
      icon: DollarSign,
      title: "Fund Management",
      description: "Transparent tracking of fund allocation and utilization",
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description: "Access to training programs and certification courses",
    },
    {
      icon: MessageSquare,
      title: "Grievance Redressal",
      description: "Quick resolution system for beneficiary complaints",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and data-driven decision making",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Pradhan Mantri Ayushman Yojana
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              Digital platform for comprehensive healthcare scheme management, empowering beneficiaries and streamlining administrative processes
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Button asChild size="lg" variant="secondary" className="shadow-lg">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground text-lg">Comprehensive tools for effective scheme management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">10L+</h3>
              <p className="text-muted-foreground">Beneficiaries</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</h3>
              <p className="text-muted-foreground">Active Projects</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">₹250Cr</h3>
              <p className="text-muted-foreground">Funds Allocated</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</h3>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
