import React from 'react'
import './newabout.css'

export default function About() {
  return (
    <section className='new-about-section'>
    <div className="new-about-wrapper">
      <div className="new-about-title-section">
        <h2>About.</h2>
      </div>
      <div className="new-about-description">
        <p><tt>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quos inventore minus rem corrupti similique omnis, velit cumque quisquam maiores ullam aut in recusandae explicabo facilis eveniet. Placeat, animi alias.</tt></p>
        <div className="social-share" >
    <div className="icon-wrapper">
    <a class="icons8-github" href="https://github.com/JagdishAneshwar"></a>
    </div>
    <div className="icon-wrapper">
    <a class="icons8-whatsapp" href="https://wa.link/91sbjb"></a>
    </div>
    <div className="icon-wrapper">
    <a class="icons8-linkedin" href="https://www.linkedin.com/in/jagdish-aneshwar/"></a>
    </div>
    <div className="icon-wrapper">
    <a class="icons8-facebook" href="https://www.facebook.com/JagdishAneshwar"></a>
    </div>
    <div className="icon-wrapper">
    <a class="icons8-instagram" href="https://www.instagram.com/jagdishaneshwar/"></a>
    </div>
    <div className="icon-wrapper">
    <a class="icons8-medium" href="https://medium.com/@jagdish_aneshwar"></a>
    </div>
</div>
      </div>
    </div>
    </section>
  )
}
