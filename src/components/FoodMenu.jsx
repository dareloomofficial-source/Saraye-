const FoodMenu = ({ store, cart, setCart }) => (
  <div className="grid md:grid-cols-3 gap-8">
    {store.menu.map(item => {
      const qty = cart.find(i => i.id === item.id)?.qty || 0
      return (
        <div key={item.id} className="glass rounded-3xl p-6">
          <img src={item.image} className="rounded-2xl w-full h-48 object-cover" />
          <h4 className="text-2xl mt-6">{item.name}</h4>
          <p className="text-3xl font-medium text-gold">₹{item.price}</p>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setCart(c => c.filter(i=>i.id!==item.id))} className="px-5 py-2 border border-white/30 rounded-xl">-</button>
            <span className="px-6 py-2 text-xl">{qty}</span>
            <button onClick={() => setCart(c => [...c.filter(i=>i.id!==item.id), {...item, qty: qty+1}])} className="px-5 py-2 bg-gold text-black rounded-xl">+</button>
          </div>
        </div>
      )
    })}
  </div>
)
export default FoodMenu
