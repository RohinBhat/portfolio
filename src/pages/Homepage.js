import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HiringCTA from "../components/HiringCTA";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import React from "react";
import Recommendations from "../components/Recommendations";
import Skills from "../components/Skills";

export default function Homepage() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Recommendations />
      <HiringCTA />
      <Footer />
    </div>
  );
}
