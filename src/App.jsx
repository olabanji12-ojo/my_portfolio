import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  
  return (
    <div className="bg-black text-white font-sans">

     <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />


    </div>
  )
}

export default App 