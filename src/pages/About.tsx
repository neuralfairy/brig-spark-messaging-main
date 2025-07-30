import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Linkedin,
  Mail,
  MapPin,
  Calendar
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Fortune 500 company. 15+ years in B2B sales strategy and messaging optimization.",
      expertise: ["Strategic Leadership", "B2B Sales", "Team Building"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Strategy",
      bio: "Ex-McKinsey consultant specializing in go-to-market strategies and conversion optimization for SaaS companies.",
      expertise: ["Strategy Consulting", "Data Analytics", "Process Optimization"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Emily Thompson",
      role: "Lead Messaging Strategist",
      bio: "Psychology PhD turned messaging expert. Helped 200+ companies improve their conversion rates through behavioral insights.",
      expertise: ["Behavioral Psychology", "Messaging Strategy", "A/B Testing"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Kim",
      role: "Head of Technology",
      bio: "Former tech lead at major CRM platforms. Expert in sales automation and AI-powered messaging optimization.",
      expertise: ["Sales Technology", "AI/ML", "Platform Integration"],
      image: "/api/placeholder/150/150"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Served", icon: Users },
    { number: "2.5x", label: "Average Conversion Increase", icon: TrendingUp },
    { number: "95%", label: "Client Retention Rate", icon: Award },
    { number: "$50M+", label: "Revenue Generated for Clients", icon: Target }
  ];

  const values = [
    {
      title: "Data-Driven Excellence",
      description: "Every strategy is backed by comprehensive data analysis and proven methodologies.",
      icon: TrendingUp
    },
    {
      title: "Client Success First",
      description: "Our success is measured by the measurable impact we create for our clients.",
      icon: Target
    },
    {
      title: "Continuous Innovation",
      description: "We constantly evolve our approaches based on industry trends and client feedback.",
      icon: Award
    },
    {
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, ensuring seamless integration and knowledge transfer.",
      icon: Users
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="text-brand-orange block">Brigagency Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of messaging strategists, data scientists, and conversion experts 
              dedicated to helping B2B companies transform their sales communication and drive measurable results.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href="https://salescentri.com/company/about-us/leadership-team">
                Meet Our Leadership Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To revolutionize how B2B companies communicate with their prospects and customers 
                by providing data-driven messaging strategies that consistently deliver measurable 
                conversion improvements.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in Chicago in 2019, Brigagency was born from the realization that most 
                sales teams struggle not with lead generation, but with converting those leads 
                into customers. The problem? Ineffective messaging that fails to resonate with 
                modern B2B buyers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline_brand" size="lg" asChild>
                  <a href="https://salescentri.com/company/careers">
                    Join Our Team
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a href="https://salescentri.com/company/partners-affiliates">
                    Partner With Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 text-brand-orange mx-auto mb-4" />
                    <div className="text-3xl font-bold text-brand-navy mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients, partners, and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the messaging strategists and conversion experts who make the magic happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">{member.name}</h3>
                  <p className="text-brand-orange font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chicago Office Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Based in Chicago
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our headquarters in the heart of Chicago puts us at the center of the Midwest's 
                thriving business community. We're proud to serve clients locally and globally 
                from our state-of-the-art office in the Loop.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-orange" />
                  <span className="text-muted-foreground">123 W Madison St, Chicago, IL 60602</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-brand-orange" />
                  <span className="text-muted-foreground">Monday - Friday, 9:00 AM - 6:00 PM CST</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-orange" />
                  <span className="text-muted-foreground">hello@brigagency.com</span>
                </div>
              </div>
              <Button variant="outline_brand" size="lg" asChild>
                <a href="https://salescentri.com/contact">
                  Visit Our Office
                </a>
              </Button>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Visit Our Chicago Office
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a visit to our Chicago headquarters and meet our team in person.
              </p>
              <Button variant="cta" asChild>
                <a href="https://salescentri.com/get-started/calendly">
                  Schedule Office Visit
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our messaging strategy expertise can help transform your sales results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="https://salescentri.com/get-started/book-demo">
                Book a Strategy Session
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-navy" asChild>
              <a href="https://salescentri.com/contact/partnerships/partner-inquiry">
                Partner With Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;