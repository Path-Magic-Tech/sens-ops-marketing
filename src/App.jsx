import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const { pathname } = useLocation();

  // Minimal scroll-to-top on route change
  useEffect(() => {
    // Force instant jump to top on route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
