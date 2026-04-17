import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/th-logo.jpeg';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logo} alt="Tully Heard" className="h-12 w-auto object-contain rounded-md mb-4" />
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              The Strategic Partner of Choice for Australia's Club and Hospitality Leaders.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-sans font-semibold text-foreground uppercase tracking-[0.15em] text-xs mb-3">Contact</h4>
            <a href="mailto:info@tullyheard.com.au" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
              <Mail size={16} /> info@tullyheard.com.au
            </a>
            <a href="tel:+61418267029" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
              <Phone size={16} /> John Tully — 0418 267 029
            </a>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-foreground uppercase tracking-[0.15em] text-xs mb-3">Office</h4>
            <div className="flex items-start gap-3 text-muted-foreground font-sans text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>40 Lime Street<br />Sydney NSW 2000</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground font-sans text-xs">
            © {new Date().getFullYear()} Tully Heard Consulting Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
