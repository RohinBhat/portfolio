import CollabCTA from "../components/Homepage/CollabCTA";
import Footer from "../components/Shared/Footer";
import Hero from "../components/Homepage/Hero";
import NavBar from "../components/Shared/NavBar";
import Projects from "../components/Homepage/Projects";
import React from "react";
import Recommendations from "../components/Homepage/Recommendations";
import Skills from "../components/Homepage/Skills";

export default function Homepage() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Recommendations />
      <CollabCTA />
      <Footer />
    </div>
  );
}
