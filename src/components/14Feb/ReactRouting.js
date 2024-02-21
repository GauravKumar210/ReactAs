import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";

function ReactRouting() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default ReactRouting;