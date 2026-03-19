import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import StorePage from './pages/StorePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store/:id" element={<StorePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
