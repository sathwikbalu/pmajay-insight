import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UserPlus,
  FolderKanban,
  DollarSign,
  GraduationCap,
  MessageSquare,
  BarChart3,
  Target,
  Users,
  Rocket,
  Heart,
  Building,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Landing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const impactStats = [
    {
      icon: DollarSign,
      value: "₹250+ Cr",
      label: "Funds Allocated",
      color: "primary",
    },
    {
      icon: FolderKanban,
      value: "500+",
      label: "Development Projects",
      color: "secondary",
    },
    {
      icon: GraduationCap,
      value: "10,000+",
      label: "Skill Training Beneficiaries",
      color: "accent",
    },
    {
      icon: Users,
      value: "5 Lakh+",
      label: "SC Families Benefited",
      color: "primary",
    },
  ];

  const keyFeatures = [
    {
      icon: UserPlus,
      title: "Educational Support",
      description: "Scholarships, coaching programs, and quality education initiatives for SC students from primary to higher education levels",
    },
    {
      icon: DollarSign,
      title: "Direct Benefit Transfer",
      description: "Transparent fund disbursement directly to beneficiary accounts through DBT mechanism for financial assistance",
    },
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Building community centers, sanitation facilities, roads, and essential amenities in SC-dominated villages and habitations",
    },
    {
      icon: Briefcase,
      title: "Livelihood Enhancement",
      description: "Skill development programs, vocational training, entrepreneurship support, and sustainable employment opportunities",
    },
  ];

  const schemeGoals = [
    "Reduce poverty among Scheduled Caste communities through targeted interventions",
    "Enhance educational opportunities and promote quality learning for SC students",
    "Develop infrastructure in SC-dominated areas for improved living standards",
    "Provide skill training and livelihood support for sustainable economic growth",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto max-w-6xl px-4 text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20 shadow-elegant">
                <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Heart className="h-14 w-14 text-primary-foreground" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full animate-ping"></div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            PM-AJAY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-3xl text-primary-foreground/90 mb-4 font-semibold"
          >
            Empowering Marginalized Communities
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto"
          >
            Pradhan Mantri Anusuchit Jaati Abhyuday Yojana - Holistic development initiative for Scheduled Caste communities
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 shadow-elegant hover:shadow-2xl transition-all hover:scale-105">
              <Link to="/register">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/20 text-primary-foreground hover:bg-white/20 shadow-elegant hover:shadow-2xl transition-all hover:scale-105"
            >
              <Link to="/modules/beneficiary-form">
                Check Eligibility
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Scheme Overview Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">Scheme Overview</h2>
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive initiative dedicated to uplifting Scheduled Caste communities through poverty reduction, education enhancement, infrastructure development, and sustainable livelihood opportunities
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Mission Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-primary/5 to-transparent border-primary/10 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To create an equitable society by ensuring comprehensive development of Scheduled Caste communities through quality education, economic empowerment, infrastructure improvement, and social inclusion across India through transparent governance and community participation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Beneficiaries Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-accent/5 to-transparent border-accent/10 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Beneficiaries</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Scheduled Caste (SC) Families Below Poverty Line</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>SC Students & Youth seeking skill development</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>SC Communities in underserved areas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Goals Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {schemeGoals.map((goal, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 backdrop-blur-sm hover:bg-muted transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                </div>
                <p className="text-foreground">{goal}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <BarChart3 className="h-8 w-8 text-secondary" />
              <h2 className="text-4xl md:text-5xl font-bold">Impact & Achievements</h2>
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              Transforming lives across the nation
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="relative overflow-hidden bg-card/50 backdrop-blur-md border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-${stat.color} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Key Features
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support mechanisms designed for holistic community development
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
                  {/* Animated gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <feature.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto max-w-4xl text-center relative z-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-primary-foreground/90 mb-10"
          >
            Join thousands of Scheduled Caste families who have transformed their lives through PM-AJAY
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-7 shadow-elegant hover:shadow-2xl transition-all hover:scale-105"
            >
              <Link to="/register">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 bg-white/10 backdrop-blur-md border-white/20 text-primary-foreground hover:bg-white/20 shadow-elegant hover:shadow-2xl transition-all hover:scale-105"
            >
              <Link to="/modules/beneficiary-form">
                Check Eligibility
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl">PM-AJAY</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Holistic development of Scheduled Caste communities through education, infrastructure, and livelihood support.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/modules/beneficiary-form" className="text-muted-foreground hover:text-primary transition-colors">
                    Beneficiary Registration
                  </Link>
                </li>
                <li>
                  <Link to="/modules/grievance" className="text-muted-foreground hover:text-primary transition-colors">
                    Grievance Redressal
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="text-muted-foreground hover:text-primary transition-colors">
                    Analytics & Reports
                  </Link>
                </li>
                <li>
                  <Link to="/modules/feedback" className="text-muted-foreground hover:text-primary transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ministry Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://socialjustice.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Ministry of Social Justice & Empowerment
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.india.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    National Portal of India
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.digitalindia.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Digital India
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mygov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    MyGov India
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 PM-AJAY. All rights reserved. Government of India.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
