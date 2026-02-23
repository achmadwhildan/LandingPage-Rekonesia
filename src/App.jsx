import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/About/Home';
import VisiMisi from './pages/About/VisiMisi';
import Services from "./pages/services/Services";
import Contact from "./pages/contacts/Contact";
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <VisiMisi />
        <Services />
        <Contact />
      </BrowserRouter>
    </>
  )
}

export default App;