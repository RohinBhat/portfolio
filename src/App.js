import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Footer from "./components/Shared/Footer";
import Homepage from "./pages/Homepage";
import Messages from "./pages/Messages";
import NavBar from "./components/Shared/NavBar";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import ScrollToTop from "./components/Shared/ScrollToTop";
import { ToastContainer } from "react-toastify";
import WhatIDo from "./pages/WhatIDo";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-11/12 md:w-3/4 mx-auto">
        <ScrollToTop>
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
            <Route exact path="/messages">
              <Messages />
            </Route>
            <Route path="">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
