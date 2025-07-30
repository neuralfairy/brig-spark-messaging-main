import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: MessageSquare,
      title: "Message Optimization",
      description: "AI-powered analysis and optimization of your messaging for maximum conversion impact.",
      features: ["A/B Testing", "Sentiment Analysis", "Tone Optimization", "Multi-channel Testing"]
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Precision targeting strategies that ensure your message reaches the right decision-makers.",
      features: ["Persona Development", "Behavioral Segmentation", "Intent Mapping", "Channel Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Conversion Analytics",
      description: "Deep insights into messaging performance with actionable recommendations for improvement.",
      features: ["Real-time Metrics", "Conversion Tracking", "ROI Analysis", "Performance Dashboards"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for sales teams and agencies to align on messaging strategy.",
      features: ["Team Workspaces", "Version Control", "Approval Workflows", "Role-based Access"]
    },
    {
      icon: BarChart3,
      title: "Performance Insights",
      description: "Comprehensive reporting and analytics to measure and improve messaging effectiveness.",
      features: ["Custom Reports", "Competitor Analysis", "Market Insights", "Trend Forecasting"]
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Automate messaging workflows and optimization processes for maximum efficiency.",
      features: ["Auto-optimization", "Smart Scheduling", "Workflow Automation", "API Integration"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful Features for
            <span className="text-brand-orange block">Messaging Success</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the comprehensive suite of tools and features that make Brigagency 
            the leading choice for messaging strategy optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                Try Interactive Demo
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-navy" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Everything You Need for Messaging Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools, insights, and automation 
              you need to create and optimize high-converting messaging strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-elevation transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-brand-navy">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-brand-orange" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing tools and workflows for a unified messaging strategy approach.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Salesforce", "HubSpot", "Pipedrive", "Slack", "Microsoft Teams", "Zapier",
              "Mailchimp", "Marketo", "Pardot", "Zoho", "Monday.com", "Asana"
            ].map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600">{integration.substring(0, 2)}</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{integration}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline_brand" size="lg" asChild>
              <a href="https://salescentri.com/solutions/psa-suite/integrations">
                View All Integrations
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of sales teams and agencies who trust Brigagency for their messaging strategy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="https://salescentri.com/get-started/book-demo">
                Book a Demo
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-navy" asChild>
              <a href="https://salescentri.com/pricing/free-trial">
                Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;