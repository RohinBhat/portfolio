import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Footer from "./components/Shared/Footer";
import Homepage from "./pages/Homepage";
import NavBar from "./components/Shared/NavBar";
import Resume from "./pages/Resume";
import WhatIDo from "./pages/WhatIDo";

function App() {
  return (
    <Router>
      <div className="w-11/12 md:w-3/4 mx-auto">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/work">
            <WhatIDo />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
