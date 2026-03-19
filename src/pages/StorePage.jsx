// src/pages/StorePage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Clock, Bed, Utensils, ShoppingBag, QrCode } from 'lucide-react';

import { getStoreById } from '../services/firebase';
import { openWhatsApp } from '../services/whatsapp';
import { downloadInvoice } from '../services/invoice';

import FoodMenu from '../components/FoodMenu';
import TableReservation from '../components/TableReservation';
import RoomCard from '../components/RoomCard';
import QRGenerator from '../components/QRGenerator';

const StorePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const store = getStoreById(id);

  const [activeTab, setActiveTab] = useState(() => {
    if (store?.rooms?.length > 0) return 'rooms';
    if (store?.menu?.length > 0) return 'food';
    return 'table';
  });

  const [cart, setCart] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingDate, setBookingDate] = useState('');

  if (!store) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">
        Store not found
      </div>
    );
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  const handleSendOrder = () => {
    if (cart.length === 0) return;

    let message = `New Order from ${store.name}\n\n`;
    cart.forEach(item => {
      message += `${item.name} × ${item.qty || 1} = ₹${item.price * (item.qty || 1)}\n`;
    });
    message += `\nTotal: ₹${cartTotal}\n\nThank you!`;
    
    openWhatsApp(message);
    downloadInvoice(store, { items: cart, total: cartTotal });
    setCart([]);
  };

  const handleRoomBooking = () => {
    if (!selectedRoom) return;

    const message = `Room Booking Request\n\n` +
      `Store: ${store.name}\n` +
      `Room: ${selectedRoom.type}\n` +
      `Price: ₹${selectedRoom.price}\n` +
      `Date: ${bookingDate || 'Flexible dates'}\n\n` +
      `Looking forward to your confirmation!`;

    openWhatsApp(message);
    downloadInvoice(store, { type: selectedRoom.type, total: selectedRoom.price }, true);
    setSelectedRoom(null);
    setBookingDate('');
  };

  const hasFood = store.menu?.length > 0;
  const hasRooms = store.rooms?.length > 0;
  const hasTables = store.tables?.length > 0;

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-32">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-24 left-6 z-50 flex items-center gap-2 px-5 py-3 glass rounded-2xl text-gold hover:bg-gold/10 transition"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      {/* Store Hero */}
      <div className="relative h-80 md:h-96 mb-12">
        <img
          src={store.images?.[0] || 'https://picsum.photos/1200/600?random'}
          alt={store.name}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-7xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-2">
                {store.name}
              </h1>
              <div className="flex items-center gap-6 text-lg">
                <span className="text-gold uppercase tracking-wider">{store.type}</span>
                <div className="flex items-center gap-2 text-gold">
                  <Star size={20} fill="currentColor" />
                  {store.rating}
                </div>
              </div>
              <p className="text-gray-300 mt-3">{store.address}</p>
            </div>

            <QRGenerator store={store} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-4">
          {hasFood && (
            <button
              onClick={() => setActiveTab('food')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all ${
                activeTab === 'food'
                  ? 'bg-gold text-black'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              <Utensils size={18} />
              Menu / Products
            </button>
          )}

          {hasTables && (
            <button
              onClick={() => setActiveTab('table')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all ${
                activeTab === 'table'
                  ? 'bg-gold text-black'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              <Clock size={18} />
              Table Booking
            </button>
          )}

          {hasRooms && (
            <button
              onClick={() => setActiveTab('rooms')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all ${
                activeTab === 'rooms'
                  ? 'bg-gold text-black'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              <Bed size={18} />
              Rooms
            </button>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'food' && hasFood && (
            <motion.div
              key="food"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <FoodMenu store={store} cart={cart} setCart={setCart} />
            </motion.div>
          )}

          {activeTab === 'table' && hasTables && (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TableReservation store={store} />
            </motion.div>
          )}

          {activeTab === 'rooms' && hasRooms && (
            <motion.div
              key="rooms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {store.rooms.map(room => (
                <RoomCard
                  key={room.id}
                  room={room}
                  isSelected={selectedRoom?.id === room.id}
                  onSelect={() => setSelectedRoom(room)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-6">
        <div className="glass px-6 py-5 rounded-3xl shadow-2xl shadow-gold/10 flex flex-wrap justify-center gap-4 items-center">
          {activeTab === 'food' && cart.length > 0 && (
            <button
              onClick={handleSendOrder}
              className="bg-gold text-black px-8 py-4 rounded-2xl font-medium flex items-center gap-3 hover:bg-white transition"
            >
              <ShoppingBag size={20} />
              Order via WhatsApp • ₹{cartTotal}
            </button>
          )}

          {activeTab === 'rooms' && selectedRoom && (
            <button
              onClick={handleRoomBooking}
              className="bg-gold text-black px-8 py-4 rounded-2xl font-medium flex items-center gap-3 hover:bg-white transition"
            >
              <Bed size={20} />
              Book Room via WhatsApp
            </button>
          )}

          {activeTab === 'table' && (
            <button
              onClick={() => openWhatsApp(`Table reservation request at ${store.name}`)}
              className="bg-gold text-black px-8 py-4 rounded-2xl font-medium hover:bg-white transition"
            >
              Reserve Table via WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
