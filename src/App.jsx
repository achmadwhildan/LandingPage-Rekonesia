import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/About/Home";
import VisiMisi from "./pages/About/VisiMisi";
import Services from "./pages/services/Services";
import Contact from "./pages/contacts/Contact";
import Customer from "./pages/About/Customer";
import PageLoader from "./components/pageLoader";
import PageTransition from "./components/PageTransition";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, startTransition } from "react";
function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      startTransition(() => {
        setLoading(false);
      });
    }, 1200);

    startTransition(() => {
      setLoading(true);
    });

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
                <Customer />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <VisiMisi />
              </PageTransition>
            }
          />
          <Route
            path="/service"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
