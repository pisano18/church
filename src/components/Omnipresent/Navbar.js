import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const NAV_LINKS = [
  { name: "About", path: "/about" },
  { name: "Speakers", path: "/speakers" },
  { name: "Tickets", path: "/tickets" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">Catholic Event</Link>
        <nav>
          <ul className="nav-links">
            {NAV_LINKS.map(({ name, path }) => (
              <li key={name}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
