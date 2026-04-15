import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    period: "Jan 2024 – Present",
    current: true,
    company: "Infosys",
    title: "Senior Software Engineer (Senior Systems Engineer — Backend)",
    location: "Hyderabad, India",
    bullets: [
      "Full-stack module ownership with zero escalations across 3 Agile quarters — Spring Boot / Spring MVC with JPA/Hibernate ORM and React. Leveraged Claude Code and GitHub Copilot daily, coached 2 junior developers.",
      "99.9% platform uptime & 40% faster response via event-driven microservices on AWS EKS processing 10K+ daily transactions via Apache Kafka.",
      "Sub-200ms REST API response across 15K+ daily requests via ElasticSearch indexing, Redis caching, and AWS infrastructure.",
      "Zero security breaches — 15+ REST APIs secured with OAuth 2.0, JWT, RBAC via Spring Security + LDAP.",
      "30% reduction in production defects via JUnit automation, peer reviews, and mentoring.",
    ],
  },
  {
    period: "Jan 2023 – Dec 2023",
    current: false,
    company: "Infosys",
    title: "Software Engineer (Systems Engineer — Backend)",
    location: "Hyderabad, India",
    bullets: [
      "50% improvement in CI/CD cycle time by leading SVN-to-GitHub migration across 10+ applications — Jenkins & Maven automation.",
      "Eliminated 80% of Oracle Access Manager session overhead with Core Java automation suite and PL/SQL-optimized Oracle DB state management.",
      "99.5% message delivery SLA via Apache Kafka / JMS with IBM MQ integration and dead-letter queue handling.",
      "45% system reliability improvement across 8 production environments with Linux Shell automation.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20" style={{ background: 'linear-gradient(90deg, transparent, hsl(165 80% 48%), transparent)' }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Professional Journey</p>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-14"
              >
                {/* Timeline node */}
                <div className={`absolute left-[10px] top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full ${
                  job.current
                    ? 'bg-primary/20 border-2 border-primary shadow-[0_0_12px_2px_hsl(165_80%_48%/0.3)]'
                    : 'bg-muted border-2 border-border'
                }`}>
                  <Briefcase className="h-2.5 w-2.5 text-primary" />
                </div>

                <div className="glass-card p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs text-muted-foreground font-mono tracking-wide">{job.period}</span>
                    {job.current && (
                      <span className="metric-badge text-[10px] animate-pulse-glow">Current Role</span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground">{job.company}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5 leading-relaxed">{job.title} · {job.location}</p>

                  <ul className="space-y-3">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-secondary-foreground leading-relaxed flex gap-3">
                        <span className="text-primary mt-1 shrink-0 text-xs">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
