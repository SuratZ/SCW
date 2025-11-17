import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import VerifiyCert from './pages/VerifiyCert';
import Certification from './pages/Certification';
import Contact from './pages/Contact';

export default function App() {
  // Redirect users from /scw to /scw/ if they land on the wrong URL
  useEffect(() => {
    const currentPath = globalThis.location.pathname;
    if (currentPath === '/scw') {
      globalThis.location.replace('/scw/');
    }
  }, []);
  
  return (
    <Router basename="/scw/">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certification />} />
        <Route path="/verify-cert" element={<VerifiyCert />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect any unmatched routes to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}