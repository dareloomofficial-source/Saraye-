import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx' // Added .jsx extension
import Landing from './pages/Landing.jsx'
import StorePage from './pages/StorePage.jsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/store/:id" element={<StorePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
