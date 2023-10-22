import './Project.css'
import Project from '../../components/Project/Project'
import { Link } from 'react-router-dom';
import React from 'react'

export default function ProjectSec() {
  return (
    <>
    <div className="projects-title">
    <p>Projects</p>
</div>
    <div className='projects-section'>
    <div className='projects-wrapper'>
        <Link to="/ProjectDetails"><Project title="Project Management WA" img='https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974' /></Link> 
        <Project title="Project Management WA" img='https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1932' />
        <Project title="Project Management WA" img='https://images.unsplash.com/photo-1635396259299-2eb9a880075a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1780' />
        <Project title="Project Management WA" img='https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070' />
    </div>
    </div>
    </>
  )
}











