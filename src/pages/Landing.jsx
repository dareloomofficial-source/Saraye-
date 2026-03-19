// src/pages/Landing.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Search, Filter } from 'lucide-react';
import StoreCard from '../components/StoreCard';
import { getStores } from '../services/firebase';

const Landing = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  
  const stores = getStores();

  const filteredStores = stores.filter(store => {
    const matchesType = filter === 'all' || store.type === filter;
    const matchesSearch = store.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  // PWA install prompt handling
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
  });

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('PWA installed');
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient + subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-950" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-heading font-bold tracking-tight mb-6 text-gold"
          >
            SARAYE
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl md:text-4xl mb-10 text-gray-300"
          >
            Hotels • Restaurants • Shops
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={handleInstallClick}
              className="group flex items-center gap-3 px-8 py-4 bg-gold text-black rounded-2xl text-lg font-medium hover:bg-white transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40"
            >
              <Download size={22} />
              Add to Home Screen
            </button>

            <a
              href="#stores"
              className="px-8 py-4 border-2 border-gold text-gold rounded-2xl text-lg font-medium hover:bg-gold hover:text-black transition-all duration-300"
            >
              Explore Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Food Ordering", icon: "🍲" },
            { title: "Table Booking", icon: "🪑" },
            { title: "Room Booking", icon: "🛏️" },
            { title: "Instant Invoice", icon: "📄" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-medium">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Store Listing Section */}
      <section id="stores" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">
            Discover Experiences
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search stores..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="glass w-full pl-12 pr-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="glass px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
            >
              <option value="all">All Types</option>
              <option value="restaurant">Restaurants</option>
              <option value="hotel">Hotels</option>
              <option value="shop">Shops</option>
            </select>
          </div>
        </div>

        {filteredStores.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-xl">
            No stores found matching your search
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStores.map((store) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <StoreCard store={store} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Landing;
