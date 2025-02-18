import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Omnipresent/Navbar"; // Navbar is omnipresent

function App() {
  return (
    <>
      <Navbar /> {/* Always present */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Other routes here */}
      </Routes>
    </>
  );
}

export default App;
