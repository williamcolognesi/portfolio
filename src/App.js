import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Phrase from "./components/Phrase";

import "../src/assets/css/global.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Presentation />
      <Portfolio />
      <Contact />
      <Phrase />
      <Footer />
    </div>
  );
}

export default App;
