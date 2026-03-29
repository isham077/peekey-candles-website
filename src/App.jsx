import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import About from './pages/About';
import Enquiry from './pages/Enquiry';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/about" element={<About />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <SpeedInsights />
      </div>
    </BrowserRouter>
  );
}

export default App;
