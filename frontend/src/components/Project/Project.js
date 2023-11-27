import { useNavigate } from 'react-router-dom';
import React, {useContext} from 'react'
import projectContext from '../../Helper/Context/Context'
import './project.css'

export default function Project({project}) {
  const context = useContext(projectContext);
  const navigate = useNavigate();
  const{toProjectDetailed} = context;
  
  return (
    <div className='project-wrapper' onClick={() => { toProjectDetailed(project, navigate);}}>
    
        <div className="project-img-wrapper">
            <div className="project-img" style={{backgroundImage:  `url(${project.thumbnail})`}}></div>
        </div>
        <div className="overview-info">
        <h3 className='project-title'>{project.projectName}</h3>
        <div className="project-overview-description"><tt>{project.projectDescription}</tt></div>
        </div>
    </div>
  )
}
