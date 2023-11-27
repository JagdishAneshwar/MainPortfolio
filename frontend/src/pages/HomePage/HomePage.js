// Import React and other necessary components

import React, {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import NewAbout from './NewAbout/About'
import Hero from '../../sections/HeroSection/HeroSec';
import About from '../../sections/AboutSection/AboutSec';
import Projects from '../../sections/ProjectSection/ProjectSec';
import Contact from '../../sections/ContactSection/ContactSec';
import Footer from '../../sections/FooterSection/FooterSec';
import Certification from '../../sections/Certification/Certification';
import { motion } from 'framer-motion';

import './homepage.css';

export default function HomePage() {
  const [lgcursor, setlgcursor] = useState({ x: 0, y: 0 });
  const [smcursor, setsmcursor] = useState({ x: 0, y: 0 });
  const [scaling, setscaling] = useState(false);

  const handleScaling = (value) => {
    setscaling(value);
  };


  useEffect(() => {
    const mousemove = (e) => {
      setlgcursor({ x: e.clientX, y: e.clientY });
      setsmcursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mousemove);
    return () => {
      window.removeEventListener('mousemove', mousemove);
    };
  }, []);



  return (
    <>        <motion.div
    animate={{ x: lgcursor.x, y: lgcursor.y, transition: { type: 'spring', mass: 2 } }}
    style={{ scale: scaling ? 0.2 : 1 }}
    className="largeCursor"
  ></motion.div>
  <motion.div 
  animate={{ x: smcursor.x, y: smcursor.y }} 
  className="smallCursor">
  </motion.div>
    <div className="Main">
      <div className="flex-container">
        <div className="content-container">
          <Navbar firstname="Jagdish" lastname="Aneshwar" />
          <div className="hero-section-main">
            <Hero />
          </div>
          
          <div className="about-section-main">
            <About setScaling={handleScaling} />
          </div>
          <Certification/>
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
    </>
  );
}
