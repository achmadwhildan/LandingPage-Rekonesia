import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/About/Home";
import VisiMisi from "./pages/About/VisiMisi";
import Services from "./pages/services/Services";
import Contact from "./pages/contacts/Contact";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ─── Loading Screen ─── */
function LoadingScreen() {
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
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="loading-content">
        {/* Logo */}
        <motion.div
          className="loading-logo"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          REKONESIA
        </motion.div>

        {/* Spinner */}
        <div className="loading-spinner-wrap">
          <div className="loading-spinner"></div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Animated Routes ─── */
function AnimatedRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key={displayLocation.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Routes location={displayLocation}>
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
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Footer pindah ke sini */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── App ─── */
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
