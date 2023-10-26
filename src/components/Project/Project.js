import React from 'react'
import './project.css'

export default function Project(props) {
  return (
    <div className='project-wrapper'>
        <div className="project-img-wrapper">
            <div className="project-img" style={{backgroundImage:  `url(${props.img})`}}><h3 className='project-title'>{props.title}</h3></div>
        </div>
    </div>
  )
}
