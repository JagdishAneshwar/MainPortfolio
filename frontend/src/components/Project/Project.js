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
            <div className="project-img" style={{backgroundImage:  `url(${project.projectImage})`}}><h3 className='project-title'>{project.projectName}</h3></div>
        </div>
    </div>
  )
}
