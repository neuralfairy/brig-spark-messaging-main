import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Clock, 
  User, 
  ArrowRight,
  Search,
  TrendingUp,
  MessageSquare,
  Target,
  Users,
  BarChart3,
  BookOpen
} from "lucide-react";

const Blog = () => {
  const categories = [
    { name: "Messaging Strategy", count: 24, color: "bg-brand-orange" },
    { name: "Conversion Optimization", count: 18, color: "bg-brand-navy" },
    { name: "Sales Psychology", count: 15, color: "bg-gradient-accent" },
    { name: "B2B Marketing", count: 12, color: "bg-gradient-primary" },
    { name: "Case Studies", count: 9, color: "bg-brand-orange-light" },
    { name: "Industry Insights", count: 21, color: "bg-brand-navy-light" }
  ];

  const featuredPost = {
    title: "The Psychology Behind High-Converting B2B Messaging: 7 Principles That Drive Action",
    excerpt: "Discover the psychological triggers that make prospects respond to your messaging and how to implement them in your sales strategy for immediate results.",
    author: "Emily Thompson",
    role: "Lead Messaging Strategist",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Messaging Strategy",
    image: "/api/placeholder/600/400"
  };

  const recentPosts = [
    {
      title: "How AI is Revolutionizing Messaging Optimization for B2B Sales Teams",
      excerpt: "Explore how artificial intelligence is transforming the way sales teams craft and optimize their messaging strategies.",
      author: "David Kim",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Technology",
      icon: TrendingUp
    },
    {
      title: "Case Study: How SaaS Company Increased Demo Conversions by 145%",
      excerpt: "A detailed breakdown of the messaging strategy changes that led to remarkable conversion improvements.",
      author: "Marcus Rodriguez",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Case Studies",
      icon: BarChart3
    },
    {
      title: "The Complete Guide to A/B Testing Your Sales Messaging",
      excerpt: "Learn how to systematically test and optimize your sales messaging for better results.",
      author: "Sarah Chen",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Conversion Optimization",
      icon: Target
    },
    {
      title: "Building Buyer Personas That Actually Improve Your Messaging",
      excerpt: "Move beyond basic demographics to create actionable buyer personas that guide messaging strategy.",
      author: "Emily Thompson",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Strategy",
      icon: Users
    },
    {
      title: "The Future of B2B Communication: Trends Every Sales Leader Should Know",
      excerpt: "Stay ahead of the curve with emerging trends in B2B communication and messaging strategy.",
      author: "Marcus Rodriguez",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Industry Insights",
      icon: MessageSquare
    },
    {
      title: "ROI Metrics That Matter: Measuring Messaging Strategy Success",
      excerpt: "Learn which metrics actually indicate messaging strategy success and how to track them effectively.",
      author: "David Kim",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "Analytics",
      icon: BarChart3
    }
  ];

  const resources = [
    {
      title: "Messaging Strategy Playbook",
      description: "Complete guide to developing messaging strategies that convert",
      type: "Free Download",
      link: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "B2B Conversion Optimization Checklist",
      description: "Step-by-step checklist for optimizing your sales messaging",
      type: "Checklist",
      link: "https://salescentri.com/resources/tutorials-webinars"
    },
    {
      title: "Psychology of B2B Buying Webinar",
      description: "Understanding buyer psychology to craft compelling messages",
      type: "Webinar",
      link: "https://salescentri.com/resources/tutorials-webinars"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Messaging Strategy
            <span className="text-brand-orange block">Insights & Resources</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead with expert insights, proven strategies, and actionable tips 
            for optimizing your B2B messaging and conversion rates.
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 cursor-pointer hover:scale-105 transition-transform"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Featured Article
            </h2>
          </div>

          <Card className="overflow-hidden hover:shadow-elevation transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-subtle p-8 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-accent rounded-full flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <Badge className="mb-4 bg-brand-orange text-white">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy">{featuredPost.author}</p>
                      <p className="text-sm text-muted-foreground">{featuredPost.role}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{featuredPost.date}</p>
                    <p className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </p>
                  </div>
                </div>
                <Button variant="cta" size="lg" asChild>
                  <a href="https://salescentri.com/resources/case-studies">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fresh insights and actionable strategies from our messaging experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="h-full hover:shadow-elevation transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <post.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl text-brand-navy line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{post.author}</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                  <Button variant="outline_brand" size="sm" className="w-full" asChild>
                    <a href="https://salescentri.com/resources/case-studies">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline_brand" size="lg" asChild>
              <a href="https://salescentri.com/resources/tutorials-webinars">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Free Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download our proven frameworks, checklists, and guides to accelerate your messaging strategy success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="text-center group hover:shadow-elevation transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="outline" className="mx-auto mb-4">
                    {resource.type}
                  </Badge>
                  <CardTitle className="text-xl text-brand-navy">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="cta" className="w-full" asChild>
                    <a href={resource.link}>
                      Download Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Messaging Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get weekly insights, case studies, and proven strategies delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder-gray-300"
              />
              <Button variant="cta" asChild>
                <a href="https://salescentri.com/resources/tutorials-webinars">
                  Subscribe
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;