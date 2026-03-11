import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import DeliveryPartnerSection from "./pages/DeliveryPartner";
import ScrollToTop from "./components/ScrolltoTop";
import FloatingAppButton from "./components/FloatingAppButton";


function App() {

  
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <FloatingAppButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deliverypartner" element={<DeliveryPartnerSection />} />

      </Routes>
      <Footer />

    </Router>
  );
}

export default App;