import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const images = ["store2.jpeg", "store1.jpeg", "store3.jpeg", "store5.jpeg"];

  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home images={images} />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;


