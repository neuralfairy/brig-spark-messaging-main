import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Shield,
  Award,
  Lock
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-xl">B</span>
              </div>
              <span className="font-bold text-xl">Brigagency</span>
            </div>
            <p className="text-sm text-gray-300">
              Crafting high-converting messaging strategies for sales teams and agencies.
              Transform your communication and boost conversions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://salescentri.com/solutions/psa-suite" className="text-gray-300 hover:text-brand-orange transition-colors">
                  PSA Suite
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/solutions/by-use-case/sdr-teams" className="text-gray-300 hover:text-brand-orange transition-colors">
                  SDR Teams
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/solutions/use-case-navigator" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Use Case Navigator
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/platforms/lead-management/lead-generation" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/services/data-enrichment" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Data Enrichment
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://salescentri.com/resources/case-studies" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/resources/whitepapers-ebooks" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Whitepapers & eBooks
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/resources/tutorials-webinars" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Tutorials & Webinars
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/docs/user-guide" className="text-gray-300 hover:text-brand-orange transition-colors">
                  User Guide
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/docs/api-reference" className="text-gray-300 hover:text-brand-orange transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-300">Chicago, IL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-orange" />
                <a href="tel:+1-555-0123" className="text-gray-300 hover:text-white transition-colors">
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                <a href="mailto:hello@brigagency.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@brigagency.com
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4">
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4" />
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Lock className="h-4 w-4" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-brand-navy-light">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Ready to Transform Your Messaging Strategy?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join hundreds of companies that have boosted their conversion rates with our proven messaging strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy" asChild>
                <a href="https://salescentri.com/get-started/book-demo">
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-brand-navy-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Brigagency Solutions. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <a href="https://salescentri.com/trust/security-privacy" className="hover:text-white transition-colors">
                  Security & Privacy
                </a>
              </div>
            </div>
            
            {/* Strategic Partner Link */}
            <div className="text-sm text-gray-400">
              <a 
                href="https://salescentri.com?utm_source=BrigAgency.com&utm_medium=footer&utm_campaign=partner_network" 
                className="hover:text-brand-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;