import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something{" "}
            <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Open to full stack, backend, and cloud engineering opportunities
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:sk17042001@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow"
            >
              <Mail className="h-4 w-4" />
              sk17042001@gmail.com
            </a>
            <a
              href="tel:+919398049275"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              +91 93980 49275
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Hyderabad, India
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
