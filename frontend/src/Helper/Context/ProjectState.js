import React, { useState }  from 'react'
import ProjectContext from './Context'


const ProjectState = (props) =>{
    const projectInit = [];

    const [projects, setProject] = useState(projectInit)

    const getProject = async () => {
        
        const response = await fetch(
          "https://portfolio-bfn4.onrender.com/api/project/projectDetails",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();
        setProject(json);
      };


      const toProjectDetailed = async (project, navigate) =>{
        navigate(`/ProjectDetails`, {
          state: {
            id:project._id,
            projectName:project.projectName,
            projectDescription:project.projectDescription,
            date:project.date,
            features:project.features,
            technology:project.technology,
            webpageLink:project.webpageLink,
            gitRepoLink:project.gitRepoLink,
            mediumArticleLink:project.mediumArticleLink,
            projectImage:project.projectImage
          },
        });
      }

return(
    <ProjectContext.Provider value={{projects, setProject, getProject, toProjectDetailed}}>
    {props.children}
    </ProjectContext.Provider>
)


}


export default ProjectState;