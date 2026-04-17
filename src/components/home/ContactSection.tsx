import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch shortly.");
    setForm({ firstName: '', lastName: '', email: '', organisation: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-sans font-semibold mb-4">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-display text-foreground">Please contact us</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="firstName" className="font-sans text-sm">First Name</Label>
                <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="lastName" className="font-sans text-sm">Last Name</Label>
                <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required className="mt-2" />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="font-sans text-sm">Email</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="organisation" className="font-sans text-sm">Venue / Organisation</Label>
              <Input id="organisation" name="organisation" value={form.organisation} onChange={handleChange} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="message" className="font-sans text-sm">Message</Label>
              <Textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} required className="mt-2" />
            </div>
            <div className="text-center pt-2">
              <Button type="submit" variant="navy" size="lg" className="px-10">Send Message</Button>
            </div>
          </form>

          <div className="mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="mailto:info@tullyheard.com.au" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-sans">
              <Mail size={18} className="text-primary" />
              info@tullyheard.com.au
            </a>
            <a href="tel:+61418267029" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-sans">
              <Phone size={18} className="text-primary" />
              John Tully — 0418 267 029
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
