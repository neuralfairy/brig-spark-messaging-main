import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  MessageSquare, 
  TrendingUp, 
  Target, 
  Users, 
  CheckCircle,
  Star,
  BarChart3,
  Zap,
  Shield,
  Award,
  Quote,
  Calculator,
  Play
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Message Optimization",
      description: "Leverage advanced algorithms to craft messages that resonate with your audience and drive conversions."
    },
    {
      icon: Target,
      title: "Precision Audience Targeting", 
      description: "Identify and target the right decision-makers with messaging that speaks directly to their needs."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Performance Analytics",
      description: "Track your messaging performance with detailed analytics and actionable insights for continuous improvement."
    },
    {
      icon: Zap,
      title: "Automated A/B Testing",
      description: "Continuously test and optimize your messaging strategies with our automated testing framework."
    }
  ];

  const benefits = [
    { stat: "145%", label: "Average Conversion Increase" },
    { stat: "3x", label: "Faster Sales Cycles" },
    { stat: "95%", label: "Client Retention Rate" },
    { stat: "500+", label: "Companies Served" }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      content: "Brigagency transformed our messaging strategy and increased our demo conversion rate by 180%. Their data-driven approach is exactly what our sales team needed.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Head of Marketing", 
      company: "DataSync Pro",
      content: "Working with Brigagency was a game-changer. Our email response rates doubled, and our sales cycle shortened by 40%. Incredible ROI.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Founder",
      company: "CloudScale Inc",
      content: "The messaging optimization framework from Brigagency helped us achieve our best quarter ever. Professional, results-driven, and highly recommended.",
      rating: 5
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Slack", "Microsoft Teams", "Zapier",
    "Mailchimp", "Marketo", "Zoho", "Monday.com", "Asana", "Intercom"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-brand-orange text-white">
                <Award className="w-4 h-4 mr-2" />
                #1 Messaging Strategy Platform
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="text-brand-orange block">Messaging Strategy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Boost conversion rates by up to 145% with data-driven messaging 
                optimization. Trusted by 500+ B2B companies worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://salescentri.com/get-started/free-trial">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-navy" asChild>
                  <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-orange" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-orange" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-orange" />
                  <span>Setup in minutes</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-subtle rounded-2xl p-8 shadow-elevation">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-brand-navy">Messaging Performance</h3>
                    <Badge className="bg-green-100 text-green-800">+145% Conversion</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Email Response Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-20 h-2 bg-brand-orange rounded-full"></div>
                        </div>
                        <span className="font-semibold text-brand-navy">82%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Demo Booking Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-brand-orange rounded-full"></div>
                        </div>
                        <span className="font-semibold text-brand-navy">67%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Proposal Acceptance</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-22 h-2 bg-brand-orange rounded-full"></div>
                        </div>
                        <span className="font-semibold text-brand-navy">91%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8 text-sm font-medium">
            TRUSTED BY LEADING B2B COMPANIES
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {integrations.slice(0, 6).map((company, index) => (
              <div key={index} className="text-center">
                <div className="h-8 flex items-center justify-center">
                  <span className="font-semibold text-muted-foreground">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">
              Proven Results That Drive Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our data-driven messaging strategies deliver measurable improvements 
              across all key conversion metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2 group-hover:scale-110 transition-transform">
                    {benefit.stat}
                  </div>
                  <p className="text-muted-foreground font-medium">{benefit.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">
              Everything You Need for Messaging Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and insights to optimize every aspect of your messaging strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 group hover:shadow-elevation transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <a href="/features">
                Explore All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Calculate Your Potential ROI
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                See how much revenue you could generate with optimized messaging. 
                Our clients typically see 3-5x ROI within the first quarter.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-orange" />
                  <span>Increased conversion rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-orange" />
                  <span>Shorter sales cycles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-orange" />
                  <span>Higher deal values</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-orange" />
                  <span>Improved team productivity</span>
                </div>
              </div>
              <Button variant="outline_brand" size="lg" asChild>
                <a href="https://salescentri.com/pricing">
                  View Pricing Plans
                </a>
              </Button>
            </div>
            
            {/* ROI Calculator */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calculator className="h-8 w-8 text-brand-orange" />
                  <CardTitle className="text-2xl text-brand-navy">ROI Calculator</CardTitle>
                </div>
                <CardDescription>
                  Enter your current metrics to see potential improvements
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Monthly Leads
                    </label>
                    <Input placeholder="e.g., 500" defaultValue="500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Current Conversion Rate (%)
                    </label>
                    <Input placeholder="e.g., 2.5" defaultValue="2.5" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Average Deal Value ($)
                    </label>
                    <Input placeholder="e.g., 5000" defaultValue="5000" />
                  </div>
                </div>
                
                <div className="bg-gradient-subtle rounded-lg p-6 space-y-3">
                  <h4 className="font-semibold text-brand-navy">Projected Results with Brigagency:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Current Monthly Revenue:</span>
                      <span className="font-semibold">$62,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Optimized Monthly Revenue:</span>
                      <span className="font-semibold text-brand-orange">$153,125</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>Monthly Increase:</span>
                      <span className="font-bold text-brand-orange">+$90,625</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="cta" className="w-full" asChild>
                  <a href="https://salescentri.com/get-started/book-demo">
                    Get Detailed Analysis
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what leading companies say about their results with Brigagency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 h-full">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-brand-orange mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline_brand" size="lg" asChild>
              <a href="https://salescentri.com/resources/case-studies">
                Read More Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data security is our priority. We maintain the highest standards of security and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "SOC 2 Type II", description: "Certified secure" },
              { icon: Award, title: "GDPR Compliant", description: "Privacy protected" },
              { icon: CheckCircle, title: "SSL Encryption", description: "Data encrypted" },
              { icon: Users, title: "Role-Based Access", description: "Controlled permissions" }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <item.icon className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="font-semibold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="ghost" asChild>
              <a href="https://salescentri.com/trust/security-privacy">
                Learn More About Our Security
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Messaging?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 500+ companies that have boosted their conversion rates with Brigagency. 
            Start your free trial today and see results within weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="xl" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-navy" asChild>
              <a href="https://salescentri.com/get-started/book-demo">
                Book a Demo
              </a>
            </Button>
          </div>
          <p className="text-gray-300 text-sm">
            14-day free trial • No credit card required • Setup in minutes
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
