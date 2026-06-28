import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../../assets/th-logo.jpeg';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Our Work' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-6 inset-x-0 z-50 px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto mx-auto flex items-center justify-between w-full max-w-5xl px-8 py-4 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-background/60 backdrop-blur-xl border border-border shadow-md'
              : 'bg-background/30 backdrop-blur-md border border-border/50'
          }`}
        >
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Tully Heard" className="h-12 w-auto object-contain rounded-md" />
          </Link>

          <div className="hidden lg:flex items-center gap-1 whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-xs font-sans font-semibold uppercase tracking-[0.125em] rounded-full transition-all duration-300 ${
                  location.pathname === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:block">
              <Button variant="navy" size="sm">
                Contact us
              </Button>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 px-4 bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 text-sm font-sans font-semibold uppercase tracking-[0.125em] rounded-xl transition-all duration-300 ${
                      location.pathname === link.href
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4">
                <Link to="/contact">
                  <Button variant="navy" size="lg" className="w-full">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
