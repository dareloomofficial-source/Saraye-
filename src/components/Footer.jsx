// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-12 md:py-16 bg-black border-t border-gold/20 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          {/* Brand & Copyright */}
          <div>
            <h3 className="text-3xl font-heading tracking-tighter text-gold mb-2">
              SARAYE
            </h3>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Saraye. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Elevating hospitality with futuristic elegance
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <a 
              href="#"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              About
            </a>
          </div>

          {/* Social Icons / Made with love */}
          <div className="text-gray-500 text-sm flex items-center gap-2">
            Made with 
            <span className="text-gold">✦</span> 
            in Mumbai
          </div>
        </div>

        {/* Optional second line - smaller credits */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
          Powered by Vite • React • Tailwind • Firebase-ready
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
