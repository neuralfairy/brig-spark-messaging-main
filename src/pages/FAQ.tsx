import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Settings,
  Shield,
  ArrowRight,
  HelpCircle
} from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      id: "messaging-strategy",
      title: "Messaging Strategy",
      icon: MessageSquare,
      color: "bg-brand-orange",
      description: "Questions about our messaging optimization approach"
    },
    {
      id: "pricing-billing",
      title: "Pricing & Billing",
      icon: DollarSign,
      color: "bg-brand-navy",
      description: "Pricing plans, billing, and payment questions"
    },
    {
      id: "implementation",
      title: "Implementation",
      icon: Settings,
      color: "bg-gradient-accent",
      description: "Getting started and implementation process"
    },
    {
      id: "results",
      title: "Results & ROI",
      icon: TrendingUp,
      color: "bg-gradient-primary",
      description: "Expected outcomes and measuring success"
    },
    {
      id: "support",
      title: "Support & Security",
      icon: Shield,
      color: "bg-brand-orange-light",
      description: "Support options and security measures"
    },
    {
      id: "team",
      title: "Team & Training",
      icon: Users,
      color: "bg-brand-navy-light",
      description: "Team size, training, and collaboration"
    }
  ];

  const faqs = {
    "messaging-strategy": [
      {
        question: "What is messaging strategy optimization and how does it work?",
        answer: "Messaging strategy optimization is the systematic process of analyzing, testing, and refining your sales and marketing messages to maximize conversion rates. We use data-driven methodologies, A/B testing, and psychological principles to craft messages that resonate with your target audience and drive action. Our approach includes audience analysis, message testing, performance tracking, and continuous optimization based on real results."
      },
      {
        question: "How is your approach different from traditional copywriting services?",
        answer: "Unlike traditional copywriting, our messaging strategy approach is data-driven and results-focused. We don't just write compelling copy; we develop comprehensive messaging frameworks based on buyer psychology, market research, and conversion optimization principles. Every message is tested, measured, and optimized for specific business outcomes. We provide ongoing optimization rather than one-time deliverables."
      },
      {
        question: "What types of businesses benefit most from messaging strategy optimization?",
        answer: "B2B companies with complex sales cycles see the most dramatic results, particularly SaaS companies, professional services firms, agencies, and technology companies. However, any business that relies on written communication to convert prospects into customers can benefit. We've helped companies in healthcare, finance, manufacturing, and consulting industries achieve significant conversion improvements."
      },
      {
        question: "How do you measure the effectiveness of messaging changes?",
        answer: "We track multiple metrics including conversion rates, engagement rates, response rates, demo booking rates, and ultimately revenue impact. We use A/B testing, multivariate testing, and statistical analysis to ensure changes are truly driving improvements. Each client receives detailed reporting showing before/after metrics and ROI calculations."
      }
    ],
    "pricing-billing": [
      {
        question: "What's included in each pricing plan?",
        answer: "Our Starter plan ($99/month) includes basic messaging optimization for up to 3 team members and 5 campaigns. Professional plan ($299/month) includes advanced features for up to 15 team members with unlimited campaigns and priority support. Enterprise plans are customized based on your specific needs and include dedicated account management, custom integrations, and SLA guarantees."
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial for all plans. No credit card is required to start your trial. During the trial, you'll have access to all features of your selected plan and can work with our team to see real results with your messaging."
      },
      {
        question: "Can I change or cancel my plan at any time?",
        answer: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Plan changes take effect immediately, and we'll prorate any billing adjustments. If you cancel, you'll retain access to your account until the end of your current billing period."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll provide a full refund. We're confident in the value we provide and stand behind our results."
      }
    ],
    "implementation": [
      {
        question: "How long does it take to see results?",
        answer: "Most clients see initial improvements within 2-3 weeks of implementation. Significant results typically become apparent within 30-60 days. However, messaging optimization is an ongoing process, and the best results come from continuous testing and refinement over time."
      },
      {
        question: "What's the onboarding process like?",
        answer: "Our onboarding process typically takes 1-2 weeks and includes: (1) Strategy session to understand your business and goals, (2) Audit of existing messaging and materials, (3) Development of initial messaging framework, (4) Implementation support and team training, (5) Setup of tracking and measurement systems."
      },
      {
        question: "Do you integrate with our existing tools and systems?",
        answer: "Yes, we integrate with 100+ popular tools including Salesforce, HubSpot, Pipedrive, Marketo, Mailchimp, and many others. For Enterprise clients, we can develop custom integrations to work with your specific tech stack. Our team will handle the technical setup during onboarding."
      },
      {
        question: "How much time investment is required from our team?",
        answer: "Initial setup requires 3-5 hours of your team's time for strategy sessions and information gathering. Ongoing involvement is minimal - typically 1-2 hours per week for reviewing results and providing feedback. We handle the heavy lifting of analysis, testing, and optimization."
      }
    ],
    "results": [
      {
        question: "What kind of results can we expect?",
        answer: "Our clients typically see conversion rate improvements of 25-150% within the first 90 days. Specific results vary by industry and starting point, but common improvements include: increased demo booking rates, higher email response rates, improved proposal acceptance rates, and shorter sales cycles. We provide case studies and references upon request."
      },
      {
        question: "How do you ensure ROI from messaging optimization?",
        answer: "We focus on metrics that directly impact revenue, not just engagement metrics. Every optimization is tied to business outcomes like conversion rates, deal size, or sales cycle length. We provide regular ROI reporting and work with you to ensure the investment pays for itself through improved conversion performance."
      },
      {
        question: "What if our messaging doesn't improve after working with you?",
        answer: "While results vary, we've never had a client who didn't see measurable improvement when they fully implemented our recommendations. If you don't see results within 60 days, we'll work with you at no additional cost until you do, or provide a full refund under our guarantee."
      },
      {
        question: "Can you provide references or case studies?",
        answer: "Absolutely. We have detailed case studies showing specific results for companies in various industries. We can also provide references from current clients who can speak to their experience working with us. Contact our sales team to access our case study library and reference list."
      }
    ],
    "support": [
      {
        question: "What support options are available?",
        answer: "All plans include email support with response times of 24 hours or less. Professional and Enterprise plans include priority support, live chat, and phone support. Enterprise clients also receive dedicated account management and can access our team directly for urgent needs."
      },
      {
        question: "Is our data secure?",
        answer: "Yes, we take security very seriously. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade security measures including encryption at rest and in transit, regular security audits, and strict access controls. We never share client data and can sign additional security agreements as needed."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, all plans include basic training on our platform and methodologies. Professional and Enterprise plans include comprehensive training sessions, ongoing education, and access to our resource library. We can also provide custom training programs for larger teams."
      },
      {
        question: "What happens to our data if we cancel?",
        answer: "You retain ownership of all your data. Upon cancellation, we provide a complete export of your data including all messaging frameworks, test results, and performance metrics. We permanently delete your data from our systems 90 days after cancellation unless you request earlier deletion."
      }
    ],
    "team": [
      {
        question: "How many team members can access the platform?",
        answer: "Starter plan supports up to 3 team members, Professional plan supports up to 15 team members, and Enterprise plans support unlimited team members. You can add or remove team members at any time, and we offer role-based access controls to ensure appropriate permissions."
      },
      {
        question: "Can multiple departments use the platform?",
        answer: "Absolutely. Our platform is designed to support collaboration between sales, marketing, and customer success teams. We provide department-specific dashboards and can customize workflows to match your organizational structure."
      },
      {
        question: "Do you work with agencies and consultants?",
        answer: "Yes, we have a partner program for agencies and consultants. Partners receive special pricing, white-label options, additional training, and dedicated support. We can also provide co-branded materials and support for client presentations."
      },
      {
        question: "What if we need custom training or consultation?",
        answer: "Enterprise plans include custom training and consultation as part of the package. For other plans, we offer additional training and consulting services on an hourly or project basis. Our team can provide specialized training on advanced techniques, industry-specific strategies, or custom workshops."
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked
            <span className="text-brand-orange block">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get answers to common questions about our messaging strategy services, 
            pricing, implementation, and results.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Badge variant="secondary" className="text-brand-navy">
              <HelpCircle className="w-4 h-4 mr-1" />
              Quick Answers
            </Badge>
            <Badge variant="secondary" className="text-brand-navy">
              Expert Support
            </Badge>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqCategories.map((category) => (
              <Card key={category.id} className="text-center group hover:shadow-elevation transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-brand-navy">{category.title}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs[category.id as keyof typeof faqs]?.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.id}-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-brand-navy hover:text-brand-orange">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-4 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help you get started 
            with confidence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                <CardTitle className="text-xl text-brand-navy">Live Chat</CardTitle>
                <CardDescription>
                  Get instant answers from our support team during business hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline_brand" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/support-request/live-chat">
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                <CardTitle className="text-xl text-brand-navy">Book a Demo</CardTitle>
                <CardDescription>
                  Schedule a personalized demo and ask questions directly to our experts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="cta" className="w-full" asChild>
                  <a href="https://salescentri.com/get-started/book-demo">
                    Book Demo
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <HelpCircle className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                <CardTitle className="text-xl text-brand-navy">Contact Support</CardTitle>
                <CardDescription>
                  Submit a detailed question and get a comprehensive response within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline_brand" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/support-request">
                    Contact Support
                  </a>
                </Button>
              </CardContent>
            </Card>
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
            Join hundreds of companies that have transformed their messaging strategy with Brigagency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-navy" asChild>
              <a href="https://salescentri.com/get-started/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;