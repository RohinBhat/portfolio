import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HiringCTA from "../components/HiringCTA";
import NavBar from "../components/NavBar";
import React from "react";
import Skills from "../components/Skills";

export default function Homepage() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Skills />
      <HiringCTA />
      <Footer />
    </div>
  );
}
