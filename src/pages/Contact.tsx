import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast({ title: 'Enquiry sent', description: 'We’ll be in touch shortly.' });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-16 bg-background">
          <div className="container-narrow max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
                Contact
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6 italic">
                Contact Tully Heard
              </h1>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                For strategic planning, redevelopment, feasibility, venue optimisation or advisory enquiries, contact the team directly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact details */}
        <section className="pb-16">
          <div className="container-narrow max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:info@tullyheard.com.au" className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-sans">Email</div>
                  <div className="text-foreground font-sans font-medium">info@tullyheard.com.au</div>
                </div>
              </a>
              <a href="tel:+61418267029" className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-sans">Phone — John Tully</div>
                  <div className="text-foreground font-sans font-medium">0418 267 029</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="section-padding bg-card">
          <div className="container-narrow max-w-2xl">
            <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
              Send an enquiry
            </p>
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-8">
              Tell us about your venue
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">First name</label>
                  <Input name="firstName" required className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">Last name</label>
                  <Input name="lastName" required className="bg-background border-border" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">Email</label>
                  <Input type="email" name="email" required className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">Venue / organisation</label>
                  <Input name="organisation" className="bg-background border-border" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-2">Message</label>
                <Textarea name="message" required rows={6} className="bg-background border-border resize-none" />
              </div>
              <Button type="submit" variant="navy" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send enquiry'}
              </Button>
            </form>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-background">
          <div className="container-narrow max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-6 uppercase tracking-[0.04em]">
              Have a strategic venue decision to work through?
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
              If you are considering a redevelopment, repositioning, feasibility review or strategic planning process, Tully Heard can help define the opportunity and the practical next step.
            </p>
            <a href="mailto:info@tullyheard.com.au">
              <Button variant="navy" size="xl" className="px-10">Contact us</Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
