import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "15K+", label: "Daily API Requests" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]" style={{ background: 'hsl(165 80% 48%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px]" style={{ background: 'hsl(190 90% 50%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(hsl(165 80% 48%) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm text-primary mb-10 backdrop-blur-sm"
        >
          <span className="glow-dot animate-pulse-glow" />
          <span className="font-medium">Available for Opportunities</span>
          <Sparkles className="h-3.5 w-3.5 opacity-60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          Full Stack
          <br />
          <span className="text-gradient">Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-3 leading-relaxed"
        >
          3+ years delivering end-to-end module ownership across Java backends,
          React frontends, and cloud infrastructure.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground flex items-center justify-center gap-2 mb-12"
        >
          <MapPin className="h-3.5 w-3.5" />
          Sai Santosh Kumar Battula · Senior Systems Engineer @ Infosys
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <a href="#projects" className="btn-primary">
            View My Work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail className="h-4 w-4" />
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="text-center glass-card p-4 rounded-2xl"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-[11px] text-muted-foreground mt-1.5 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
