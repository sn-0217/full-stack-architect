import { motion } from "framer-motion";

const categories = [
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Java 8/17", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate ORM", "Spring Security", "J2EE", "RESTful APIs", "SOAP"],
  },
  {
    title: "Frontend / Full-Stack",
    icon: "🎨",
    skills: ["React", "TypeScript", "JavaScript ES6+", "HTML5 / CSS3", "AJAX", "JSON / XML"],
  },
  {
    title: "AI Coding Assistants",
    icon: "🤖",
    skills: ["Claude Code", "GitHub Copilot", "Cursor AI", "Code Generation", "AI Output Review", "Team Coaching"],
  },
  {
    title: "Cloud (AWS)",
    icon: "☁️",
    skills: ["EC2", "S3", "Lambda", "EKS", "RDS", "API Gateway", "IAM", "CloudWatch"],
  },
  {
    title: "Databases & Messaging",
    icon: "🗄️",
    skills: ["MySQL", "Oracle DB / PL-SQL", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ", "IBM MQ", "ElasticSearch"],
  },
  {
    title: "DevOps & Security",
    icon: "🔒",
    skills: ["Docker", "Kubernetes", "Jenkins CI/CD", "Maven", "Prometheus", "Grafana", "OAuth 2.0", "JWT", "RBAC", "LDAP"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-28 px-4 sm:px-6 relative">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20" style={{ background: 'linear-gradient(90deg, transparent, hsl(165 80% 48%), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Core Competencies</p>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">Full-stack engineering with enterprise Java, modern cloud infrastructure, and AI-assisted development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
