import { motion } from 'framer-motion';

const services = [
  { title: 'Strategic Planning', desc: 'Clear, practical strategies aligned to long-term financial performance and positioning.' },
  { title: 'Capital Investment Advisory & Feasibility', desc: 'Independent assessment of major capital decisions, including business cases, staging and risk.' },
  { title: 'Site Redevelopment & Delivery', desc: 'End-to-end planning and execution support for redevelopment projects, from concept to completion aligned with funding and cashflow.' },
  { title: 'Premises Optimisation & Implementation', desc: 'Reconfiguring existing assets to improve utilisation, customer flow and revenue outcomes.' },
  { title: 'Financial Modelling', desc: 'Robust, decision-ready models to test scenarios, funding structures and long-term returns.' },
  { title: 'Performance Diagnostics & Benchmarking', desc: "Identifying what's driving (or limiting) performance, with clear benchmarks and improvement pathways." },
  { title: 'Commercial Viability & Performance', desc: 'Assessing sustainability and lifting earnings through targeted, commercially grounded initiatives.' },
  { title: 'Gaming Strategy, Optimisation & Management', desc: 'Maximising gaming performance through strategy, layout, product mix and operational oversight.' },
  { title: 'Board Advisory & Decision Support', desc: 'Supporting boards with clear analysis, independent advice and structured decision-making.' },
  { title: 'Project Delivery & Implementation Support', desc: 'Staying involved beyond strategy to ensure initiatives are executed and outcomes are realised.' },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-sans font-semibold mb-4">Our Services</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <ul className="divide-y divide-border">
            {services.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="py-5"
              >
                <h3 className="font-display text-xl text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{s.desc}</p>
              </motion.li>
            ))}
          </ul>

          <p className="text-muted-foreground font-sans italic text-sm text-center mt-10 max-w-xl mx-auto">
            Not sure where to start? If you're dealing with something unclear or complex, we'll define the issue and get to a practical way forward.
          </p>
        </div>
      </div>
    </section>
  );
};
