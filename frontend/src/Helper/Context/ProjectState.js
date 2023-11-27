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
              "Access-Control-Allow-Origin": "*"

            },
          }
        );
        const json = await response.json();
        setProject(json);
      };


      const toProjectDetailed = async (project, navigate) =>{
        console.log("component",project.caption)
        navigate(`/ProjectDetail`, {
          state: {
            id:project._id,
            projectName:project.projectName,
            projectDescription:project.projectDescription,
            date:project.date,
            features:project.features,
            technology:project.technology,
            webpageLink:project.webpageLink,
            gitRepoLink:project.gitRepoLink,
            caption:project.caption,
            mediumArticleLink:project.mediumArticleLink,
            projectImagesDesktop:project.projectImagesDesktop,
            projectImagesMobile:project.projectImagesMobile,
            thumbnail:project.thumbnail
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
