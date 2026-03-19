const TableReservation = ({ store }) => {
  const [time, setTime] = useState(store.tables[0] || '')
  const handleBook = () => {
    openWhatsApp(`Table booking at ${store.name}\nTime: ${time}\nGuests: 4\nThank you!`)
  }
  return (
    <div className="glass p-12 rounded-3xl max-w-md mx-auto text-center">
      <h3 className="text-3xl mb-8">Reserve Your Table</h3>
      <select value={time} onChange={e=>setTime(e.target.value)} className="glass text-xl px-8 py-4 rounded-2xl w-full mb-8">
        {store.tables.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <button onClick={handleBook} className="bg-gold text-black px-12 py-4 rounded-2xl text-xl">Book via WhatsApp</button>
    </div>
  )
}
export default TableReservation
