import { motion } from "framer-motion";
import { Award } from "lucide-react";

const awards = [
  { title: "RAISE Award", desc: "Recognized for exceptional technical leadership and full-stack ownership of critical production systems at Infosys." },
  { title: "INSTA Award", desc: "Awarded for outstanding performance in automation initiatives and enterprise infrastructure modernization at Infosys." },
  { title: "Best Performer Award", desc: "Honored for contributions to system reliability, performance optimization, and mentoring junior developers at Infosys." },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold">Awards & Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{award.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">{award.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
