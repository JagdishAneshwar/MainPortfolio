import React from 'react'
import './sociallinks.css'

export default function SocialLinks() {
  return (
    <>
    
    <a className="social-widget btn btn-primary bg-dark border-0 footer-title title-social-links" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions1" aria-controls="offcanvasWithBothOptions">Social Links</a>



<div className="offcanvas social-wrapper offcanvas-start bg-dark" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions1" aria-labelledby="offcanvasWithBothOptionsLabel">
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
</div></>
  )
}
