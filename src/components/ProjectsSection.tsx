import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Enterprise Knowledge Management Platform",
    tech: "Spring Boot · React · ElasticSearch · Redis · JWT / OAuth 2.0",
    description: "Full-stack module achieving 60% improvement in document discoverability for 100+ concurrent users. Spring Boot REST APIs, React frontend, ElasticSearch indexing, Redis caching. Zero authentication breaches. Built with Claude Code for rapid API scaffolding.",
    metric: "60% faster discovery",
  },
  {
    title: "Multi-Environment Workflow Automation",
    tech: "Spring Boot · Apache Kafka · Docker · Kubernetes · AWS EKS",
    description: "Event-driven Kafka pipeline (State Machine pattern) — 70% reduction in approval cycle time processing 1,000+ monthly requests. Zero transaction failures with Docker/Kubernetes on AWS EKS and end-to-end Jenkins CI/CD.",
    metric: "70% faster approvals",
  },
  {
    title: "Enterprise Operational Dashboard",
    tech: "Spring Boot · MySQL · JPA · Spring Security · Swagger",
    description: "Centralized monitoring platform for SSL tracking, server uptime, and SOP management. Multi-node Tomcat cluster serving 50+ daily users at 99.9% uptime. RBAC-secured with Swagger/Actuator documentation.",
    metric: "99.9% uptime",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-2">Enterprise-grade applications delivering measurable business value</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 flex flex-col hover:border-primary/30 transition-all hover:glow"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="rounded-md bg-primary/10 border border-primary/20 px-2.5 py-1 text-xs font-medium text-primary">
                  {project.metric}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-xs text-primary/70 font-mono mb-3">{project.tech}</p>
              <p className="text-sm text-secondary-foreground leading-relaxed flex-1">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
