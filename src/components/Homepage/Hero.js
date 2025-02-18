import React from "react";
import { Link } from "react-router-dom";
import "./css/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Experience Faith Like Never Before</h1>
        <p>Join us for an inspiring Catholic event featuring world-renowned speakers.</p>
        <Link to="/tickets" className="cta-button">Get Tickets</Link>
      </div>
    </section>
  );
};

export default Hero;
