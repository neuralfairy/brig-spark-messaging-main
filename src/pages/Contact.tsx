import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  MessageCircle,
  Users,
  Handshake,
  HeadphonesIcon,
  Clock
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Sales Inquiry",
      description: "Interested in our messaging strategy services? Let's discuss your needs.",
      cta: "Contact Sales",
      link: "https://salescentri.com/contact/sales-inquiry",
      color: "bg-brand-orange"
    },
    {
      icon: HeadphonesIcon,
      title: "Support Request",
      description: "Need help with your existing account or have technical questions?",
      cta: "Get Support",
      link: "https://salescentri.com/contact/support-request",
      color: "bg-brand-navy"
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Explore partnership opportunities and collaboration possibilities.",
      cta: "Partner Inquiry",
      link: "https://salescentri.com/contact/partnerships",
      color: "bg-gradient-accent"
    },
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a personalized demo to see our platform in action.",
      cta: "Schedule Demo",
      link: "https://salescentri.com/get-started/book-demo",
      color: "bg-gradient-primary"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "123 W Madison St, Suite 1500\nChicago, IL 60602"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@brigagency.com"
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Monday - Friday\n9:00 AM - 6:00 PM CST"
    }
  ];

  const quickActions = [
    {
      title: "Request a Quote",
      description: "Get a custom quote for your messaging strategy needs",
      link: "https://salescentri.com/contact/sales-inquiry/request-quote"
    },
    {
      title: "Submit a Ticket",
      description: "Submit a detailed support request with our ticketing system",
      link: "https://salescentri.com/contact/support-request/submit-ticket"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team for immediate assistance",
      link: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      title: "Integration Request",
      description: "Request a custom integration for your tech stack",
      link: "https://salescentri.com/contact/partnerships/integration-requests"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in
            <span className="text-brand-orange block">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your messaging strategy? Our team of experts is here to help. 
            Choose the best way to connect with us below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that best fits your needs. We'll respond promptly to all inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center group hover:shadow-elevation transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-brand-navy">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline_brand" className="w-full" asChild>
                    <a href={method.link}>
                      {method.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Button key={index} variant="ghost" className="h-auto p-4 text-left flex-col items-start space-y-2" asChild>
                  <a href={action.link}>
                    <span className="font-semibold text-brand-navy">{action.title}</span>
                    <span className="text-sm text-muted-foreground">{action.description}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-brand-navy">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4" action="https://salescentri.com/get-started/contact" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Your Company Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your messaging strategy needs..." 
                      rows={4}
                      required 
                    />
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-navy">Chicago Office</CardTitle>
                  <CardDescription>
                    Visit us at our headquarters in the heart of Chicago's business district.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-brand-orange" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">{info.label}</p>
                        <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                      <p className="text-brand-navy font-semibold">Interactive Map</p>
                      <p className="text-muted-foreground text-sm">123 W Madison St, Chicago, IL</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Live Chat CTA */}
              <Card className="bg-gradient-accent text-white">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Need Immediate Help?</h3>
                  <p className="mb-4 opacity-90">
                    Our support team is available for live chat during business hours.
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange" asChild>
                    <a href="https://salescentri.com/contact/support-request/live-chat">
                      Start Live Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Messaging?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait to start improving your conversion rates. Book a strategy session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="https://salescentri.com/get-started/calendly">
                Schedule Strategy Session
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
    </Layout>
  );
};

export default Contact;