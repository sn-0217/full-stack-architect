import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
  { title: "RAISE Award", desc: "Recognized for exceptional technical leadership and full-stack ownership of critical production systems at Infosys." },
  { title: "INSTA Award", desc: "Awarded for outstanding performance in automation initiatives and enterprise infrastructure modernization at Infosys." },
  { title: "Best Performer Award", desc: "Honored for contributions to system reliability, performance optimization, and mentoring junior developers at Infosys." },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-16 md:py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20" style={{ background: 'linear-gradient(90deg, transparent, hsl(165 80% 48%), transparent)' }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Awards & Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-7 text-center group"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/15 group-hover:bg-primary/15 transition-colors duration-500">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3">{award.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">{award.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
