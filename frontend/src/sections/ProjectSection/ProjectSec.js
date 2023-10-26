import './Project.css'
import Project from '../../components/Project/Project'
import React, {useContext, useEffect} from 'react'
import projectContext from '../../Helper/Context/Context'

export default function ProjectSec() {
  const context = useContext(projectContext);
    const{projects,getProject} = context;

useEffect(() => {
  getProject();
})


  return (
    <>
    <div className="projects-title">
    <p>Projects</p>
</div>
    <div className='projects-section'>
    <div className='projects-wrapper'>
    { projects && projects.map((project) => {
          return (<Project project={project}  title={project.projectName} img={project.projectImage} /> );
        })
      }
        
    </div>
    </div>
    </>
  )
}











