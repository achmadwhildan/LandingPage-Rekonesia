import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/About/Home';
import VisiMisi from './pages/About/VisiMisi';
import Services from "./pages/services/Services";
import Contact from "./pages/contacts/Contact";
import Footer from './components/Footer';
import Customer from './pages/About/Customer';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Customer />
        <VisiMisi />
        <Services />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;