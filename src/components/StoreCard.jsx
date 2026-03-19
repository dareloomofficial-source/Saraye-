import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const StoreCard = ({ store }) => (
  <Link to={`/store/${store.id}`} className="group">
    <div className="glass rounded-3xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl">
      <img src={store.images[0]} alt={store.name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-heading">{store.name}</h3>
            <p className="text-gold text-sm uppercase tracking-widest">{store.type}</p>
          </div>
          <div className="flex items-center gap-1 text-gold">
            <Star size={18} fill="currentColor" /> {store.rating}
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2 line-clamp-2">{store.description}</p>
      </div>
    </div>
  </Link>
)

export default StoreCard
