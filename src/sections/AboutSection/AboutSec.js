import React from 'react'
import "./about.css"

export default function AboutSec() {
  return (
    <section className='about'>
    <div className="about-wrapper">
        <div className="about-left">
            <div className='profile-photo'></div>
        </div>
        <div className="about-right">
        <p className='about-title'>About</p>
        <p className='about-description'><tt>Hello, my name is Jagdish Aneshwar & I'm a Computer Sciennce graduate from Thakur College Of Science and Commerce. I wanted to specialize in the field of Web Development and User Interactivity.</tt></p>
        </div>
    </div>
    </section>
  )
}
