import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:sk17042001@gmail.com" className="btn-primary group">
              <Mail className="h-4 w-4" />
              sk17042001@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="tel:+919398049275"
              className="btn-secondary"
            >
              <Phone className="h-4 w-4" />
              +91 93980 49275
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary/60" />
            Hyderabad, India
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
