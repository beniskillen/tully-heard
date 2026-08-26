import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/th-logo.jpeg';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/case-studies' },
  { label: 'People', href: '/people' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow py-12 lg:py-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="mb-4 inline-block">
              <img
                src={logo}
                alt="Tully Heard"
                className="h-14 w-auto rounded-md object-contain md:h-16"
              />
            </Link>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              The Strategic Partner of Choice for Australia's Club and Hospitality Leaders.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Site
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@tullyheard.com.au"
                  className="flex items-center gap-3 font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail size={16} />
                  info@tullyheard.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61418267029"
                  className="flex items-center gap-3 font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone size={16} />
                  John Tully — 0418 267 029
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>
                    40 Lime Street
                    <br />
                    Sydney NSW 2000
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tully Heard Consulting Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
