import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import VerifiyCert from './pages/VerifiyCert';
import Certification from './pages/Certification';
import Contact from './pages/Contact';

export default function App() {
return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certification />} />
        <Route path="/verify-cert" element={<VerifiyCert />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}