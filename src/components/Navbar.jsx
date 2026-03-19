import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState('en') // en / hi

  const toggleLang = () => setLang(lang === 'en' ? 'hi' : 'en')

  const t = lang === 'hi' 
    ? { home: 'होम', stores: 'स्टोर्स' }
    : { home: 'Home', stores: 'Stores' }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-heading tracking-tighter text-gold">SARAYE</Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-gold transition">{t.home}</Link>
          <Link to="/#stores" className="hover:text-gold transition">{t.stores}</Link>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleLang} className="flex items-center gap-1 text-sm hover:text-gold">
            <Globe size={18} /> {lang === 'en' ? 'हिंदी' : 'EN'}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
