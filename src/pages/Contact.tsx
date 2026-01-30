import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, MapPin, Clock } from 'lucide-react';
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll be in touch within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-primary text-sm uppercase tracking-wider font-medium mb-4">
                Contact Us
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
                Let's Start a{' '}
                <span className="italic text-primary">Conversation</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Book a strategy call or send us a message. We're here to help you transform your venue.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        required
                        placeholder="John"
                        className="bg-card border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        required
                        placeholder="Smith"
                        className="bg-card border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="john@venue.com.au"
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Venue / Organisation
                    </label>
                    <Input
                      name="organisation"
                      placeholder="Your venue or club name"
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your venue and what you're looking to achieve..."
                      className="bg-card border-border resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="heroPrimary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Book a Call CTA */}
                <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
                  <Calendar className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Prefer to Talk?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Book a 30-minute strategy call with one of our consultants.
                  </p>
                  <Button variant="hero" size="lg">
                    Book a Strategy Call
                  </Button>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@tullyheard.com.au"
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="text-foreground font-medium">info@tullyheard.com.au</div>
                      </div>
                    </a>
                    <a
                      href="tel:+61299999999"
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div className="text-foreground font-medium">+61 2 9999 9999</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Location</div>
                        <div className="text-foreground font-medium">Sydney, Australia</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Clock className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Response Time</div>
                        <div className="text-foreground font-medium">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
