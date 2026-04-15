import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Enterprise Knowledge Management Platform",
    tech: ["Spring Boot", "React", "ElasticSearch", "Redis", "JWT / OAuth 2.0"],
    description: "Full-stack module achieving 60% improvement in document discoverability for 100+ concurrent users. Spring Boot REST APIs, React frontend, ElasticSearch indexing, Redis caching. Zero authentication breaches.",
    metric: "60%",
    metricLabel: "Faster Discovery",
  },
  {
    title: "Multi-Environment Workflow Automation",
    tech: ["Spring Boot", "Apache Kafka", "Docker", "Kubernetes", "AWS EKS"],
    description: "Event-driven Kafka pipeline (State Machine pattern) — 70% reduction in approval cycle time processing 1,000+ monthly requests. Zero transaction failures with Docker/Kubernetes on AWS EKS.",
    metric: "70%",
    metricLabel: "Faster Approvals",
  },
  {
    title: "Enterprise Operational Dashboard",
    tech: ["Spring Boot", "MySQL", "JPA", "Spring Security", "Swagger"],
    description: "Centralized monitoring for SSL tracking, server uptime, and SOP management. Multi-node Tomcat cluster serving 50+ daily users at 99.9% uptime. RBAC-secured with Swagger/Actuator documentation.",
    metric: "99.9%",
    metricLabel: "Uptime Achieved",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20" style={{ background: 'linear-gradient(90deg, transparent, hsl(165 80% 48%), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">Enterprise-grade applications delivering measurable business value</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card-hover p-6 flex flex-col"
            >
              {/* Metric highlight */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold text-gradient">{project.metric}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              <p className="text-xs text-primary/60 font-medium tracking-wide uppercase mb-2">{project.metricLabel}</p>

              <h3 className="text-base font-bold text-foreground mb-3 leading-snug">{project.title}</h3>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>

              <p className="text-sm text-secondary-foreground leading-relaxed flex-1">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
