const RoomCard = ({ room, onSelect }) => (
  <div className="glass rounded-3xl overflow-hidden">
    <img src={room.image} className="w-full h-64 object-cover" />
    <div className="p-8">
      <h4 className="text-3xl">{room.type}</h4>
      <p className="text-4xl text-gold mt-2">₹{room.price}</p>
      <button onClick={() => onSelect(room)} className="mt-6 w-full py-4 bg-white/10 hover:bg-gold hover:text-black rounded-2xl">Select Room</button>
    </div>
  </div>
)
export default RoomCard
