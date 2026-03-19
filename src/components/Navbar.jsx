import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en'); 
  const location = useLocation();

  // Scroll effect for professional feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'en' ? 'hi' : 'en');

  const t = lang === 'hi' 
    ? { home: 'होम', stores: 'स्टोर्स', contact: 'संपर्क' }
    : { home: 'Home', stores: 'Stores', contact: 'Contact' };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 py-2 border-b border-gold/30 shadow-2xl' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Text replaced with the Image you provided */}
        <Link to="/" className="flex items-center group active:scale-95 transition-transform">
          <img 
            src="/saraye-logo.png" 
            alt="Saraye Logo" 
            className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          />
        </Link>

        {/* Desktop Menu - Professional Spacing & Hover */}
        <div className="hidden md:flex items-center gap-8 text-[17px] font-semibold text-white/90">
          <Link to="/" className="hover:text-gold transition-colors relative group">
            {t.home}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/#stores" className="hover:text-gold transition-colors relative group">
            {t.stores}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </Link>
          
          <a 
            href="https://wa.me/919099484892?text=Hi%20Saraye%20Team%2C%20I%20want%20to%20list%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-gold/10 border border-gold/50 rounded-full text-gold hover:bg-gold hover:text-black transition-all duration-500 font-bold shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          >
            <MessageCircle size={18} />
            List Business
          </a>
        </div>

        {/* Language & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang} 
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gold/20 text-gold hover:bg-gold/10 transition font-bold text-sm"
          >
            <Globe size={16} /> {lang === 'en' ? 'हिंदी' : 'EN'}
          </button>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gold p-1 focus:outline-none">
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Smooth Overlay */}
      <div className={`fixed inset-0 top-[70px] bg-black/98 z-40 md:hidden transition-all duration-300 ${
        mobileOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
      }`}>
        <div className="flex flex-col items-center gap-10 pt-16 text-2xl font-bold text-white">
          <Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-gold">{t.home}</Link>
          <Link to="/#stores" onClick={() => setMobileOpen(false)} className="hover:text-gold">{t.stores}</Link>
          <button onClick={toggleLang} className="text-gold border border-gold/30 px-6 py-2 rounded-lg">
             {lang === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
          </button>
          <a 
            href="https://wa.me/919099484892"
            target="_blank"
            className="flex items-center gap-3 text-black bg-gold px-8 py-3 rounded-full shadow-glow"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle size={24} /> List Your Business
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
