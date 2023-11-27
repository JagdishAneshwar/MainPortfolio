import React from 'react'
import './projectdetailed.css'
import HeroSec from './sections/HeroSec/HeroSec'
import Navbar from '../../components/Navbar/Navbar'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import ProjectDescription from './sections/ProjectDescription/ProjectDescription'
import Footer from '../../sections/FooterSection/FooterSec'
import { useLocation } from "react-router-dom";

export default function ProjectDetailed() {
  const location = useLocation();
  const {_id,
    projectName,
    projectDescription,
    date,
    features,
    technology,
    webpageLink,
    caption,
    gitRepoLink,
    mediumArticleLink,
    projectImagesDesktop,
    projectImagesMobile,
    thumbnail} = location.state;
  return (
    <div className='project-detailed-page'>
    <Navbar/>
    
    <HeroSec desktopImg={projectImagesDesktop} mobileImg={projectImagesMobile} caption={caption} id={_id} />
    <ProjectDescription project={{_id,projectName,
    projectDescription,
    date,
    features,
    technology,
    webpageLink,
    gitRepoLink,
    mediumArticleLink,
    caption,
    projectImagesDesktop,
      projectImagesMobile,
      thumbnail
    }} />
    <Footer color="black" bg="white"   />
    </div>
  )
}
