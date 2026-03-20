{
  id: "new-dens-pizza",  // Unique ID (use slug or number like "5")
  name: "New Den's Pizza & Fast Food Corner",
  type: "restaurant",
  address: "Your Mumbai Address (e.g., Andheri West / Bandra / or Nagar Palika Road, Ghatampur if UP)",  // Update to exact Mumbai spot if available
  rating: 4.1,
  images: [
    "https://your-hosted-image-url/poster.jpg",  // Upload the full poster you shared to public/ or Firebase Storage later
    "https://picsum.photos/id/292/1200/600"     // Placeholder pizza image
  ],
  description: "Fresh pizzas, cheesy fast food, burgers, Maggi, Chinese & more. Home delivery available! EAT. TREAT. ENJOY 🍕",
  menu: [
    // Sandwiches (from your menu)
    { id: 501, name: "Grilled Sandwich", price: 50, image: "https://picsum.photos/id/292/300/300" },
    { id: 502, name: "Veg Cheese Sandwich", price: 60, image: "https://picsum.photos/id/201/300/300" },
    { id: 503, name: "Cheese Corn Sandwich", price: 70, image: "https://picsum.photos/id/160/300/300" },
    { id: 504, name: "Paneer Cheese Sandwich", price: 80, image: "https://picsum.photos/id/180/300/300" },
    { id: 505, name: "Tandoori Pizza Sandwich", price: 100, image: "https://picsum.photos/id/1015/300/300" },

    // Pizzas (small/medium/large – you can simplify or add variants later)
    { id: 506, name: "Cheese Lovers Pizza (Medium)", price: 120, image: "https://picsum.photos/id/292/300/300" },
    { id: 507, name: "Onion Pizza (Large)", price: 180, image: "https://picsum.photos/id/201/300/300" },
    { id: 508, name: "Tandoori Paneer Pizza (Large)", price: 280, image: "https://picsum.photos/id/160/300/300" },
    { id: 509, name: "Den's Special Pizza (Large)", price: 300, image: "https://picsum.photos/id/180/300/300" },

    // Burgers
    { id: 510, name: "Aloo Tikki Burger", price: 30, image: "https://picsum.photos/id/1015/300/300" },
    { id: 511, name: "Paneer Burger", price: 40, image: "https://picsum.photos/id/292/300/300" },

    // Maggi & More (add as needed)
    { id: 512, name: "Masala Maggi", price: 30, image: "https://picsum.photos/id/201/300/300" },
    { id: 513, name: "Chilli Paneer (Dry & Gravy)", price: 140, image: "https://picsum.photos/id/160/300/300" }
    // ... Add soups, rice, Chinese, pasta, etc. similarly
  ],
  rooms: [],           // Not a hotel
  tables: ["18:00", "19:00", "20:00", "21:00"],  // Example booking slots
  reviews: [
    { user: "Food Lover", text: "Cheesy pizzas at great prices! Fast delivery.", rating: 4.5 },
    { user: "Local", text: "Best veg fast food in area.", rating: 4 }
  ]
},
