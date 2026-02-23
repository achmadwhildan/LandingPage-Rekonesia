import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/About/Home';
import VisiMisi from './pages/About/VisiMisi';
import Services from "./pages/services/Services";
import Contact from "./pages/contacts/Contact";
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Halaman Home */}
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <VisiMisi />
              <Services />
            </>
          } 
        />

        {/* Halaman Contact */}
        <Route 
          path="/contact" 
          element={<Contact />} 
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;