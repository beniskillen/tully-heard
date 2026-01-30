import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Clock, value: '50+', label: 'Years Collective Experience' },
  { icon: Award, value: '100+', label: 'Successful Projects' },
  { icon: Users, value: '25+', label: 'Expert Advisors' },
];

const teamMembers = [
  {
    name: 'Ben Killen',
    role: 'Managing Director',
    specialty: 'Strategic Planning & Venue Development',
    bio: 'With over 20 years in hospitality leadership, Ben has guided countless venues through successful transformations. His hands-on experience as a venue owner informs every strategic recommendation.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=faces',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Director of Operations',
    specialty: 'Customer Experience & Service Design',
    bio: 'Sarah brings deep expertise in customer experience design, having led service transformation programs for major hospitality brands across Australia and Asia.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=faces',
  },
  {
    name: 'James Thompson',
    role: 'Senior Consultant',
    specialty: 'Market Research & Analytics',
    bio: 'James combines rigorous analytical methodology with practical hospitality insights to deliver data-driven strategies that achieve measurable results.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=600&fit=crop&crop=faces',
  },
  {
    name: 'Emma Chen',
    role: 'Senior Consultant',
    specialty: 'F&B Strategy & Brand Development',
    bio: 'Emma has developed award-winning F&B concepts for venues across Australia, specialising in brand positioning and menu engineering.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop&crop=faces',
  },
  {
    name: 'Michael Roberts',
    role: 'Consultant',
    specialty: 'Project Management & Implementation',
    bio: 'Michael ensures seamless project delivery with his background in construction management and hospitality operations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=faces',
  },
  {
    name: 'Lisa Wang',
    role: 'Consultant',
    specialty: 'Digital Marketing & Member Engagement',
    bio: 'Lisa helps venues build stronger connections with their communities through strategic digital marketing and loyalty programs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=faces',
  },
];

const People = () => {
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
                Our People
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
                Meet the{' '}
                <span className="italic text-primary">Experts</span>{' '}
                Behind Your Success
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our team of seasoned hospitality professionals brings decades of hands-on experience as venue owners and strategic consultants.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card border-y border-border/50">
          <div className="container-narrow">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="text-primary mx-auto mb-4" size={36} />
                  <div className="text-4xl font-display font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card-gradient overflow-hidden">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                        <button className="w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                          <Mail size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm mb-2">{member.role}</p>
                      <p className="text-muted-foreground text-xs mb-3">{member.specialty}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-6">
                Work With Our Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Book a strategy call and discover how our expertise can transform your venue.
              </p>
              <Link to="/contact">
                <Button variant="heroPrimary" size="xl" className="gap-2">
                  Book a Strategy Call
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default People;
