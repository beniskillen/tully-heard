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
        <section className="bg-background pb-16 pt-40">
          <div className="container-narrow mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                Contact
              </p>
              <h1 className="mb-6 font-display text-4xl italic text-foreground sm:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
              <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                For strategic planning, redevelopment, feasibility, venue optimisation or advisory enquiries, contact the team directly.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-narrow max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="mailto:info@tullyheard.com.au"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-sans text-sm text-muted-foreground">Email</div>
                  <div className="font-sans font-medium text-foreground">info@tullyheard.com.au</div>
                </div>
              </a>
              <a
                href="tel:+61418267029"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-sans text-sm text-muted-foreground">Phone — John Tully</div>
                  <div className="font-sans font-medium text-foreground">0418 267 029</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-narrow max-w-2xl">
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
              Send an enquiry
            </p>
            <h2 className="mb-8 font-display text-3xl text-foreground sm:text-4xl">
              Tell us about your venue
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-sans text-sm font-medium text-foreground">First name</label>
                  <Input name="firstName" required className="border-border bg-background" />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-sm font-medium text-foreground">Last name</label>
                  <Input name="lastName" required className="border-border bg-background" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-sans text-sm font-medium text-foreground">Email</label>
                  <Input type="email" name="email" required className="border-border bg-background" />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-sm font-medium text-foreground">Venue / organisation</label>
                  <Input name="organisation" className="border-border bg-background" />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-sans text-sm font-medium text-foreground">Message</label>
                <Textarea name="message" required rows={6} className="resize-none border-border bg-background" />
              </div>
              <Button type="submit" variant="navy" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send enquiry'}
              </Button>
            </form>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow max-w-3xl text-center">
            <h2 className="mb-6 font-display text-3xl text-foreground sm:text-4xl">
              Have a strategic venue decision to work through?
            </h2>
            <p className="mb-8 font-sans text-lg leading-relaxed text-muted-foreground">
              If you are considering a redevelopment, repositioning, feasibility review or strategic planning process, Tully Heard can help define the opportunity and the practical next step.
            </p>
            <a href="mailto:info@tullyheard.com.au">
              <Button variant="navy" size="xl" className="px-10">
                Get in Touch
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
