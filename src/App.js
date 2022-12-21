import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Offers from "./components/Offers.jsx";
import Plan from "./components/Plan.jsx";
import Roomss from "./components/Roomss.jsx";
import ImageSliderApp from "./components/ContainerImg.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Roomss />
      <ImageSliderApp />
      <Footer  />
      
    </>
  );
}

export default App;
