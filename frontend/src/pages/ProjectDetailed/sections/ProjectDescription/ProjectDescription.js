import React from 'react'
import './projectdescription.css'
import AddProject from '../../../../Helper/AddProject'


export default function ProjectDescription({project}) {

  return (
    <div className='project-description-section'>
    <h4 className='pd-title'>{project.projectName}</h4>
    <div className="project-description-wrapper">
    <div className="project-description"><iframe title="video" src="https://player.vimeo.com/video/874076875?h=885a0908cb" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      <h4 className="date">2022-2023</h4>
      <tt>This project is </tt>
    </div>
    <div className="project-description"><h4>features</h4><tt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam seq</tt></div>
    <div className="project-description"><AddProject/> <div id="retainable-rss-embed" 
data-rss="https://medium.com/@jagdish_aneshwar"
data-maxcols="3" 
data-layout="grid" 
data-poststyle="inline" 
data-readmore="Read the rest" 
data-buttonclass="btn btn-primary" 
data-offset="-100"></div></div>
    </div>
    </div>
  )
}
