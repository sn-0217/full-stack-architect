import { motion } from "framer-motion";

const categories = [
  {
    title: "Backend Development",
    skills: ["Java 8/17", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate ORM", "Spring Security", "J2EE", "RESTful APIs", "SOAP"],
  },
  {
    title: "Frontend / Full-Stack",
    skills: ["React", "TypeScript", "JavaScript ES6+", "HTML5 / CSS3", "AJAX", "JSON / XML"],
  },
  {
    title: "AI Coding Assistants",
    skills: ["Claude Code", "GitHub Copilot", "Cursor AI", "Code Generation", "AI Output Review", "Team Coaching"],
  },
  {
    title: "Cloud (AWS)",
    skills: ["EC2", "S3", "Lambda", "EKS", "RDS", "API Gateway", "IAM", "CloudWatch"],
  },
  {
    title: "Databases & Messaging",
    skills: ["MySQL", "Oracle DB / PL-SQL", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ", "IBM MQ", "ElasticSearch"],
  },
  {
    title: "DevOps & Security",
    skills: ["Docker", "Kubernetes", "Jenkins CI/CD", "Maven", "Prometheus", "Grafana", "OAuth 2.0", "JWT", "RBAC", "LDAP"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Core Competencies</p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Expertise</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
