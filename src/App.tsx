import React from "react";

// Components
import Navbar from "./components/Navbar/Navbar";
import PriceBreakup from "./components/Section/PriceBreaku";
import PriceBreakupCard from "./components/Section/PriceBreakupCard";
import ProductDetailsSection from "./components/Hero/ProductDetailsSection";
import FindInStoreSection from "./components/Section/FindInStoreSection";
import Footer from "./components/footer/Footer";
import CardappTwo from "./components/card/CardappTwo"; // Correct import
import CardApp from "./components/card/CardApp";
import  CertificationTabsSectio from "./components/Hero/CertificationTabsSectio"

function App() {
  return (
    <div>
      <Navbar />
      <PriceBreakupCard />
      <ProductDetailsSection />
      <PriceBreakup />
< CertificationTabsSectio />
      {/* Only ONE Call – removed duplicate */}
      <CardappTwo />

      {/* If 'Cards' is a separate component keep it here */}
      <CardApp />

      <FindInStoreSection />
      <Footer />
    </div>
  );
}

export default App;
