import React from 'react'
import './projectdetailed.css'
import HeroSec from './sections/HeroSec/HeroSec'
import Navbar from '../../components/Navbar/Navbar'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import ProjectDescription from './sections/ProjectDescription/ProjectDescription'
import Footer from '../../sections/FooterSection/FooterSec'
import { useLocation } from "react-router-dom";

export default function ProjectDetailed({project}) {
  const location = useLocation();
  const {id,projectName,
    projectDescription,
    date,
    features,
    technology,
    webpageLink,
    gitRepoLink,
    mediumArticleLink,
    projectImage} = location.state;
  return (
    <div className='project-detailed-page'>
    <Navbar/>
    <SocialLinks/>
    <HeroSec img={projectImage} />
    <ProjectDescription project={{id,projectName,
    projectDescription,
    date,
    features,
    technology,
    webpageLink,
    gitRepoLink,
    mediumArticleLink}} />
    <Footer/>
    </div>
  )
}
