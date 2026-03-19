// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState('en'); // en / hi

  const toggleLang = () => setLang(lang === 'en' ? 'hi' : 'en');

  const t = lang === 'hi' 
    ? { home: 'होम', stores: 'स्टोर्स', contact: 'संपर्क करें' }
    : { home: 'Home', stores: 'Stores', contact: 'Contact' };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gold/30 shadow-lg shadow-gold/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo - Big & Gold */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-gold group-hover:scale-105 transition-transform">
            SARAYE
          </div>
          {/* Optional: Add small tagline or icon */}
          <span className="text-gold/70 text-sm md:text-base font-medium hidden md:block">
            Hotels • Restaurants • Shops
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-lg font-medium">
          <Link to="/" className="hover:text-gold transition">{t.home}</Link>
          <Link to="/#stores" className="hover:text-gold transition">{t.stores}</Link>
          <a 
            href={`https://wa.me/919099484892?text=Hi%20Saraye%20Team%2C%20I%20want%20to%20list%20my%20business`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/40 rounded-xl hover:bg-gold hover:text-black transition"
          >
            <MessageCircle size={20} />
            List Your Business
          </a>
        </div>

        {/* Right side: Language + Mobile toggle */}
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleLang} 
            className="flex items-center gap-2 text-gold hover:text-white transition text-sm md:text-base"
          >
            <Globe size={20} /> {lang === 'en' ? 'हिंदी' : 'EN'}
          </button>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gold">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-gold/20 py-6 px-6">
          <div className="flex flex-col gap-6 text-lg">
            <Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-gold">{t.home}</Link>
            <Link to="/#stores" onClick={() => setMobileOpen(false)} className="hover:text-gold">{t.stores}</Link>
            <a 
              href={`https://wa.me/919099484892?text=Hi%20Saraye%20Team%2C%20I%20want%20to%20list%20my%20business`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gold hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle size={22} /> List Your Business
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
