import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/about";
import Skills from "./Components/Skills/skills";
import Mywork from "./Components/MyWork/mywork";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
