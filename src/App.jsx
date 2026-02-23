import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/About/Home';
import VisiMisi from './pages/About/VisiMisi';
import Services from "./pages/services/Services";
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <VisiMisi />
        <Services />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;