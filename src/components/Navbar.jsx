import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState('en');

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  const toggleLang = () => setLang(lang === 'en' ? 'hi' : 'en');

  const t = lang === 'hi' 
    ? { home: 'होम', stores: 'स्टोर्स', contact: 'संपर्क करें' }
    : { home: 'Home', stores: 'Stores', contact: 'Contact' };

  return (
    <>
      {/* 1. Main Navbar Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-gold/10 px-6 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-[60px]">
          
          {/* Circular Logo Setup */}
          <Link to="/" className="flex items-center group active:scale-95 transition-transform">
            <div className="w-12 h-12 rounded-full border-2 border-gold/50 flex items-center justify-center p-1.5 overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.2)] bg-[#111]">
              <img 
                src="/saraye-logo.png" // Update with your exact filename in public/
                alt="Saraye Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Right Side: Language + Menu Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang} 
              className="px-3 py-1 border border-gold/30 rounded-lg text-gold text-xs font-bold"
            >
              <Globe size={14} className="inline mr-1" /> {lang === 'en' ? 'हिन्दी' : 'EN'}
            </button>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gold p-1.5">
              {mobileOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Fullscreen Mobile Menu (Fix for Messy Overlay) */}
      <div className={`fixed inset-0 bg-black z-[90] transition-transform duration-300 ease-in-out ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-screen gap-10 text-3xl font-bold text-white px-8">
          
          <Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-gold active:scale-95">
            {t.home}
          </Link>
          
          <Link to="/#stores" onClick={() => setMobileOpen(false)} className="hover:text-gold active:scale-95">
            {t.stores}
          </Link>
          
          <hr className="border-gold/20 w-1/4" />
          
          <a 
            href="https://wa.me/919099484892?text=Hi%20Saraye%20Team%2C%20I%20want%20to%20list%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gold text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle size={28} /> {lang === 'hi' ? 'बिज़नेस जोड़ें' : 'List Your Business'}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
