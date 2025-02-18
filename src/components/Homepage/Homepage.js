import React, { useMemo } from "react";
import CountdownTimer from "./CountdownTimer";
import Hero from "./Hero";
import "./css/Homepage.css";

const Homepage = () => {
  const eventDate = useMemo(() => new Date("2025-08-15T18:00:00"), []);

  return (
    <div className="homepage">
      <Hero />
      <section className="countdown-wrapper">
        <CountdownTimer eventDate={eventDate} />
      </section>
    </div>
  );
};

export default Homepage;
