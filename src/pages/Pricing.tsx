import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small teams getting started with messaging optimization",
      features: [
        "Up to 3 team members",
        "5 messaging campaigns",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations",
        "Message optimization tools",
        "A/B testing (limited)",
        "Monthly strategy review"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/pricing/free-trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Advanced features for growing sales teams and agencies",
      features: [
        "Up to 15 team members",
        "Unlimited messaging campaigns",
        "Advanced analytics & reporting",
        "Priority support + live chat",
        "All integrations included",
        "AI-powered optimization",
        "Advanced A/B testing",
        "Weekly strategy sessions",
        "Custom reporting",
        "Team collaboration tools",
        "ROI tracking & insights",
        "Conversion optimization"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/pricing/free-trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with complex needs",
      features: [
        "Unlimited team members",
        "Custom campaign limits",
        "Enterprise analytics platform",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced automation",
        "Daily strategy consultation",
        "Custom training program",
        "SLA guarantees",
        "Advanced security features",
        "API access & webhooks",
        "Multi-region deployment",
        "Compliance certifications"
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/pricing/enterprise-custom",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial."
    },
    {
      question: "What integrations are included?",
      answer: "We support 100+ integrations including Salesforce, HubSpot, Pipedrive, Slack, and many more. Enterprise plans include custom integrations."
    },
    {
      question: "Do you offer training and onboarding?",
      answer: "Yes, all plans include onboarding assistance. Professional and Enterprise plans include dedicated training sessions and ongoing support."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll provide a full refund within the first 30 days."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="text-brand-orange block">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your team. All plans include our core messaging 
            optimization features with no hidden fees.
          </p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Badge variant="secondary" className="text-brand-navy">
              14-day free trial
            </Badge>
            <Badge variant="secondary" className="text-brand-navy">
              No setup fees
            </Badge>
            <Badge variant="secondary" className="text-brand-navy">
              Cancel anytime
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative h-full ${plan.popular ? 'border-brand-orange shadow-orange scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-orange text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-brand-navy">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-brand-navy">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? "cta" : "outline_brand"} 
                    size="lg" 
                    className="w-full"
                    asChild
                  >
                    <a href={plan.ctaLink}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Options */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Need a custom solution? We work with organizations of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline_brand" size="lg" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry/request-quote">
                  Request Custom Quote
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="https://salescentri.com/pricing/plans-overview">
                  View Detailed Comparison
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-navy">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? Our team is here to help.
            </p>
            <Button variant="outline_brand" size="lg" asChild>
              <a href="https://salescentri.com/contact/support-request">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies transforming their messaging strategy with Brigagency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="https://salescentri.com/pricing/free-trial">
                Start Free Trial
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-navy" asChild>
              <a href="https://salescentri.com/get-started/book-demo">
                Book a Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;