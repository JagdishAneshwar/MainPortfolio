import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../sections/HeroSection/HeroSec'
import About from '../../sections/AboutSection/AboutSec'
import Projects from '../../sections/ProjectSection/ProjectSec'
import Contact from '../../sections/ContactSection/ContactSec'
import Footer from '../../sections/FooterSection/FooterSec'
import SocialLinks from '../../components/SocialLinks/SocialLinks'

export default function HomePage() {
  return (
    <div className="Main">
    <Navbar firstname="Jagdish" lastname="Aneshwar" />
    <SocialLinks />
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}
