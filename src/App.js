/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './App.css';
import Home from "./components/Home";
import Navbars from "./components/Navbars";
import ScrollY from  "./components/ScrollY";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import { Routes, Route } from 'react-router-dom';
import Blog from "./components/Blog";
import Footers from "./components/Footers";

function App() {

  return (

    <div id="Site">

      <Navbars />
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/roadmap" element={ <Roadmap />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/blog" element={ <Blog />} />
          <Route path="/about" element={ <About />} />
      </Routes>
      <Footers />
      <ScrollY />
    </div>
    
  );
}

export default App;
