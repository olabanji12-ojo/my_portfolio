import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Home from './components/Home';
// import Home from './components/Home';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans">

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />


    </div>
  )
}

export default App 

// brookesautomation.page.gd