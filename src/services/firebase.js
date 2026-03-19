// 🔥 MOCK DATA (works instantly)
// Replace with real Firebase later (just uncomment the import section)

export const stores = [
  {
    id: "1", name: "Spice Palace", type: "restaurant", address: "Andheri West, Mumbai", rating: 4.8,
    images: ["https://picsum.photos/id/1015/1200/600", "https://picsum.photos/id/292/800/600"],
    description: "Authentic Indian cuisine with futuristic flair.",
    menu: [
      { id: 101, name: "Butter Chicken", price: 349, image: "https://picsum.photos/id/292/300/300" },
      { id: 102, name: "Paneer Tikka Masala", price: 279, image: "https://picsum.photos/id/201/300/300" },
      { id: 103, name: "Dal Makhani", price: 229, image: "https://picsum.photos/id/160/300/300" }
    ],
    rooms: [], tables: ["18:00", "19:00", "20:00", "21:00"], reviews: [{user:"Aarav", text:"Mind-blowing!", rating:5}]
  },
  {
    id: "2", name: "Taj Haven", type: "hotel", address: "Marine Drive, Mumbai", rating: 4.9,
    images: ["https://picsum.photos/id/1036/1200/600"],
    description: "5-star luxury with ocean views.",
    menu: [], 
    rooms: [
      { id: 201, type: "Ocean Suite", price: 8999, image: "https://picsum.photos/id/160/300/300" },
      { id: 202, type: "Deluxe Room", price: 4999, image: "https://picsum.photos/id/201/300/300" }
    ],
    tables: ["10:00", "11:00"], reviews: [{user:"Meera", text:"Best stay ever!", rating:5}]
  },
  {
    id: "3", name: "Golden Luxe Shop", type: "shop", address: "Bandra, Mumbai", rating: 4.7,
    images: ["https://picsum.photos/id/106/1200/600"],
    description: "Premium lifestyle store.",
    menu: [
      { id: 301, name: "Luxury Watch", price: 14999, image: "https://picsum.photos/id/180/300/300" },
      { id: 302, name: "Designer Sunglasses", price: 4999, image: "https://picsum.photos/id/201/300/300" }
    ],
    rooms: [], tables: [], reviews: [{user:"Rohan", text:"Top quality!", rating:4}]
  }
]

// Export functions (switch to Firebase later)
export const getStores = () => stores
export const getStoreById = (id) => stores.find(s => s.id === id)
