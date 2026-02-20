import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'John Tully',
    role: 'Managing Director',
    specialty: 'Strategic Planning & Venue Development',
    image: 'jt-headshot.jpg',
  },
  {
    name: 'Luke Heard',
    role: 'Director of Operations',
    specialty: 'Customer Experience & Service Design',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
  },
  {
    name: 'Peter Mclean',
    role: 'Senior Consultant',
    specialty: 'Market Research & Analytics',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=faces',
  },
  {
    name: 'John Doe',
    role: 'Senior Consultant',
    specialty: 'F&B Strategy & Brand Development',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces',
  },
];

const stats = [
  { icon: Clock, value: '50+', label: 'Years Collective Experience' },
  { icon: Award, value: '100+', label: 'Successful Projects' },
  { icon: Users, value: '25+', label: 'Expert Advisors' },
];

export const TeamSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
            Our People
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6">
            Meet the{' '}
            <span className="italic text-primary">Experts</span>{' '}
            Behind Your Success
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Our team of seasoned hospitality professionals brings decades of hands-on experience as venue owners and strategic consultants.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border"
            >
              <stat.icon className="text-primary mb-4" size={32} />
              <div className="text-4xl font-display text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-sans text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-display text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-sans text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground font-sans text-sm">{member.specialty}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/people">
            <Button variant="outline" size="lg" className="gap-2">
              Meet the Full Team
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
