import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/case-studies' },
  { label: 'People', href: '/people' },
  { label: 'Contact', href: '/contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-narrow py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center">
                <span className="font-display text-navy-foreground">TH</span>
              </div>
              <span className="font-display text-xl text-foreground">Tully Heard</span>
            </Link>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              The Strategic Partner of Choice for Australia's Club and Hospitality Leaders.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-semibold text-foreground uppercase tracking-[0.125em] text-sm mb-4">Site</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
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
                  href="tel:+61418267029"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                >
                  <Phone size={16} />
                  John Tully — 0418 267 029
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground font-sans text-sm">
                  <MapPin size={16} className="mt-0.5" />
                  40 Lime Street, Sydney NSW 2000
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground font-sans text-sm">
            © {new Date().getFullYear()} Tully Heard Consulting Pty Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};
