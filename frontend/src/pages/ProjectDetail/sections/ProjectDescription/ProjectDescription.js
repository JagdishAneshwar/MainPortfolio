import React,{useRef, useEffect} from 'react';
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';
import './projectdescription.css';


// import AddProject from '../../../../Helper/AddProject'


export default function ProjectDescription({project}) {
  gsap.registerPlugin(ScrollTrigger)
  const projectDetailedTitleRef = useRef(null)
  const projectDetailedDateRef = useRef(null)
  const projectDetailedDescriptionRef = useRef(null)
  const projectDetailedFeatureRef = useRef(null)
  const projectDetailedTechnologyRef = useRef(null)
  const projectDetailedFeatureTitleRef = useRef(null)
  const projectDetailedTechnologyTitleRef = useRef(null)
  const projectDetailedInstallationTitleRef = useRef(null)
  const projectDetailedInstallatioRef = useRef(null)
  const projectDetailedBackendTitleRef = useRef(null)
  const projectDetailedFrontendTitleRef = useRef(null)
  const projectDetailedFrontendRef = useRef(null)
  const projectDetailedBackendRef = useRef(null)


  useEffect(()=>{
    const projectDetailedTitle = new SplitType(projectDetailedTitleRef.current, { types: 'chars' });
    gsap.from(projectDetailedTitle.chars, {
      y: 800,
      opacity: 0,
      duration: 2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedTitleRef.current,
        start: 'top 110%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    const projectDetailedDate = new SplitType(projectDetailedDateRef.current, { types: 'words' });
    gsap.from(projectDetailedDate.words, {
      y: 800,
      opacity: 0,
      duration: 1.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedDateRef.current,
        start: 'top 110%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    const projectDetailedDescription = new SplitType(projectDetailedDescriptionRef.current, { types: 'lines' });
    gsap.from(projectDetailedDescription.lines, {
      y: 100,
      opacity: 0,
      delay:1.5,
      duration: 1.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedDescriptionRef.current,
        start: 'top 100%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    const projectDetailedInstallation= new SplitType(projectDetailedInstallatioRef.current, { types: 'lines' });
    gsap.from(projectDetailedInstallation.lines, {
      y: 100,
      opacity: 0,
      delay:1.5,
      duration: 1.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedInstallatioRef.current,
        start: 'top 100%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    const projectDetailedFeature = new SplitType(projectDetailedFeatureRef.current, { types: 'lines' });
    gsap.from(projectDetailedFeature.lines, {
      y: 100,
      opacity: 0,
      delay:2.5,
      duration: 1.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedFeatureRef.current,
        start: 'top 100%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });


    const projectDetailedTechnology = new SplitType(projectDetailedTechnologyRef.current, { types: 'lines' });
    gsap.from(projectDetailedTechnology.lines, {
      y: 100,
      opacity: 0,
      delay:2.5,
      duration: 1.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedTechnologyRef.current,
        start: 'top 120%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    const projectDetailedTechnologyTitle = new SplitType(projectDetailedTechnologyTitleRef.current, { types: 'lines' });
    gsap.from(projectDetailedTechnologyTitle.lines, {
      y: 100,
      opacity: 0,
      delay:2.5,
      duration: 1.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedTechnologyTitleRef.current,
        start: 'top 100%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    const projectDetailedInstallationTitle = new SplitType(projectDetailedInstallationTitleRef.current, { types: 'lines' });
    gsap.from(projectDetailedInstallationTitle.lines, {
      y: 100,
      opacity: 0,
      delay:2.5,
      duration: 1.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedInstallationTitleRef.current,
        start: 'top 100%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    const projectDetailedFeatureTitle = new SplitType(projectDetailedFeatureTitleRef.current, { types: 'lines' });
    gsap.from(projectDetailedFeatureTitle.lines, {
      y: 100,
      opacity: 0,
      delay:2.5,
      duration: 1.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedFeatureTitleRef.current,
        start: 'top 120%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    const projectDetailedBackendTitle = new SplitType(projectDetailedBackendRef.current, { types: 'lines' });
    gsap.from(projectDetailedBackendTitle.lines, {
      y: 100,
      opacity: 0,
      delay:2.5,
      duration: 1.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedBackendRef.current,
        start: 'top 120%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    const projectDetailedFrontendTitle = new SplitType(projectDetailedFrontendRef.current, { types: 'lines' });
    gsap.from(projectDetailedFrontendTitle.lines, {
      y: 100,
      opacity: 0,
      delay:2.5,
      duration: 1.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectDetailedFrontendRef.current,
        start: 'top 120%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });


  })

  return (
    <div className='project-description-section'>
    <div className="project-description-wrapper">
    <div className="project-video">
    <div className="pd-title-wrapper"><span className='span-wrapper'><h4 className='pd-title' ref={projectDetailedTitleRef}>{project.projectName}</h4></span><a class="icons8-link" href={project.webpageLink} target='_blank' rel='norefferer'>Live<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nO3bMWodQRBAwb6elSgaFOjuNjLyKSSQaPiBAjn1f2arYGDYZINHzyY7MwAAAADAvTzMzM+Z+Yisy3sNRBDkC0Fifjiyru3MzJsj6/+I4aP+Dz19E+O7ONxpMt5n5lmQVoxlQkIxliChGEuQUIwlSCjGEiQUYwkSirEECcVYgoRiLEFCMZYgoRhLkFCMJUgoxhIkFGMJEoqxBAnFWIKEYixBQjGWIKEYS5BQjCVIKMYSJBRjCRKKsQQJxViChGIsQUIxliChGOvXl/fvTa5LevrLj8/7/B73U15va/eXcyKTwYiRckxGxxGj44jRccToOGJ0HDE6jhgdR4yOI0bHEaPjiNFxxOg4YnSIESJGiBghYoSIESJGiBghYoSIESJGiBghYoSIESJGiBghYoSIESJGiBghYoSIEfIYumDJzPwWo+WPyegdWS+3S/G7BwAAAADmej4BKf6YK/amsskAAAAASUVORK5CYII="></img></a><a class="icons8-link" href={project.gitRepoLink} target='_blank' rel='norefferer'>Github<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nO3bMWodQRBAwb6elSgaFOjuNjLyKSSQaPiBAjn1f2arYGDYZINHzyY7MwAAAADAvTzMzM+Z+Yisy3sNRBDkC0Fifjiyru3MzJsj6/+I4aP+Dz19E+O7ONxpMt5n5lmQVoxlQkIxliChGEuQUIwlSCjGEiQUYwkSirEECcVYgoRiLEFCMZYgoRhLkFCMJUgoxhIkFGMJEoqxBAnFWIKEYixBQjGWIKEYS5BQjCVIKMYSJBRjCRKKsQQJxViChGIsQUIxliChGOvXl/fvTa5LevrLj8/7/B73U15va/eXcyKTwYiRckxGxxGj44jRccToOGJ0HDE6jhgdR4yOI0bHEaPjiNFxxOg4YnSIESJGiBghYoSIESJGiBghYoSIESJGiBghYoSIESJGiBghYoSIESJGiBghYoSIEfIYumDJzPwWo+WPyegdWS+3S/G7BwAAAADmej4BKf6YK/amsskAAAAASUVORK5CYII="></img></a></div>
      <h4 className="date" ref={projectDetailedDateRef}>2022-2023</h4>
      <tt className="project-detailed-description" ref={projectDetailedDescriptionRef}>{project.projectDescription}</tt>
    </div>
    <div className="project-description"><h4 ref={projectDetailedFeatureTitleRef}>features</h4><tt ref={projectDetailedFeatureRef}>{project.features}</tt></div>
    <div className="project-description"><h4 ref={projectDetailedInstallationTitleRef}>Installation</h4><tt ref={projectDetailedInstallatioRef}>{project.installation}</tt></div>
    <div className="project-description"><h4 ref={projectDetailedBackendTitleRef}>Backend Setup</h4><tt ref={projectDetailedBackendRef}>{project.backend}</tt></div>
    <div className="project-description"><h4 ref={projectDetailedFrontendTitleRef}>Frontend Setup</h4><tt ref={projectDetailedFrontendRef}>{project.frontend}</tt></div>
    <div className="project-description"><h4 ref={projectDetailedTechnologyTitleRef}>Technology</h4><tt ref={projectDetailedTechnologyRef}>{project.technology}</tt></div>
    </div>

    </div>
  )
}


