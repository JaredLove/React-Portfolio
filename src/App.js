import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from './components/Nav';

function App() {

  return (
    <div className='hero'>
    <><Nav></Nav></>
     
  
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
    
    </div>
  );
}

export default App;
