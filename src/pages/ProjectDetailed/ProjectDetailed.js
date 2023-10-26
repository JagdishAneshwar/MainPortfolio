import React from 'react'
import './projectdetailed.css'
import HeroSec from './sections/HeroSec/HeroSec'
import Navbar from '../../components/Navbar/Navbar'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import ProjectDescription from './sections/ProjectDescription/ProjectDescription'
import Footer from '../../sections/FooterSection/FooterSec'

export default function ProjectDetailed() {
  return (
    <div className='project-detailed-page'>
    <Navbar/>
    <SocialLinks/>
    <HeroSec/>
    <ProjectDescription/>
    <Footer/>
    </div>
  )
}
