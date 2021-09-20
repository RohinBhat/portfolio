import "./App.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HiringCTA from "./components/HiringCTA";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <div className="w-3/4 mx-auto">
        <NavBar />
        <Hero />
        <Services />
        <HiringCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
