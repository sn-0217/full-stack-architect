import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, ClipboardCheck, Clipboard } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sk17042001@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20" style={{ background: 'linear-gradient(90deg, transparent, hsl(165 80% 48%), transparent)' }} />

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title mb-4">
            Let's Build Something{" "}
            <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-sm">
            Open to full stack, backend, and cloud engineering opportunities
          </p>

          {/* Primary contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href="mailto:sk17042001@gmail.com" className="btn-primary group">
              <Mail className="h-4 w-4" />
              sk17042001@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="tel:+919398049275" className="btn-secondary">
              <Phone className="h-4 w-4" />
              +91 93980 49275
            </a>
          </div>

          {/* Copy email */}
          <div className="flex justify-center mb-10">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-1.5 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/10"
            >
              {copied
                ? <><ClipboardCheck className="h-3.5 w-3.5 text-primary" /> Copied to clipboard!</>
                : <><Clipboard className="h-3.5 w-3.5" /> Copy email address</>
              }
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <a
              href="https://github.com/saisantoshkumarbattula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-border bg-secondary/50 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300 group"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-santosh-kumar-battula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-border bg-secondary/50 text-sm font-medium text-foreground hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 hover:text-[#0A66C2] transition-all duration-300 group"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary/60" />
            Hyderabad, India
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

