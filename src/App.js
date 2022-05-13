import Navbar from "./coponents/Navbar"
import Home from "./coponents/pages/Home"
import About from "./coponents/pages/About"
import Contact from "./coponents/pages/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./coponents/Footer"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
