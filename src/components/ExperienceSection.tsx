import { motion } from "framer-motion";

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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Professional Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 ${
                  job.current ? 'border-primary bg-primary/20' : 'border-border bg-background'
                }`} />

                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs text-muted-foreground font-mono">{job.period}</span>
                  {job.current && (
                    <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-foreground">{job.company}</h3>
                <p className="text-sm text-muted-foreground mb-4">{job.title} · {job.location}</p>

                <ul className="space-y-3">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-secondary-foreground leading-relaxed flex gap-3">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
