import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'People', href: '/people' },
  ],
  resources: [
    { label: 'Media Features', href: '/media' },
    { label: 'Articles', href: '/articles' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-narrow py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center">
                <span className="font-display text-navy-foreground">TH</span>
              </div>
              <span className="font-display text-xl text-foreground">
                Tully Heard
              </span>
            </Link>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
              The Strategic Partner of Choice for Australia's Club and Hospitality Leaders.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans font-semibold text-foreground uppercase tracking-[0.125em] text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-sans font-semibold text-foreground uppercase tracking-[0.125em] text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-foreground uppercase tracking-[0.125em] text-sm mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@tullyheard.com.au"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                >
                  <Mail size={16} />
                  info@tullyheard.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61299999999"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                >
                  <Phone size={16} />
                  +61 2 9999 9999
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground font-sans text-sm">
                  <MapPin size={16} className="mt-0.5" />
                  Sydney, Australia
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-sans text-sm">
            © {new Date().getFullYear()} Tully Heard Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary font-sans text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary font-sans text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
